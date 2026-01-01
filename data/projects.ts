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
    id: 0,
    slug: 'rankeasy',
    title: 'RankEasy.io',
    category: 'Marketing Solution',
    description: 'Built this AI-powered SEO platform to solve a problem I kept seeing: businesses cannot afford consistent content. Used Claude Code to ship a full SaaS with payments, automation, and analytics in 4 days.',
    stats: 'Built in 4 Days',
    tags: ['AI Development', 'SEO', 'Marketing Automation', 'Stripe'],
    link: 'https://easyrank-app.vercel.app/',
    assets: [
      {
        title: 'Building a SaaS to Solve a Real Marketing Problem',
        type: 'image',
        url: '/assets/easyrank1.webp',
        caption: 'I kept seeing businesses struggle with SEO content costs, so I built RankEasy using Claude Code. Complete production platform with auth, payments, AI generation, WordPress integration, and analytics. Shipped in 4 days.',
        challenge: "• Most businesses struggle to afford consistent SEO content ($500+ per article)\n• Traditional SEO tools still require hours of manual research, writing, and publishing\n• New AI search engines (ChatGPT, Perplexity) require different optimization strategies than Google\n• No platform existed that could optimize for both traditional SEO and AI search rankings",
        solution: "• Used Claude Code to build an end-to-end automation pipeline with Claude AI for article generation\n• Integrated WordPress REST API for automatic publishing with AI-generated featured images\n• Connected Google Search Console OAuth to track real rankings, clicks, and impressions over time\n• Implemented Stripe webhooks for subscription management with tiered pricing ($49-99/mo plans)\n• Created dual-optimization engine targeting both Google SEO and Generative Engine Optimization (GEO)\n• Built 12-point quality validation system to ensure every article meets publication standards",
        outcome: 'Shipped production-ready SaaS in 4 days with complete payment infrastructure, OAuth integrations, cron automation, type-safe TypeScript architecture, encrypted API tokens (AES-256-GCM), and real-time analytics dashboard. Platform automatically processes scheduled articles daily, generates featured images via Replicate FLUX, and tracks actual SEO performance metrics.'
      }
    ]
  },
  {
    id: 1,
    slug: 'marketing-ops',
    title: 'Marketing Ops Infrastructure',
    category: 'Operations',
    description: 'Fixed broken funnels, cleaned messy CRM data, and built automated workflows that saved 30% of team time. This is core marketing ops work: auditing systems, finding bottlenecks, and optimizing for scale.',
    stats: '30% Time Saved',
    tags: ['HubSpot', 'Funnel Design', 'Data Cleanup', 'Automation'],
    link: '#',
    assets: [
      {
        title: 'Gauntlet Acquisition System – Funnel Redesign',
        type: 'image',
        url: '/assets/gauntlet-funnel-system.webp',
        caption: 'Full Miro board showing the complete funnel redesign: old homepage flow (top) versus new segmented Challenger and Hiring Partner funnels (bottom).',
        challenge: "• All traffic landed on one generic homepage with no clear path\n• Multiple offers crammed into one experience with unfocused copy\n• No segmentation between students vs. hiring partners\n• Weak tracking and nurture led to dropped leads\n• No way to measure which offer or funnel was actually working",
        solution: "• Audited the full acquisition system end-to-end\n• Established a clear rule: 2 offers = 2 focused funnels\n• Built a \"Hiring Partner\" funnel (VSL → calendar)\n• Built a \"Challenger\" funnel (2-step VSL flow)\n• Routed all traffic into the right funnel based on audience",
        outcome: "Transformed a scattered, one-size-fits-all homepage into focused funnels that are easier to track, automate, and optimize."
      },
      {
        title: 'Acquisition Experience: Before and After',
        type: 'comparison',
        beforeImage: '/assets/gauntlet-old-website-2.webp',
        afterImage: '/assets/gauntlet-new-website-2.webp',
        beforeCaption: 'The old homepage tried to serve everyone, resulting in diluted messaging.',
        afterCaption: 'The new structure funnels users immediately into their specific journey.',
        challenge: "The old homepage forced all traffic into one generic funnel with no segmentation. The redesign routes each audience to a focused experience that speaks directly to their needs.",
        solution: '',
        outcome: 'Clear separation of user intent and 2x increase in qualified pipeline.'
      },
      {
        title: 'Data Cleanup Map – HubSpot CRM',
        type: 'image',
        url: '/assets/data-cleanup-map-2.webp',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance.',
        challenge: "• Thousands of inconsistent and duplicated records\n• Unreliable lifecycle stages and polluted workflows\n• Bad data = bad reports and failed automations\n• No trustworthy view of the funnel or revenue",
        solution: "• Created a visual \"Data Cleanup Map\" in Miro\n• Three-phase process: Assessment → Action → Maintenance\n• Fixed permissions, archived unused properties, deduplicated records\n• Defined regular cleaning cadence and QA rules",
        outcome: 'Resolved 4,400+ data issues and established a permanent hygiene protocol.'
      },
      {
        title: 'Detroit Tradesmen Rugby – Website Redesign',
        type: 'comparison',
        beforeImage: '/assets/tradesman-old-website-2.webp',
        afterImage: '/assets/tradesman-new-website-2.webp',
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
    description: 'Built repeatable systems that turned chaotic content creation into a predictable machine. One idea becomes 2-4 weeks of scheduled content. Classic systems thinking applied to marketing.',
    stats: '3x Output',
    tags: ['Process Design', 'ManyChat Automation', 'System Building'],
    link: '#',
    assets: [
      {
        title: 'Content OS System Architecture',
        type: 'image',
        url: '/assets/content-os-system.webp',
        caption: 'Full Miro board showing my complete Content OS: Ideation Framework, Written Content workflows, and Video Repurposing system that turn one idea into weeks of multi-channel content.',
        challenge: "• Manual, reactive content creation with no system\n• Ideas, livestreams, and posts existed as one-off work with no repurposing strategy\n• Clips scattered in random folders, recordings posted once then forgotten\n• No clear CTAs or funnel integration on most content\n• Every new piece required starting from scratch, no leverage",
        solution: "• Built a complete Written Content OS: inputs → long-form → short-form → distribution\n• Tied each content asset to a specific CTA (VSL, lead magnet, landing page)\n• Created Video Repurposing Framework that extracts 8-12 clips from one 60-minute session\n• Tagged all content by funnel stage (TOFU, MOFU, BOFU) for strategic distribution\n• Mapped every piece to a clear business objective and conversion path",
        outcome: 'One strong idea now becomes 2-4 weeks of scheduled content across multiple platforms, each piece strategically mapped to a CTA and funnel stage. Transformed chaotic content creation into a predictable system.'
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
    description: 'Deep research and competitive analysis to inform strategy. Built AI-powered systems to analyze 100+ competitor ads, track alumni networks, and turn messy data into actionable insights.',
    stats: '+40% Engagement',
    tags: ['Research', 'Competitive Intelligence', 'Data Analysis', 'AI'],
    link: '#',
    assets: [
      {
        title: 'Competitive Ad Intelligence System - Research Database',
        type: 'image',
        url: '/assets/competitive-ad-analysis.webp',
        caption: 'Built a complete competitive intelligence database analyzing 100+ ads across Meta, LinkedIn, and TikTok. Tracked hooks, CTAs, copy patterns, ad longevity, and engagement signals to identify what actually works.',
        visualDescription: 'Full competitive ad analysis system showing systematic research methodology, pattern recognition, and framework development across 100+ competitor ads.',
        supportingImages: [
          {
            url: '/assets/competitive-ad-intelligence-1.webp',
            caption: 'Research database showing systematic ad analysis: Company names, platforms, ad types, hook analysis, CTA structure, visual patterns, longevity tracking, and performance indicators.'
          },
          {
            url: '/assets/competitive-ad-intelligence-2.webp',
            caption: 'Pattern analysis and framework development: Hook taxonomies, CTA strategies, visual pattern identification, and strategic recommendations based on data.'
          }
        ],
        challenge: "• Team was guessing at ad creative without real competitive data\n• Throwing money at campaigns hoping something would stick, wasting budget\n• No framework for making creative decisions or validating concepts\n• Weeks of back-and-forth on ad concepts with zero proof behind recommendations\n• Campaign launches delayed by indecision and creative debates",
        solution: "• Phase 1: Mapped 10-15 key competitors across Meta, LinkedIn, TikTok Ad Libraries\n• Phase 2: Used AI agents to identify winning ads based on longevity, estimated spend, engagement\n• Phase 3: Transcribed and dissected each ad analyzing hooks, CTAs, copy structure, visual patterns\n• Phase 4: Fed complete dataset to ChatGPT to surface patterns and winning frameworks\n• Phase 5: Created actionable creative briefs, swipe files, and reusable framework documentation",
        outcome: 'Campaign-ready briefs delivered in 5-7 days instead of weeks of guessing. Analyzed 100+ ads across 15 competitors. Discovered that timer-based product demos and UGC-style content dramatically outperform polished studio productions. Team went from creative paralysis to data-backed confidence with 5 core creative frameworks.'
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
