import { SiteConfig } from '../data/projects';

/**
 * Fetches portfolio content from Notion via the API route
 * Returns the same SiteConfig structure for compatibility
 */
export async function fetchNotionContent(): Promise<SiteConfig | null> {
  try {
    const response = await fetch('/api/notion-content');

    if (!response.ok) {
      console.error('Failed to fetch Notion content:', response.statusText);
      return null;
    }

    const data = await response.json();

    // Map the API response to SiteConfig structure
    const siteConfig: SiteConfig = {
      name: data.name || 'Joshua Gatewood',
      tagline: data.tagline || 'Builder & Marketer',
      photoUrl: data.photoUrl || '/JG profile photos.jpeg',
      calComUrl: (data.calComUrl && !data.calComUrl.match(/^https?:\/\/cal\.com\/?$/))
        ? data.calComUrl
        : 'https://cal.com/joshuagatewood',
      resumeUrl: data.resumeUrl || '',
      about: data.about || '',
      projects: data.projects || [],
      socials: data.socials || []
    };

    return siteConfig;
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    return null;
  }
}
