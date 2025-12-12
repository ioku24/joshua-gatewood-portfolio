import { Project } from '../types';

/*
  HOW TO ADD YOUR OWN MEDIA:
  1. Place your video (.mp4) and image (.png, .jpg) files in the 'public' folder of your project.
     Recommended structure: create a folder named 'assets' inside 'public'.
  2. Update the 'url' field in the projects array below.
     Example: url: '/assets/screen-studio-video.mp4'
*/

export interface ProjectWithSlug extends Project {
  slug: string;
}

export const projects: ProjectWithSlug[] = [
  {
    id: 1,
    slug: 'marketing-ops',
    title: 'Marketing Ops Infrastructure',
    category: 'Operations',
    description: 'Streamlined campaign execution and reporting with custom automation workflows.',
    stats: '30% Time Saved',
    tags: ['HubSpot', 'Make.com', 'Automation'],
    link: '#',
    assets: [
      {
        title: 'Gauntlet Acquisition System – Challenger & Hiring Partner Funnel Redesign',
        type: 'embed',
        url: 'https://share.descript.com/embed/zibGionZg6K',
        caption: 'Gauntlet Acquisition System Overview: High-level Miro snapshot of the original flow on top and the redesigned Challenger / Hiring Partner funnels on the bottom.',
        challenge: "At Gauntlet, almost all of our traffic came from the founder's X profile and it all landed on the same homepage. The flow looked roughly like this: Traffic → homepage → Long opt-in form → calendar/application → booked call → sales. That homepage tried to do everything at once. We had multiple offers crammed into one experience, the copy was unfocused, and there wasn't a clear path for different visitors like students vs hiring partners. On the backend, tracking and nurture were weak, so a lot of people showed interest but fell through the cracks. Net result: scattered attention, leaky funnels, and no clean way to tell which offer or path was actually working.",
        solution: 'I audited the old acquisition system end-to-end, then rebuilt it as a simple, offer-driven model inside Miro. I simplified everything around a clear rule: 2 core offers = 2 focused funnels. I designed separate flows: A "Hiring Partner funnel" (VSL-style page → calendar) and a "Challenger funnel" (2-step flow built around a clear VSL-style page). Each audience starts on a page that speaks directly to them and one specific offer. Organic and paid traffic is now routed into the right funnel instead of being dumped on a catch-all homepage.',
        outcome: "This turned Gauntlet's acquisition from \"everyone hits the same messy page\" into a set of focused Challenger and Hiring Partner funnels that are much easier to track, automate, and improve."
      },
      {
        title: 'Acquisition Experience: Before and After',
        type: 'comparison',
        beforeVideo: 'https://ik.imagekit.io/kqcgf084pn/v1.5.mp4?updatedAt=1765279870030',
        afterVideo: 'https://ik.imagekit.io/kqcgf084pn/v3.mp4',
        beforeCaption: 'The old homepage tried to serve everyone, resulting in diluted messaging.',
        afterCaption: 'The new structure funnels users immediately into their specific journey.',
        challenge: "Before re-architecting the system, the single homepage approach forced all traffic—students, partners, and investors—into one generic funnel. This lack of segmentation meant we couldn't speak directly to specific pain points, resulting in low conversion rates and \"dirty\" data in the CRM. The new system separates these flows entirely.",
        solution: '',
        outcome: 'Clear separation of user intent and a 2x increase in qualified pipeline.'
      },
      {
        title: 'Data Cleanup Map – HubSpot CRM',
        type: 'image',
        url: 'https://ik.imagekit.io/kqcgf084pn/Data%20cleanup%20screenshot.png',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance, so any team member can understand and follow the CRM hygiene process.',
        challenge: "Gauntlet's HubSpot account had grown messy over time. Thousands of records were inconsistent or duplicated, lifecycle stages were unreliable, and unused properties and workflows were polluting the system. The sales and marketing teams were flying blind, because bad data meant bad reports, failed workflows, and no trustworthy view of the funnel or revenue. We needed a clear way to clean everything up and prevent it from breaking again.",
        solution: 'I built a visual "Data Cleanup Map" in Miro that turned CRM cleanup into a structured, repeatable process. The map walks through three phases: Strategy and Assessment, hands-on Action Steps, and Ongoing Maintenance and Prevention. It starts with a snapshot of the Data Quality Dashboard, then breaks down specific tasks like fixing users and permissions, archiving unused properties and forms, cleaning formatting issues, deduplicating records, tightening lifecycle logic, and setting GDPR-friendly email preferences. Finally, it defines a regular cleaning cadence and QA rules so the CRM stays healthy instead of slipping back into chaos.',
        outcome: 'Resolved over 4,400 data issues and established a permanent hygiene protocol to prevent future database decay.'
      },
      {
        title: 'Unified Reporting Dashboard',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        challenge: 'Leadership lacked visibility into full-funnel performance because data was siloed in three different platforms.',
        solution: 'Built a consolidated dashboard that pulls live data from all sources, allowing for real-time ROI calculation per channel.',
        outcome: 'Identified high-value campaigns previously thought to be underperforming.'
      }
    ]
  },
  {
    id: 2,
    slug: 'content-system',
    title: 'Content Repurposing System',
    category: 'Content Strategy',
    description: 'Scalable system transforming long-form video into multi-platform social assets.',
    stats: '3x Output',
    tags: ['System Building', 'Notion API', 'Content'],
    link: '#',
    assets: [
      {
        title: 'Content OS',
        type: 'video',
        url: '/assets/Content OS video.mp4',
        caption: 'Content OS: Combined Miro view showing my Ideation Framework, Written Content OS, and Video OS that turn one idea into multi-channel assets.',
        challenge: "Creating consistent content is hard when everything is manual. The old way lived in the day-to-day trenches: come up with an idea, post it, repeat. There wasn't a clear strategy or system behind it, which made content slow, reactive, and time-consuming to produce.\n\nAt Gauntlet, that showed up as a lot of \"one off\" work. We had ideas, livestreams, and posts, but nothing that reliably turned those inputs into a steady pipeline of content and funnel outcomes. Threads lived on X. Clips sat in random folders. Long-form recordings were posted once and forgotten.\n\nBecause everything was manual, most posts had no clear CTA and no defined place in the Challenger or Hiring Partner funnels. There was no shared map, so questions like \"What do we do with this livestream?\" or \"How do we turn this into a month of content?\" had to be answered from scratch every time. The result was effort without a compounding system behind it.",
        solution: 'To get out of the trenches, I built a two-part Content Engine that turns one strong input into a structured flow of assets.\n\nFirst, I created a Written Content OS. It maps inputs like X threads, YouTube videos, Reddit posts, and competitor content into long-form pieces such as blogs, emails, and SEO articles. From there, it breaks those into short-form assets like tweets, carousels, and scripts, and then connects everything to distribution channels such as X, LinkedIn, and Instagram. Each asset is tied to a specific CTA, like a VSL, lead magnet, or key website page, so content is hooked into the funnel instead of floating on its own.\n\nThen I designed a Video Repurposing Framework. It starts with a single long-form recording, like a livestream or talk, and turns it into platform-ready clips for X, LinkedIn, YouTube, Instagram, and TikTok. Each clip is tagged by funnel stage (TOFU, MOFU, BOFU) and wired into the appropriate Challenger or Hiring Partner funnel. One 60 minute session now reliably becomes 8 to 12 clips, instead of a single video that goes nowhere.',
        outcome: 'Gauntlet moved from manual, ad-hoc posting to a repeatable engine. One strong idea now becomes 2 to 4 weeks of scheduled content, each piece mapped to a clear CTA and funnel path, so content creation is less about scrambling for the next post and more about running a system.'
      },
      {
        title: 'Automated Production Kanban',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800',
        challenge: 'Editors lost track of feedback and assets buried in email threads and Slack messages, causing missed deadlines.',
        solution: 'Created a status-based Notion dashboard. Moving a card to "Review" automatically notifies the stakeholder via Slack.',
        outcome: 'Eliminated production bottlenecks and streamlined approval process.'
      },
      {
        title: 'Asset Library & Tagging',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        challenge: 'Marketing team could not find old clips to repost during slow weeks, wasting valuable evergreen content.',
        solution: 'Developed a tagged asset library within Notion, allowing the team to filter by topic, format, and performance.',
        outcome: 'Revived 50+ evergreen assets, filling the calendar during gaps.'
      }
    ]
  },
  {
    id: 3,
    slug: 'data-optimization',
    title: 'Data-Driven Optimization',
    category: 'Analytics',
    description: 'Optimized email campaigns via A/B testing and advanced audience analytics.',
    stats: '+40% Engagement',
    tags: ['A/B Testing', 'Looker Studio', 'Growth'],
    link: '#',
    assets: [
      {
        title: 'Subject Line Multivariate Testing',
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        challenge: 'Email open rates had plateaued at 18% because the audience was receiving generic blasts regardless of their funnel stage.',
        solution: 'Implemented a 4-variant A/B testing framework for subject lines and send times, analyzed via a custom dashboard.',
        outcome: 'Increased average open rates to 28% in 60 days.'
      },
      {
        title: 'Looker Studio Command Center',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        challenge: 'Reporting required 6 hours of manual Excel work every Monday to merge data from HubSpot and Google Analytics.',
        solution: 'Built a live Looker Studio dashboard that connects directly to data sources via API connectors.',
        outcome: 'Instant visibility into real-time CAC and LTV metrics.'
      }
    ]
  }
];

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): ProjectWithSlug | undefined => {
  return projects.find(p => p.slug === slug);
};
