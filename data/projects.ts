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
        challenge: "• All traffic landed on one generic homepage with no clear path\n• Multiple offers crammed into one experience with unfocused copy\n• No segmentation between students vs. hiring partners\n• Weak tracking and nurture—leads fell through the cracks\n• No way to measure which offer or funnel was actually working",
        solution: "• Audited the full acquisition system end-to-end\n• Established a clear rule: 2 offers = 2 focused funnels\n• Built a \"Hiring Partner\" funnel (VSL → calendar)\n• Built a \"Challenger\" funnel (2-step VSL flow)\n• Routed all traffic into the right funnel based on audience",
        outcome: "Transformed a scattered, one-size-fits-all homepage into focused funnels that are easier to track, automate, and optimize."
      },
      {
        title: 'Acquisition Experience: Before and After',
        type: 'comparison',
        beforeImage: '/assets/Gauntlet old website.png',
        afterImage: '/assets/Gauntlet new website.png',
        beforeCaption: 'The old homepage tried to serve everyone, resulting in diluted messaging.',
        afterCaption: 'The new structure funnels users immediately into their specific journey.',
        challenge: "The old homepage forced all traffic into one generic funnel with no segmentation. The redesign routes each audience to a focused experience that speaks directly to their needs.",
        solution: '',
        outcome: 'Clear separation of user intent and 2x increase in qualified pipeline.'
      },
      {
        title: 'Data Cleanup Map – HubSpot CRM',
        type: 'image',
        url: 'https://ik.imagekit.io/kqcgf084pn/Data%20cleanup%20screenshot.png',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance.',
        challenge: "• Thousands of inconsistent and duplicated records\n• Unreliable lifecycle stages and polluted workflows\n• Bad data = bad reports and failed automations\n• No trustworthy view of the funnel or revenue",
        solution: "• Created a visual \"Data Cleanup Map\" in Miro\n• Three-phase process: Assessment → Action → Maintenance\n• Fixed permissions, archived unused properties, deduplicated records\n• Defined regular cleaning cadence and QA rules",
        outcome: 'Resolved 4,400+ data issues and established a permanent hygiene protocol.'
      },
      {
        title: 'Unified Reporting Dashboard',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        challenge: "• Data siloed across three different platforms\n• No visibility into full-funnel performance",
        solution: "• Built a consolidated dashboard pulling live data from all sources\n• Enabled real-time ROI calculation per channel",
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
        challenge: "• Manual, reactive content creation with no system\n• Ideas, livestreams, and posts existed as \"one-off\" work\n• Clips scattered in random folders, recordings posted once and forgotten\n• No clear CTAs or funnel integration on most posts\n• Every new piece required starting from scratch",
        solution: "• Built a Written Content OS: inputs → long-form → short-form → distribution\n• Each asset tied to a specific CTA (VSL, lead magnet, key page)\n• Created a Video Repurposing Framework for platform-ready clips\n• Tagged clips by funnel stage (TOFU, MOFU, BOFU)\n• One 60-min session now produces 8–12 clips",
        outcome: 'One strong idea now becomes 2–4 weeks of scheduled content, each piece mapped to a clear CTA and funnel path.'
      },
      {
        title: 'Automated Production Kanban',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800',
        challenge: "• Feedback buried in email threads and Slack\n• Editors lost track of assets, causing missed deadlines",
        solution: "• Created a status-based Notion dashboard\n• Moving a card to \"Review\" auto-notifies stakeholders via Slack",
        outcome: 'Eliminated production bottlenecks and streamlined approval process.'
      },
      {
        title: 'Asset Library & Tagging',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        challenge: "• Team couldn't find old clips to repost during slow weeks\n• Valuable evergreen content going to waste",
        solution: "• Built a tagged asset library in Notion\n• Filter by topic, format, and performance",
        outcome: 'Revived 50+ evergreen assets, filling the calendar during content gaps.'
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
        challenge: "• Open rates plateaued at 18%\n• Generic email blasts regardless of funnel stage",
        solution: "• Implemented a 4-variant A/B testing framework\n• Tested subject lines and send times\n• Analyzed results via custom dashboard",
        outcome: 'Increased average open rates to 28% in 60 days.'
      },
      {
        title: 'Looker Studio Command Center',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        challenge: "• 6 hours of manual Excel work every Monday\n• Data scattered across HubSpot and Google Analytics",
        solution: "• Built a live Looker Studio dashboard\n• Connected directly to data sources via API",
        outcome: 'Instant visibility into real-time CAC and LTV metrics.'
      }
    ]
  }
];

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): ProjectWithSlug | undefined => {
  return projects.find(p => p.slug === slug);
};
