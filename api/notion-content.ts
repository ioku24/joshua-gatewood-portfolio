import type { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  query: Record<string, string | string[]>;
  body: any;
  method?: string;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
  setHeader: (name: string, value: string) => VercelResponse;
}

const NOTION_API_VERSION = '2022-06-28';
const NOTION_PAGE_ID = '2eae3fe480e5818ea5a6d2b423cc3a07';

interface NotionBlock {
  type: string;
  [key: string]: any;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const notionToken = process.env.NOTION_API_TOKEN;

    if (!notionToken) {
      console.error('NOTION_API_TOKEN environment variable is not set');
      return res.status(500).json({ error: 'Notion API token not configured' });
    }

    // Fetch page content from Notion API
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${NOTION_PAGE_ID}/children?page_size=100`,
      {
        headers: {
          'Authorization': `Bearer ${notionToken}`,
          'Notion-Version': NOTION_API_VERSION,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Notion API error:', response.status, errorText);
      return res.status(response.status).json({
        error: 'Failed to fetch from Notion',
        details: errorText
      });
    }

    const data = await response.json();
    const blocks: NotionBlock[] = data.results || [];

    // Parse the blocks into structured data
    const content = parseNotionBlocks(blocks);

    // Cache for 30 seconds (Option A: near-instant updates)
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

    return res.status(200).json(content);
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

function parseNotionBlocks(blocks: NotionBlock[]) {
  let currentSection = '';
  const result: any = {
    name: '',
    tagline: '',
    about: '',
    photoUrl: '',
    calComUrl: '',
    resumeUrl: '',
    socials: [],
    projects: []
  };

  let currentProject: any = null;
  let currentFieldType = '';

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const type = block.type;

    // Handle heading blocks to determine section
    if (type === 'heading_1') {
      const text = extractPlainText(block[type]);
      if (text.includes('ABOUT')) currentSection = 'about';
      else if (text.includes('LINKS')) currentSection = 'links';
      else if (text.includes('PROJECTS')) currentSection = 'projects';
    }

    // Handle heading_2 (project names)
    if (type === 'heading_2' && currentSection === 'projects') {
      // Save previous project if exists
      if (currentProject) {
        result.projects.push(currentProject);
      }

      const projectName = extractPlainText(block[type]);
      currentProject = {
        name: projectName,
        description: '',
        url: '#',
        isLive: false,
        context: '',
        media: []
      };
    }

    // Handle paragraph blocks
    if (type === 'paragraph') {
      const text = extractRichText(block[type]);
      const plainText = extractPlainText(block[type]);

      if (currentSection === 'about') {
        if (plainText.startsWith('Name:')) {
          result.name = plainText.replace('Name:', '').trim();
        } else if (plainText.startsWith('Tagline:')) {
          result.tagline = plainText.replace('Tagline:', '').trim();
        } else if (plainText.startsWith('Bio:')) {
          result.about = plainText.replace('Bio:', '').trim();
        } else if (plainText.startsWith('Photo URL:')) {
          result.photoUrl = plainText.replace('Photo URL:', '').trim();
        }
      }

      if (currentSection === 'links') {
        if (plainText.includes('Cal.com:')) {
          const url = extractUrl(text);
          if (url) result.calComUrl = url;
        } else if (plainText.startsWith('Resume:')) {
          const url = extractUrl(text);
          if (url) result.resumeUrl = url;
        } else if (plainText.startsWith('LinkedIn:')) {
          const url = extractUrl(text);
          if (url) result.socials.push({ name: 'LinkedIn', url, icon: 'Linkedin' });
        } else if (plainText.startsWith('X:')) {
          const url = extractUrl(text);
          if (url) result.socials.push({ name: 'X', url, icon: 'Twitter' });
        } else if (plainText.startsWith('Instagram:')) {
          const url = extractUrl(text);
          if (url) result.socials.push({ name: 'Instagram', url, icon: 'Instagram' });
        } else if (plainText.startsWith('YouTube:')) {
          const url = extractUrl(text);
          if (url) result.socials.push({ name: 'YouTube', url, icon: 'Youtube' });
        }
      }

      if (currentSection === 'projects' && currentProject) {
        if (plainText.includes('Live:')) {
          currentProject.isLive = plainText.toLowerCase().includes('yes');
        } else if (plainText.includes('Link:')) {
          const url = extractUrl(text);
          if (url) currentProject.url = url;
        } else if (plainText.includes('Description:')) {
          currentProject.description = plainText.replace(/📝\s*Description:/, '').trim();
        } else if (plainText.includes('Context:')) {
          currentProject.context = plainText.replace(/📍\s*Context:/, '').trim();
        }
      }
    }

    // Handle bulleted list items (media)
    if (type === 'bulleted_list_item' && currentSection === 'projects' && currentProject) {
      const plainText = extractPlainText(block[type]);
      const url = plainText.trim();

      if (url) {
        // Check if this is an embed URL
        const isEmbed = url.includes('descript.com') || url.includes('youtube.com') || url.includes('youtu.be') || url.includes('loom.com');

        if (isEmbed) {
          // Look ahead to see if the next item is an image (thumbnail)
          const nextBlock = blocks[i + 1];
          let thumbnail = undefined;

          if (nextBlock && nextBlock.type === 'bulleted_list_item') {
            const nextText = extractPlainText(nextBlock[nextBlock.type]).trim();
            if (nextText.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
              thumbnail = nextText;
              i++; // Skip the next block since we used it as thumbnail
            }
          }

          currentProject.media.push({
            type: 'embed',
            url: url.replace(' (Descript embed)', '').replace(' (YouTube)', '').trim(),
            ...(thumbnail && { thumbnail })
          });
        } else if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          currentProject.media.push({
            type: 'image',
            url: url
          });
        } else if (url.match(/\.(mp4|mov|avi)$/i)) {
          currentProject.media.push({
            type: 'video',
            url: url
          });
        }
      }
    }
  }

  // Save last project
  if (currentProject) {
    result.projects.push(currentProject);
  }

  return result;
}

function extractPlainText(richTextBlock: any): string {
  if (!richTextBlock || !richTextBlock.rich_text) return '';
  return richTextBlock.rich_text.map((rt: any) => rt.plain_text || '').join('');
}

function extractRichText(richTextBlock: any): any[] {
  if (!richTextBlock || !richTextBlock.rich_text) return [];
  return richTextBlock.rich_text;
}

function extractUrl(richText: any[]): string | null {
  for (const rt of richText) {
    if (rt.href) return rt.href;
    if (rt.text?.link?.url) return rt.text.link.url;
  }
  return null;
}
