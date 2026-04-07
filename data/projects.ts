/**
 * Site Configuration - Edit this file to update your portfolio content
 *
 * Future: This will be connected to Notion for live editing
 */

export interface ProjectMedia {
  type: 'image' | 'video' | 'embed';
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
  icon: 'Linkedin' | 'Twitter' | 'Instagram' | 'Youtube' | 'Github';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  photoUrl: string;
  calComUrl: string;
  resumeUrl: string;
  about: string;
  projects: Project[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Joshua Gatewood",
  tagline: "Builder & Marketer",
  photoUrl: "/JG profile photos.jpeg",
  calComUrl: "https://cal.com/joshuagatewood",
  resumeUrl: "https://drive.google.com/file/d/1BIZjsPMEKay0K9RrAORZ0gMJug7-edm4/view?usp=sharing",

  about: "I build AI agent systems and ship SaaS products. BoringClaw runs 22 autonomous agents across marketing, sales, and operations. RankEasy automates SEO content at scale. I also build high-converting websites for clients like US Gage and Samco FM. I started in marketing ops — now I build the tools.",

  projects: [
    {
      name: "BoringClaw",
      description: "Autonomous multi-agent AI business team built on OpenClaw (open-source). 25+ agents across Sales, Marketing, and Operations, orchestrated by a CEO agent (Claude Opus 4.6) with pull-based scheduling, formal pipeline contracts, and self-healing. Runs 24/7.",
      url: "https://boringclaw.com",
      isLive: true,
      techStack: ["TypeScript", "Node.js", "Express.js", "React", "Claude API", "Twitter/X API", "Slack API", "Cron"],
      highlights: [
        "25+ agents with hierarchical model routing (Opus \u2192 Sonnet \u2192 Haiku)",
        "96% cost reduction through pull-based architecture ($50/day \u2192 $2/day)",
        "24/7 autonomous operation with circuit breakers and self-healing"
      ],
      media: [
        { type: "video", url: "/assets/boringclaw-demo.mp4", thumbnail: "/assets/boringclaw-site.png" },
        { type: "image", url: "/assets/boringclaw-site.png" },
        { type: "image", url: "/assets/openclaw-org-chart.png" }
      ]
    },
    {
      name: "RankEasy.io",
      description: "Full-stack AI SaaS \u2014 automated SEO content generation, analytics dashboard, and Stripe payment processing. Designed, built, and shipped to production in 4 days.",
      url: "https://rankeasy.io",
      isLive: true,
      techStack: ["Next.js", "React", "TypeScript", "Supabase", "Clerk", "Stripe", "Claude AI"],
      highlights: [
        "End-to-end SaaS: auth, payments, AI content generation, analytics",
        "Built and shipped to production in 4 days"
      ],
      media: [
        { type: "image", url: "/assets/easyrank1.webp" }
      ]
    },
    {
      name: "US Gage",
      description: "Professional website with 3D product visualization for precision manufacturer. Clients include GE Aerospace and BAE Systems.",
      url: "https://usgage.com",
      isLive: true,
      context: "Client Work",
      techStack: ["React", "WebGL", "Tailwind CSS", "SEO"],
      media: [
        { type: "image", url: "/assets/us-gage-site.png" }
      ]
    },
    {
      name: "Samco FM",
      description: "Website, mobile app (iOS), and full SEO/AEO strategy for commercial HVAC company. Ranked on Google's first page within a week. #1 in Perplexity, visible in ChatGPT and Grok. 4.9-star rating, 255+ reviews.",
      url: "https://samcofm.com",
      isLive: true,
      context: "Client Work",
      techStack: ["React Native", "iOS", "SEO", "AEO", "Web Development"],
      highlights: [
        "Built website + mobile app (work orders, QR scanning, GPS tracking)",
        "First page of Google within 1 week",
        "#1 in Perplexity, visible in ChatGPT and Grok for commercial HVAC queries"
      ],
      media: [
        { type: "image", url: "/assets/samcofm-site.png" },
        { type: "image", url: "/assets/samcofm-google.png" },
        { type: "image", url: "/assets/samco-app-home.png" },
        { type: "video", url: "/assets/samco-app-demo.mp4", thumbnail: "/assets/samco-app-jobs.png" },
        { type: "image", url: "/assets/samcofm-perplexity.png" },
        { type: "image", url: "/assets/samcofm-grok.png" },
        { type: "image", url: "/assets/samcofm-chatgpt.png" }
      ]
    },
    {
      name: "UGM Field Ops",
      description: "Full-stack field operations platform for construction company. Real-time budget tracking, mobile clock-in/out, foreman approval workflow, AI-powered insights, and offline-first architecture. Delivered in 2 weeks, $8K fixed-cap.",
      url: "#",
      isLive: true,
      context: "Client Work",
      techStack: ["Next.js", "React 19", "TypeScript", "Supabase", "Claude AI", "PWA"],
      highlights: [
        "Solved $26K-$39K/year manual data entry cost; 225-388% ROI",
        "7-role permission hierarchy with Supabase RLS",
        "Offline-first with IndexedDB sync for remote job sites",
        "AI morning briefings + natural language cost queries"
      ],
      media: [
        { type: "video", url: "/assets/ugm-demo.mp4", thumbnail: "/assets/ugm-dashboard.png" },
        { type: "image", url: "/assets/ugm-dashboard.png" },
        { type: "image", url: "/assets/ugm-mobile.png" },
        { type: "image", url: "/assets/ugm-approvals.png" }
      ]
    },
    {
      name: "Marketing Ops Infrastructure",
      description: "Funnel redesigns, HubSpot cleanup, workflow automation. Saved 30% of team time.",
      url: "#",
      context: "at Gauntlet AI",
      techStack: ["HubSpot", "Marketing Ops", "Workflow Automation"],
      media: [
        { type: "embed", url: "https://share.descript.com/embed/zibGionZg6K", thumbnail: "/assets/gauntlet-funnel-system.webp" },
        { type: "image", url: "/assets/data-cleanup-map-2.webp" },
        { type: "image", url: "/assets/gauntlet-old-website-2.webp" },
        { type: "image", url: "/assets/gauntlet-new-website-2.webp" }
      ]
    },
    {
      name: "Content System",
      description: "Repeatable system that turns one idea into 2-4 weeks of content. 3x output.",
      url: "#",
      context: "at Gauntlet AI",
      techStack: ["Content Strategy", "Automation", "Repurposing"],
      media: [
        { type: "embed", url: "https://share.descript.com/embed/kaoabOBAcBJ", thumbnail: "/assets/content-os-system.webp" }
      ]
    },
    {
      name: "Competitive Ad Intelligence",
      description: "AI-powered analysis of 100+ competitor ads to inform creative strategy.",
      url: "#",
      context: "at Gauntlet AI",
      techStack: ["AI/LLM Analysis", "Data Pipeline", "Competitive Intelligence"],
      media: [
        { type: "image", url: "/assets/competitive-ad-analysis.webp" },
        { type: "image", url: "/assets/competitive-ad-intelligence-1.webp" }
      ]
    }
  ],

  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/joshuangatewood", icon: "Linkedin" },
    { name: "X", url: "https://x.com/joshgatewood", icon: "Twitter" },
    { name: "Instagram", url: "https://www.instagram.com/joshhustle/", icon: "Instagram" },
    { name: "YouTube", url: "https://www.youtube.com/@joshuagatewood", icon: "Youtube" }
  ]
};
