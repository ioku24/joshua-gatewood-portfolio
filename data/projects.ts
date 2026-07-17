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
    "I'm an AI Engineer at Brinker. I came up through marketing operations, then AI coding tools let me build the systems I used to only spec. Now I ship autonomous AI systems and full-stack platforms, from a field-operations platform that was acquired to a content engine I'm building today. I care about systems that actually run in the real world: fact-checked, human-in-the-loop, and measured.",

  stats: [
    {
      value: "Acquired",
      label: "A field-ops platform, bought soon after launch",
    },
    { value: "~2 mo", label: "Concept to production on that platform" },
    { value: "#1", label: "Client site ranked first in Perplexity" },
  ],

  projects: [
    {
      name: "Personal RAG Knowledge System",
      description:
        "A retrieval system over my own ~300-chunk Obsidian vault that auto-surfaces the right notes into my AI agents mid-task and stays silent when nothing is relevant. It combines deterministic keyword search with multilingual-e5 vector search (Pinecone), then follows my notes' wiki-links to pull in linked context, with a dependency-free local floor so recall degrades gracefully instead of failing when the vector store is down.",
      url: "#",
      context: "Building",
      highlights: [
        "Hybrid retrieval: weighted keyword scoring plus dense (multilingual-e5) semantic search, merged and deduped",
        "Walks the Obsidian wiki-link graph: retrieved notes pull in their 1-hop linked neighbors, so connected context comes along",
        "Precision-first abstain gate injects context only when the semantic hit is corroborated, so out-of-scope queries stay silent",
        "Measured like production: Recall@4 ~0.91, MRR 0.80, and 100% correct abstention on out-of-scope queries against a golden-set eval",
        "Default-deny governance layer that separates personal knowledge from confidential data, verified at zero leakage",
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
        "A field operations platform I built for a commercial construction company, replacing triple manual data entry (paper timesheets, accounting, and spreadsheets) with one offline-capable app. Crews log time from the jobsite, estimates and cost data import automatically, and an AI layer generates cost reports, drafts change orders, and sends a daily briefing. Built from concept to production in about two months, then acquired by a company.",
      url: "#",
      isLive: true,
      context: "Acquired",
      highlights: [
        "Eliminated roughly 8 hours a week of manual re-entry between the field, accounting, and spreadsheets",
        "Turned a full day of monthly cost reporting into one upload and one click",
        "Role-based access and multi-company architecture, offline-capable for remote job sites",
        "AI layer for cost reports, change-order drafts, and daily project briefings",
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
        "A venture-agnostic content and distribution engine I'm building: it researches trends from public sources, ranks and fact-checks them, drafts posts in a defined brand voice, and routes every draft through a human approval gate before publishing and measuring. Built as a reusable core with a swappable per-venture config, so the same pipeline runs any brand by changing configuration, not code.",
      url: "#",
      context: "Building",
      highlights: [
        "A deliberate, research-backed alternative to multi-agent swarms: one deterministic, fact-checked pipeline with human-in-the-loop",
        "Runs on the same agent runtime as a second autonomous agent that scouts AI-frontier signal and briefs me daily",
        "The content-creation half runs daily; multi-channel distribution and a learning loop are in active development",
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
        "The retrieval pattern I build for organizations: a system that answers questions from a company's own documents (SOPs, policies, handbooks) with a citation on every claim, and defers instead of guessing when the source isn't there. Embeddings run inside the org's environment for data residency, so sensitive information never leaves it.",
      url: "#",
      context: "Building",
      highlights: [
        "Cite-or-defer answers: every claim links to its source document, and the system abstains rather than hallucinate",
        "In-boundary embeddings so sensitive data never leaves the organization's environment",
        "Same eval-first rigor as my personal RAG: retrieval quality is measured before anything ships",
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
      name: "US Gage",
      description:
        "Full digital transformation for a precision thread-gauge manufacturer (whose customers include GE Aerospace and BAE Systems). Website redesign, Google Ads optimization (health score 22 → 50, optimization score 71% → 90%), full analytics infrastructure (GA4 + GTM + GSC), brand strategy, and competitive analysis.",
      url: "#",
      context: "Client Work",
      techStack: [
        "WordPress",
        "WooCommerce",
        "Google Ads",
        "GA4/GTM",
        "SEO",
        "Brand Strategy",
      ],
      highlights: [
        "Google Ads health score 22 → 50 (more than doubled), optimization score 71% → 90%",
        "6 conversion events configured across GA4, GTM, and Google Ads",
        "Complete brand repositioning around speed, an uncontested differentiator in market",
        "E-commerce integration (WooCommerce + Stripe) for direct gauge purchasing",
      ],
    },
    {
      name: "Samco FM",
      description:
        "Website, iOS app (live on the App Store), and full SEO/AEO strategy for commercial HVAC company. Ranked on Google's first page within a week. #1 in Perplexity, visible in ChatGPT and Grok.",
      url: "https://samcofm.com",
      appStoreUrl: "https://apps.apple.com/us/app/samco-fm/id6759766613",
      isLive: true,
      context: "Client Work",
      techStack: ["React Native", "iOS", "SEO", "AEO", "Web Development"],
      highlights: [
        "Built website + iOS app (work orders, QR scanning, GPS tracking), shipped to the App Store",
        "First page of Google within 1 week",
        "#1 in Perplexity, visible in ChatGPT and Grok for commercial HVAC queries",
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
      name: "Gauntlet AI",
      description:
        "Marketing operations for an established AI company. Full-funnel audit, CRM cleanup, content automation, and competitive intelligence.",
      url: "#",
      context: "Marketing Operations",
      techStack: ["HubSpot", "Marketing Ops", "Automation"],
      highlights: [
        "Full-funnel audit and roadmap that contributed to 2x pipeline growth",
        "Resolved 4,400+ CRM data issues and set data-hygiene standards",
        "Built content automation that lifted team output 3-5x",
      ],
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
