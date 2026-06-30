/**
 * Site Configuration - Edit this file to update your portfolio content
 */

export interface ProjectMedia {
  type: "image" | "video" | "embed";
  url: string; // Image path, YouTube URL, local MP4 path, or embed URL (Descript, Loom)
  thumbnail?: string; // Optional thumbnail for videos/embeds
}

export interface Project {
  name: string;
  description: string;
  url: string;
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

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  photoUrl: string;
  calComUrl: string;
  resumeUrl: string;
  about: string;
  projects: Project[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Joshua Gatewood",
  tagline: "AI Engineer",
  headline:
    "I build autonomous AI systems and full-stack platforms. One I built was acquired.",
  photoUrl: "/JG profile photos.jpeg",
  calComUrl: "https://cal.com/joshuagatewood",
  resumeUrl: "/resume",

  about:
    "I'm an AI Engineer at Brinker. I started in marketing ops, then picked up AI coding tools and realized I could build what I used to only spec out. On my own, I built a field-operations platform for a construction company that was acquired, I'm building a content and distribution engine, and I deliver production websites for clients like a precision manufacturer and a commercial HVAC company. I build fast, ship to production, and measure everything.",

  projects: [
    {
      name: "UGM Field Ops",
      description:
        "Full-stack field operations platform for a construction company. Real-time budget tracking, mobile clock-in/out, foreman approval workflow, AI-powered insights, and offline-first for remote job sites. Acquired by a company about a month and a half after launch.",
      url: "#",
      isLive: true,
      context: "Acquired",
      techStack: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Supabase",
        "Claude AI",
        "PWA",
      ],
      highlights: [
        "Replaced manual data entry that was costing the company $26K-$39K/year in labor",
        "Role-based access for foremen, PMs, and office staff",
        "Works fully offline at remote job sites",
        "AI morning briefings and natural-language cost queries",
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
        "An AI system I'm building that turns trend signals and a single idea into voice-matched, publish-ready content and handles distribution across channels, with a human-approval queue. It grew out of an earlier multi-agent system I built across sales, marketing, and operations; I'm now focused on the content and distribution layer.",
      url: "#",
      context: "Building",
      techStack: ["Claude API", "Multi-Agent Systems", "Automation"],
      highlights: [
        "Pulls live signals, drafts in my voice, and routes to a one-tap approve, edit, or reject queue",
        "Multi-agent pipeline with a quality gate before anything publishes",
      ],
    },
    {
      name: "US Gage",
      description:
        "Full digital transformation for precision thread gauge manufacturer serving GE Aerospace and BAE Systems. Website redesign, Google Ads optimization (health score 22 → 50, optimization score 71% → 90%), full analytics infrastructure (GA4 + GTM + GSC), brand strategy, and competitive analysis.",
      url: "https://usgage.com",
      isLive: true,
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
        "Complete brand repositioning around speed — uncontested differentiator in market",
        "E-commerce integration (WooCommerce + Stripe) for direct gauge purchasing",
      ],
      media: [{ type: "image", url: "/assets/us-gage-site.png" }],
    },
    {
      name: "Samco FM",
      description:
        "Website, mobile app (iOS), and full SEO/AEO strategy for commercial HVAC company. Ranked on Google's first page within a week. #1 in Perplexity, visible in ChatGPT and Grok.",
      url: "https://samcofm.com",
      isLive: true,
      context: "Client Work",
      techStack: ["React Native", "iOS", "SEO", "AEO", "Web Development"],
      highlights: [
        "Built website + mobile app (work orders, QR scanning, GPS tracking)",
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
      media: [
        {
          type: "embed",
          url: "https://share.descript.com/embed/zibGionZg6K",
          thumbnail: "/assets/gauntlet-funnel-system.webp",
        },
        { type: "image", url: "/assets/gauntlet-new-website-2.webp" },
      ],
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joshuangatewood",
      icon: "Linkedin",
    },
    { name: "X", url: "https://x.com/joshgatewood", icon: "Twitter" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/joshhustle/",
      icon: "Instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@joshuagatewood",
      icon: "Youtube",
    },
  ],
};
