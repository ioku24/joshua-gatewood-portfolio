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
    "I build autonomous AI systems and full-stack platforms. One was acquired.",
  photoUrl: "/JG profile photos.jpeg",
  calComUrl: "https://cal.com/joshuagatewood",
  resumeUrl: "/resume",

  about:
    "Aloha, I'm Josh, an AI engineer originally from Hawaii. I love building production-grade systems, and I've shipped autonomous agents and multi-step agentic workflows. Off the clock, you'll find me learning about AI and robotics, or in the gym.",

  stats: [
    {
      value: "Acquired",
      label: "A field-ops platform, six weeks after launch",
    },
    { value: "~2 mo", label: "Concept to production on that platform" },
    { value: "#1", label: "Client site ranked first in Perplexity" },
  ],

  projects: [
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
      url: "#",
      isLive: true,
      context: "Acquired",
      highlights: [
        "Acquired in a six-figure deal six weeks after launch",
        "Eliminated ~8 hours a week of manual re-entry",
        "Role-based, multi-company, offline-capable for remote job sites",
      ],
      media: [
        {
          type: "video",
          url: "/assets/ugm-demo.mp4",
          thumbnail: "/assets/ugm-dashboard.png",
        },
        { type: "image", url: "/assets/ugm-dashboard.png" },
        { type: "image", url: "/assets/ugm-mobile.png" },
        { type: "image", url: "/assets/ugm-approvals.png" },
      ],
    },
    {
      name: "Content Engine",
      description:
        "A venture-agnostic content and distribution engine: researches trends, fact-checks, drafts in brand voice, and routes every post through human approval.",
      url: "#",
      context: "Building",
      highlights: [
        "One deterministic, fact-checked pipeline — not a multi-agent swarm",
        "Swappable per-venture config: same pipeline, any brand",
        "Creation runs daily; distribution and learning loop in development",
      ],
      techStack: [
        "autonomous agents",
        "LLM routing",
        "fact-check",
        "Telegram HITL",
      ],
      media: [{ type: "image", url: "/assets/agent-loop.svg", fit: "contain" }],
    },
    {
      name: "Enterprise RAG",
      description:
        "The retrieval pattern I build for organizations: answers from your own documents, a citation on every claim, and abstention instead of guessing.",
      url: "#",
      context: "Building",
      highlights: [
        "Cite-or-defer: every claim links to its source document",
        "In-boundary embeddings — sensitive data never leaves your environment",
        "Eval-first: retrieval quality measured before anything ships",
      ],
      techStack: [
        "RAG",
        "vector DB",
        "embeddings",
        "reranking",
        "citations",
        "evals",
      ],
      media: [
        { type: "image", url: "/assets/enterprise-rag.svg", fit: "contain" },
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
        { type: "image", url: "/assets/samcofm-site.png" },
        { type: "image", url: "/assets/samcofm-google.png" },
        { type: "image", url: "/assets/samco-app-home.png" },
        {
          type: "video",
          url: "/assets/samco-app-demo.mp4",
          thumbnail: "/assets/samco-app-jobs.png",
        },
        { type: "image", url: "/assets/samcofm-perplexity.png" },
        { type: "image", url: "/assets/samcofm-grok.png" },
        { type: "image", url: "/assets/samcofm-chatgpt.png" },
      ],
    },
    {
      name: "US Gage",
      description:
        "Full digital transformation for a precision thread-gauge manufacturer supplying GE Aerospace and BAE Systems: website, Google Ads (health score 22 → 50), analytics, and e-commerce.",
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
