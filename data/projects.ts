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
        challenge: "• All traffic landed on one generic homepage with no clear path\n• Multiple offers crammed into one experience with unfocused copy\n• No segmentation between students vs. hiring partners\n• Weak tracking and nurture led to dropped leads\n• No way to measure which offer or funnel was actually working",
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
        url: '/assets/03 Data Cleanup Map /Data cleanup map.png',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance.',
        challenge: "• Thousands of inconsistent and duplicated records\n• Unreliable lifecycle stages and polluted workflows\n• Bad data = bad reports and failed automations\n• No trustworthy view of the funnel or revenue",
        solution: "• Created a visual \"Data Cleanup Map\" in Miro\n• Three-phase process: Assessment → Action → Maintenance\n• Fixed permissions, archived unused properties, deduplicated records\n• Defined regular cleaning cadence and QA rules",
        outcome: 'Resolved 4,400+ data issues and established a permanent hygiene protocol.'
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
        title: 'Master Alumni Database',
        type: 'image',
        url: '/assets/alumni-database.png',
        caption: 'Built a single source of truth for 184 Gauntlet AI alumni, transforming scattered records into a living community database in under one week.',
        challenge: "• No central database; contact info scattered across Crossover exports, email lists, and random spreadsheets\n• LinkedIn URLs and verified emails were the hardest to find\n• Team constantly asking \"does anyone have X's email?\" created pure manual chaos\n• No way to track where alumni landed or build lasting community",
        solution: "• Audit (few hours): Got raw data from company, inventoried all records, identified gaps\n• Merge (hardest phase): Resolved conflicts, handled same-name duplicates, standardized formats\n• Enrich (AI-powered): Fed missing records to Claude/Perplexity, searched \"Gauntlet AI + [name]\" on Twitter, cross-referenced and verified\n• Maintain (ongoing): Weekly check-ins, self-service update form, AI-trained for future lookups",
        outcome: '184 alumni tracked at 95% completeness (name, email, X handle verified). Reduced manual work from 10+ hrs/week to ~1 hr/quarter. Unlocked re-engagement campaigns, job outcome tracking, and a network of future AI leaders.'
      }
    ]
  }
];

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): ProjectWithSlug | undefined => {
  return projects.find(p => p.slug === slug);
};
