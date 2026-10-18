/**
 * Site Configuration - Edit this file to update your portfolio content
 */

export interface ProjectMedia {
  type: "image" | "video" | "embed";
  url: string; // Image path, YouTube URL, local MP4 path, or embed URL (Descript, Loom)
  thumbnail?: string; // Optional thumbnail for videos/embeds
  fit?: "cover" | "contain"; // "contain" shows the whole image uncropped (use for diagrams). Default "cover".
}

export interface Project {
  name: string;
  description: string;
  url: string;
  appStoreUrl?: string; // Link to a shipped iOS app on the App Store
  isLive?: boolean;
  context?: string; // e.g., "at Gauntlet AI"
  techStack?: string[]; // e.g., ["TypeScript", "React"]
  highlights?: string[]; // Key bullet points
  media?: ProjectMedia[]; // Images and videos
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "Linkedin" | "Twitter" | "Instagram" | "Youtube" | "Github";
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  photoUrl: string;
  calComUrl: string;
  resumeUrl: string;
  about: string;
  stats: Stat[];
  projects: Project[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Joshua Gatewood",
  tagline: "AI Engineer",
  headline:
    // U+2011 non-breaking hyphen so "full-stack" never splits across lines
    "I build autonomous AI systems and full‑stack platforms. One was acquired.",
  photoUrl: "/jg-portrait.webp",
  calComUrl: "https://cal.com/joshuagatewood",
  resumeUrl: "/resume",

  about:
    "Aloha, I'm Josh, an AI engineer originally from Hawaii. I love building production-grade systems, and I've shipped autonomous agents and multi-step agentic workflows. Off the clock, you'll find me learning about AI and robotics, or in the gym.",

  // Labels stay short enough to wrap to two lines in a 98px mobile column
  stats: [
    { value: "Acquired", label: "Six weeks after launch" },
    { value: "~2 mo", label: "Concept to production" },
    { value: "#1", label: "Client site in Perplexity" },
  ],

  projects: [
    {
      name: "Samco Ops",
      description:
        "A custom operations platform for a commercial HVAC company, replacing their off-the-shelf field-service software. One system for work orders, scheduling, invoicing, and payments, built around how their team actually works.",
      url: "#", // ponytail: unreleased client system, Josh demos it from his own tab
      context: "Building",
      highlights: [
        "Ten core workflows, from service request to paid invoice",
        "Designed for online invoice payments and QuickBooks sync",
        "Pairs with the company's iOS app for technicians in the field",
      ],
      techStack: ["Next.js", "TypeScript", "Supabase", "Postgres"],
    },
    {
      name: "Personal RAG Knowledge System",
      description:
        "A retrieval system over my Obsidian vault that surfaces the right notes into my AI agents mid-task — and stays silent when nothing is relevant.",
      url: "#",
      context: "Building",
      highlights: [
        "Recall@4 ~0.91, MRR 0.80 against a golden-set eval",
        "100% correct abstention on out-of-scope queries",
        "Hybrid keyword + vector retrieval that follows the vault's wiki-links",
      ],
      techStack: [
        "Python",
        "Pinecone",
        "multilingual-e5",
        "wiki-link graph",
        "evals",
      ],
      media: [
        { type: "image", url: "/assets/rag-pipeline.svg", fit: "contain" },
      ],
    },
    {
      name: "UGM Field Ops",
      description:
        "One offline-capable app that replaced a construction company's paper timesheets, spreadsheet cost tracking, and manual re-entry — with an AI layer for cost reports and change orders.",
      url: "https://ugm-field-ops.vercel.app",
      isLive: true,
      context: "Acquired",
      highlights: [
        "Acquired in a six-figure deal six weeks after launch",
        "Field crews have clocked in on it since October 2026",
        "Job-cost reports built straight from the company's accounting data",
        "Eliminated ~8 hours a week of manual re-entry",
      ],
      media: [
        {
          type: "video",
          url: "/assets/ugm-demo.mp4",
          thumbnail: "/assets/ugm-dashboard.webp",
        },
        { type: "image", url: "/assets/ugm-dashboard.webp" },
        { type: "image", url: "/assets/ugm-mobile.webp" },
        { type: "image", url: "/assets/ugm-approvals.webp" },
      ],
    },
    {
      name: "AI Agents at Brinker",
      description:
        "As the AI engineer for a group of construction and facilities companies, I build agents that each take one office job off people's plates. They read company systems without changing them and cite a source for every answer.",
      url: "#",
      context: "Day Job",
      highlights: [
        "Submittal Review: checks contractor submittals against project specs and sends the engineer a first-pass review",
        "Knowledge Overseer and filing agent: one consistent, findable filing system across the companies",
        "Math runs in code, not the model, and every result is tested and logged",
      ],
    },
    {
      name: "Samco FM",
      description:
        "Website, iOS app (live on the App Store), and full SEO/AEO strategy for a commercial HVAC company.",
      url: "https://samcofm.com",
      appStoreUrl: "https://apps.apple.com/us/app/samco-fm/id6759766613",
      isLive: true,
      context: "Client Work",
      techStack: ["React Native", "iOS", "SEO", "AEO", "Web Development"],
      highlights: [
        "First page of Google within a week",
        "#1 in Perplexity; visible in ChatGPT and Grok",
        "Work orders, QR scanning, and GPS tracking in the app",
      ],
      media: [
        { type: "image", url: "/assets/samcofm-site.webp" },
        { type: "image", url: "/assets/samcofm-google.webp" },
        { type: "image", url: "/assets/samco-app-home.webp" },
        {
          type: "video",
          url: "/assets/samco-app-demo.mp4",
          thumbnail: "/assets/samco-app-jobs.webp",
        },
        { type: "image", url: "/assets/samcofm-perplexity.webp" },
        { type: "image", url: "/assets/samcofm-grok.webp" },
        { type: "image", url: "/assets/samcofm-chatgpt.webp" },
      ],
    },
    {
      name: "US Gage",
      description:
        "Full digital transformation for a precision thread-gauge manufacturer supplying GE Aerospace and BAE Systems: Google Ads (health score 22 → 50), analytics, and e-commerce.",
      url: "#",
      context: "Client Work",
    },
    {
      name: "Gauntlet AI",
      description:
        "Marketing operations for an AI company: full-funnel audit contributing to 2x pipeline growth, 4,400+ CRM issues resolved, 3-5x content output.",
      url: "#",
      context: "Marketing Operations",
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joshuangatewood",
      icon: "Linkedin",
    },
    { name: "GitHub", url: "https://github.com/ioku24", icon: "Github" },
    { name: "X", url: "https://x.com/joshgatewood", icon: "Twitter" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/joshuangatewood/",
      icon: "Instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@joshuagatewood",
      icon: "Youtube",
    },
  ],
};
