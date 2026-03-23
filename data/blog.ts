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

// Fallback/demo posts (used when API is unavailable or for development)
export const demoPosts: BlogPost[] = [
  {
    id: "demo-1",
    slug: "coming-soon",
    title: "Blog Coming Soon",
    excerpt: "I'm setting up automated content generation with RankEasy. Stay tuned for SEO and marketing insights.",
    content: "<p>I'm setting up automated content generation with RankEasy. Stay tuned for SEO and marketing insights.</p>",
    published_at: new Date().toISOString(),
    reading_time: 1
  }
];
