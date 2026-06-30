/**
 * Blog Configuration
 *
 * Update BLOG_API_URL to point to your RankEasy API endpoint
 * e.g., "https://rankeasy.io/api/public/articles/joshuagatewood"
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  published_at: string;
  featured_image?: string;
  reading_time?: number; // minutes
}

// Blog posts served from static JSON in public/data/posts.json
export const BLOG_API_URL = "/data/posts.json";

// Fallback posts, used only if the static posts file fails to load.
export const demoPosts: BlogPost[] = [];
