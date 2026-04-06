import { SiteConfig, siteConfig as staticConfig } from '../data/projects';

/**
 * Fetches portfolio content from Notion via the API route
 * Notion controls: name, tagline, about, photo, links, socials
 * Static config controls: projects (with all media, tech stacks, highlights)
 */
export async function fetchNotionContent(): Promise<SiteConfig | null> {
  try {
    const response = await fetch('/api/notion-content');

    if (!response.ok) {
      console.error('Failed to fetch Notion content:', response.statusText);
      return null;
    }

    const data = await response.json();

    // Merge Notion data with static config — always use static projects
    const siteConfig: SiteConfig = {
      name: data.name || 'Joshua Gatewood',
      tagline: data.tagline || 'Builder & Marketer',
      photoUrl: data.photoUrl || '/JG profile photos.jpeg',
      calComUrl: (data.calComUrl && !data.calComUrl.match(/^https?:\/\/cal\.com\/?$/))
        ? data.calComUrl
        : 'https://cal.com/joshuagatewood',
      resumeUrl: data.resumeUrl || staticConfig.resumeUrl,
      about: data.about || staticConfig.about,
      projects: staticConfig.projects,
      socials: (data.socials && data.socials.length > 0) ? data.socials : staticConfig.socials
    };

    return siteConfig;
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    return null;
  }
}
