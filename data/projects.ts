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
        beforeImage: '/assets/Gauntlet old website 2.png',
        afterImage: '/assets/Gauntlet new website 2 .png',
        beforeCaption: 'The old homepage tried to serve everyone, resulting in diluted messaging.',
        afterCaption: 'The new structure funnels users immediately into their specific journey.',
        challenge: "The old homepage forced all traffic into one generic funnel with no segmentation. The redesign routes each audience to a focused experience that speaks directly to their needs.",
        solution: '',
        outcome: 'Clear separation of user intent and 2x increase in qualified pipeline.'
      },
      {
        title: 'Data Cleanup Map – HubSpot CRM',
        type: 'image',
        url: '/assets/Data Clean Up Map 2 .png',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance.',
        challenge: "• Thousands of inconsistent and duplicated records\n• Unreliable lifecycle stages and polluted workflows\n• Bad data = bad reports and failed automations\n• No trustworthy view of the funnel or revenue",
        solution: "• Created a visual \"Data Cleanup Map\" in Miro\n• Three-phase process: Assessment → Action → Maintenance\n• Fixed permissions, archived unused properties, deduplicated records\n• Defined regular cleaning cadence and QA rules",
        outcome: 'Resolved 4,400+ data issues and established a permanent hygiene protocol.'
      },
      {
        title: 'Detroit Tradesmen Rugby – Website Redesign',
        type: 'comparison',
        beforeImage: "/assets/Tradesman old website 2.png",
        afterImage: "/assets/Tradesmen's new website 2.png",
        beforeCaption: 'The old website was an outdated bulletin board with no clear CTAs, zero analytics, and unprofessional design.',
        afterCaption: 'The new website positions the club as Michigan\'s premier rugby brand with strategic conversion infrastructure.',
        challenge: "Transformed Detroit Tradesmen Rugby's digital presence from an outdated bulletin board into a premium recruitment and revenue platform. Delivered a conversion-optimized, SEO-ready website in 6-8 hours using systems thinking and strategic brand positioning around Detroit's Motor City legacy.",
        solution: '',
        outcome: 'Top-tier branding website with embedded marketing infrastructure, positioned to drive measurable improvements in recruiting and sponsorship inquiries.'
      }
    ]
  },
  {
    id: 2,
    slug: 'content-system',
    title: 'Content System',
    category: 'Content Strategy',
    description: 'Scalable systems for content creation, automation, and multi-platform distribution.',
    stats: '3x Output',
    tags: ['System Building', 'ManyChat', 'Automation'],
    link: '#',
    assets: [
      {
        title: 'Content OS',
        type: 'embed',
        url: 'https://share.descript.com/embed/kaoabOBAcBJ',
        caption: 'Content OS: Combined Miro view showing my Ideation Framework, Written Content OS, and Video OS that turn one idea into multi-channel assets.',
        challenge: "• Manual, reactive content creation with no system\n• Ideas, livestreams, and posts existed as \"one-off\" work\n• Clips scattered in random folders, recordings posted once and forgotten\n• No clear CTAs or funnel integration on most posts\n• Every new piece required starting from scratch",
        solution: "• Built a Written Content OS: inputs → long-form → short-form → distribution\n• Each asset tied to a specific CTA (VSL, lead magnet, key page)\n• Created a Video Repurposing Framework for platform-ready clips\n• Tagged clips by funnel stage (TOFU, MOFU, BOFU)\n• One 60-min session now produces 8–12 clips",
        outcome: 'One strong idea now becomes 2–4 weeks of scheduled content, each piece mapped to a clear CTA and funnel path.'
      },
      {
        title: 'ManyChat Marketing Automation System',
        type: 'embed',
        url: 'https://www.youtube.com/embed/m-pXrykrEQE',
        caption: 'Built 10 DM automation bots to drive traffic and boost sales on autopilot. These are the exact automation strategies top creators use to grow their businesses on Instagram.',
        visualDescription: 'Full walkthrough of the Client Acquisition System: Top of Funnel (paid ads, content, DM outreach) → ManyChat automation sequences → Lead qualification and booking.',
        challenge: "• Manual lead qualification and follow-up eating hours daily\n• Every DM required personal attention with no way to scale\n• Leads went cold waiting for responses\n• No system to nurture, qualify, or book automatically",
        solution: "• Built 10 core ManyChat automation templates:\n• Call Booking Funnel: Automates appointment booking with qualified leads\n• Email Collection: Grows email list via free resource exchange\n• Product Sales Funnel: Follows up and offers alternatives\n• Lead Qualification Bot: 3-5 questions to qualify/disqualify\n• Webinar Registration: Drives signups with reminders\n• Service Consulting: Qualifies and guides to booking\n• Q&A Bot: Handles common inquiries automatically\n• Support Bot: Quick answers for new leads and clients\n• Visit Card: Digital business card alternative\n• Value Bot: Re-engages and nurtures warm leads",
        outcome: 'Automated 80%+ of initial conversations. Response time dropped from hours to seconds. Scalable system that generates leads and books calls 24/7.'
      },
      {
        title: 'Instagram Client Acquisition System',
        type: 'embed',
        url: 'https://www.youtube.com/embed/z0770omcCho',
        caption: 'My exact formula for landing clients on Instagram without paid ads. A systematic outreach process that sends 500+ targeted DMs per day.',
        visualDescription: 'Step-by-step walkthrough: Niche targeting → Automated DM sequences → Response frameworks → Qualification criteria → Booking system integration.',
        challenge: "• Relying on referrals and word-of-mouth with no predictable pipeline\n• Manual outreach limited to 20-30 DMs/day before burnout\n• No system for targeting, messaging, or follow-up\n• Leads slipping through the cracks with inconsistent follow-up\n• Hours spent on prospects who were never qualified",
        solution: "• Built a 5-step Instagram acquisition system:\n• Niche Identification: Define ideal client avatar and where they hang out\n• Automated DM Sequences: Scale to 500+ personalized DMs per day\n• Response Frameworks: Templates for every reply scenario\n• Qualification Criteria: Filter tire-kickers in the first 3 messages\n• Booking Integration: Qualified leads go straight to calendar",
        outcome: 'Consistent client pipeline without paid ads. Scaled from 20 to 500+ daily touchpoints. Predictable discovery calls every week. [See the full DM automation walkthrough →](https://youtu.be/-Wg1Qk8Iins)'
      }
    ]
  },
  {
    id: 3,
    slug: 'data-optimization',
    title: 'Data-Driven Optimization',
    category: 'Analytics',
    description: 'Research-driven systems for competitive intelligence and audience analytics.',
    stats: '+40% Engagement',
    tags: ['Competitive Intel', 'AI Analysis', 'Growth'],
    link: '#',
    assets: [
      {
        title: 'Competitive Ad Intelligence System',
        type: 'image',
        url: '/assets/ad-intelligence.png',
        caption: 'Built a repeatable research system that produces campaign-ready briefs in days, not weeks. Analyzed 100+ competitor ads across 3 platforms.',
        visualDescription: 'Visual breakdown of the 5-phase process: Identify Competitors → Collect Winning Ads (AI Agent) → Transcribe & Dissect → AI Pattern Analysis → Output Campaign Briefs.',
        challenge: "• Team was guessing at ad creative without real data\n• 'Throw money and hope it sticks' approach wasting budget\n• No framework for creative decisions or market validation\n• Weeks of back-and-forth on concepts with no proof to back recommendations\n• Campaigns delayed by indecision and creative pushback",
        solution: "• Phase 1: Map 10-15 key competitors across Meta, LinkedIn, TikTok Ad Libraries\n• Phase 2: AI Agent identifies winning ads by longevity, spend, and engagement (5-10 ads per company)\n• Phase 3: Transcribe and dissect each ad for hooks, CTAs, copy structure, visual patterns\n• Phase 4: Feed dataset to ChatGPT to identify patterns and frameworks\n• Phase 5: Output actionable creative briefs, swipe files, and reusable framework docs",
        outcome: 'Campaign-ready briefs in 5-7 days vs. weeks of guessing. 100+ ads analyzed across 15 competitors. Discovered that timer-based demos and UGC-style ads outperform polished studio content.'
      },
      {
        title: 'Master Alumni Database',
        type: 'image',
        url: '/assets/alumni-database.png',
        caption: 'Built a Master Database for 184 Gauntlet AI alumni in under a week. Your network is powerful, and keeping in contact is essential for building lasting business relationships.',
        visualDescription: 'Visual breakdown of the 4-phase process: Audit → Merge → Enrich → Maintain. Shows the chaos of 5+ scattered data sources transformed into a unified 184-alumni database at 95% completeness.',
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
