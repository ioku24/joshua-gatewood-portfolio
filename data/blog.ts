/**
 * Blog Configuration
 *
 * Posts live in data/posts.json. They are imported at build time so prerendered
 * pages carry the full post text.
 */

import postsJson from "./posts.json";

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

// ponytail: every post ships in the main bundle (1 post, ~7 KB); split per post if the blog grows past a few dozen.
export const posts: BlogPost[] = postsJson;

// Dates format in UTC so the build server and the browser print the same day (hydration must match).
export const formatPostDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions,
) =>
  new Date(dateString).toLocaleDateString("en-US", {
    ...options,
    timeZone: "UTC",
  });
