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
  resumeUrl: "https://drive.google.com/file/d/1LMOU6El4YevpkGnVJMKM66dIUy3cBoKd/view?usp=sharing",

  about: "I started in traditional marketing ops—auditing funnels, cleaning CRM data, building automated workflows. Then I picked up AI coding tools and realized I could build what I used to only dream about. Now I ship SaaS products and marketing systems that actually work.",

  projects: [
    {
      name: "RankEasy.io",
      description: "AI-powered SEO platform with payments, automation, and analytics. Built in 4 days.",
      url: "https://rankeasy.io",
      isLive: true,
      media: [
        { type: "image", url: "/assets/easyrank1.webp" }
        // Add video: { type: "video", url: "https://youtube.com/embed/VIDEO_ID" }
      ]
    },
    {
      name: "Marketing Ops Infrastructure",
      description: "Funnel redesigns, HubSpot cleanup, workflow automation. Saved 30% of team time.",
      url: "#",
      context: "at Gauntlet AI",
      media: [
        { type: "embed", url: "https://share.descript.com/embed/zibGionZg6K", thumbnail: "/assets/gauntlet-funnel-system.webp" },
        { type: "image", url: "/assets/gauntlet-funnel-system.webp" },
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
      media: [
        // TODO: Host video on CDN (ImageKit/Cloudinary) - file too large for GitHub
        // { type: "video", url: "YOUR_CDN_URL_HERE", thumbnail: "/assets/content-os-system.webp" },
        { type: "image", url: "/assets/content-os-system.webp" }
      ]
    },
    {
      name: "Competitive Ad Intelligence",
      description: "AI-powered analysis of 100+ competitor ads to inform creative strategy.",
      url: "#",
      context: "at Gauntlet AI",
      media: [
        { type: "image", url: "/assets/competitive-ad-analysis.webp" },
        { type: "image", url: "/assets/competitive-ad-intelligence-1.webp" }
        // Add video: { type: "video", url: "https://youtube.com/embed/VIDEO_ID" }
      ]
    }
  ],

  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/joshuangatewood", icon: "Linkedin" },
    { name: "X", url: "https://x.com/joshhustles", icon: "Twitter" },
    { name: "Instagram", url: "https://www.instagram.com/joshhustle/", icon: "Instagram" },
    { name: "YouTube", url: "https://www.youtube.com/@joshuagatewood", icon: "Youtube" }
  ]
};
