/**
 * Per-route <head> values. prerender.mjs writes them into each built page and builds
 * sitemap.xml from this list; components/RouteHead.tsx applies them on in-app navigation.
 */

import { posts } from "./blog";

export const SITE = "https://www.joshuangatewood.com";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  type?: "article";
  headline?: string; // posts only: title without the site suffix
  published?: string; // posts only: ISO date, used for the sitemap and article markup
}

export const routeMeta: RouteMeta[] = [
  {
    // Must match index.html, which stays the home page's head (prerender.mjs fails the build on drift).
    path: "/",
    title: "Joshua Gatewood | AI Engineer",
    description:
      "AI Engineer building autonomous AI systems and full-stack platforms. I built a field-operations platform that was acquired for six figures, I'm building a custom operations platform for a commercial HVAC company, and I deliver production websites and iOS apps for clients like Samco FM.",
  },
  {
    path: "/resume",
    title: "Resume | Joshua Gatewood, AI Engineer",
    description:
      "Resume of Joshua Gatewood, AI engineer at Brinker. Autonomous human-in-the-loop agent systems, production RAG, and the full stack around them. One platform I built was acquired for six figures.",
  },
  {
    path: "/blog",
    title: "Blog | Joshua Gatewood",
    description:
      "Running AI agent teams for a real business. Every win, every failure, every decision, documented as it happens.",
  },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | Joshua Gatewood`,
    description: p.excerpt,
    type: "article" as const,
    headline: p.title,
    published: p.published_at,
  })),
];
