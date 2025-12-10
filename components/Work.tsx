import React, { useRef, useState } from 'react';
import { ArrowUpRight, X, ExternalLink, ChevronRight, AlertCircle, CheckCircle2, TrendingUp, Info, Maximize2 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

/*
  HOW TO ADD YOUR OWN MEDIA:
  1. Place your video (.mp4) and image (.png, .jpg) files in the 'public' folder of your project.
     Recommended structure: create a folder named 'assets' inside 'public'.
  2. Update the 'url' field in the projects array below.
     Example: url: '/assets/screen-studio-video.mp4'
*/

const projects: Project[] = [
  {
    id: 1,
    title: 'Marketing Ops Infrastructure',
    category: 'Operations',
    description: 'Streamlined campaign execution and reporting with custom automation workflows.',
    stats: '30% Time Saved',
    tags: ['HubSpot', 'Make.com', 'Automation'],
    link: '#',
    assets: [
      {
        title: 'Gauntlet Acquisition System – Challenger & Hiring Partner Funnel Redesign',
        type: 'video',
        url: 'https://ik.imagekit.io/kqcgf084pn/Overiview%20Aquisition.mp4',
        poster: 'https://ik.imagekit.io/kqcgf084pn/Gauntlet%20Acquisition%20System.png',
        caption: 'Gauntlet Acquisition System Overview: High-level Miro snapshot of the original flow on top and the redesigned Challenger / Hiring Partner funnels on the bottom.',
        challenge: 'At Gauntlet, almost all of our traffic came from the founder’s X profile and it all landed on the same homepage. The flow looked roughly like this: Traffic → homepage → Long opt-in form → calendar/application → booked call → sales. That homepage tried to do everything at once. We had multiple offers crammed into one experience, the copy was unfocused, and there wasn’t a clear path for different visitors like students vs hiring partners. On the backend, tracking and nurture were weak, so a lot of people showed interest but fell through the cracks. Net result: scattered attention, leaky funnels, and no clean way to tell which offer or path was actually working.',
        solution: 'I audited the old acquisition system end-to-end, then rebuilt it as a simple, offer-driven model inside Miro. I simplified everything around a clear rule: 2 core offers = 2 focused funnels. I designed separate flows: A "Hiring Partner funnel" (VSL-style page → calendar) and a "Challenger funnel" (2-step flow built around a clear VSL-style page). Each audience starts on a page that speaks directly to them and one specific offer. Organic and paid traffic is now routed into the right funnel instead of being dumped on a catch-all homepage.',
        outcome: 'This turned Gauntlet’s acquisition from “everyone hits the same messy page” into a set of focused Challenger and Hiring Partner funnels that are much easier to track, automate, and improve.'
      },
      {
        title: 'Acquisition Experience: Before and After',
        type: 'comparison',
        // Updated to video URLs
        beforeVideo: 'https://ik.imagekit.io/kqcgf084pn/v1.5.mp4?updatedAt=1765279870030',
        afterVideo: 'https://ik.imagekit.io/kqcgf084pn/v3.mp4',
        beforeCaption: 'The old homepage tried to serve everyone, resulting in diluted messaging.', // Placeholder
        afterCaption: 'The new structure funnels users immediately into their specific journey.', // Placeholder
        challenge: 'Before re-architecting the system, the single homepage approach forced all traffic—students, partners, and investors—into one generic funnel. This lack of segmentation meant we couldn’t speak directly to specific pain points, resulting in low conversion rates and “dirty” data in the CRM. The new system separates these flows entirely.',
        solution: '', // Not used for comparison layout
        outcome: 'Clear separation of user intent and a 2x increase in qualified pipeline.'
      },
      {
        title: 'Data Cleanup Map – HubSpot CRM',
        type: 'image',
        url: 'https://ik.imagekit.io/kqcgf084pn/Data%20cleanup%20screenshot.png',
        caption: 'Data Cleanup Map: High-level Miro board that documents the full HubSpot cleanup plan, from initial audit to long-term maintenance, so any team member can understand and follow the CRM hygiene process.',
        challenge: 'Gauntlet’s HubSpot account had grown messy over time. Thousands of records were inconsistent or duplicated, lifecycle stages were unreliable, and unused properties and workflows were polluting the system. The sales and marketing teams were flying blind, because bad data meant bad reports, failed workflows, and no trustworthy view of the funnel or revenue. We needed a clear way to clean everything up and prevent it from breaking again.',
        solution: 'I built a visual “Data Cleanup Map” in Miro that turned CRM cleanup into a structured, repeatable process. The map walks through three phases: Strategy and Assessment, hands-on Action Steps, and Ongoing Maintenance and Prevention. It starts with a snapshot of the Data Quality Dashboard, then breaks down specific tasks like fixing users and permissions, archiving unused properties and forms, cleaning formatting issues, deduplicating records, tightening lifecycle logic, and setting GDPR-friendly email preferences. Finally, it defines a regular cleaning cadence and QA rules so the CRM stays healthy instead of slipping back into chaos.',
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
    title: 'Content Repurposing System',
    category: 'Content Strategy',
    description: 'Scalable system transforming long-form video into multi-platform social assets.',
    stats: '3x Output',
    tags: ['System Building', 'Notion API', 'Content'],
    link: '#',
    assets: [
      {
        title: 'The "One-to-Many" Content Engine',
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        challenge: 'High-quality video podcasts were being published once and forgotten. The team lacked bandwidth to edit clips for social media.',
        solution: 'Built a Notion-based content calendar integrated with Descript. One master file now automatically generates tasks for 12 social assets.',
        outcome: '3x increase in monthly content output with zero extra headcount.'
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

// --- Lightbox Component ---
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col"
    >
      {/* Lightbox Toolbar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
        <span className="text-white/70 text-sm font-mono ml-4">Pinch to Zoom • Scroll to view</span>
        <button 
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Scrollable Image Container */}
      <div 
        className="w-full h-full overflow-auto custom-scrollbar flex items-start justify-center pt-20 pb-20 px-4 md:px-10 cursor-zoom-out"
        onClick={onClose}
      >
        <img 
          src={src} 
          alt="Full screen view" 
          className="max-w-full md:max-w-4xl w-auto h-auto object-contain shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </motion.div>
  );
};

// --- Scanning Animation Component ---
const CyberneticScanner: React.FC = () => {
    return (
        // OPTIMIZATION: Removed 'hidden md:block' to enable scanner on mobile as requested
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-t-[2rem]">
            {/* The Scanning Beam */}
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ 
                    duration: 3, 
                    ease: "linear", 
                    repeat: Infinity,
                    repeatDelay: 1 
                }}
                className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent w-full"
            >
                {/* The Bright Laser Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            </motion.div>
            
            {/* Corner Bracket Accents (Only show on hover context usually, but good for card style) */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />
        </div>
    )
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void; isMobile?: boolean; id?: string }> = ({ project, onClick, isMobile, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Desktop Scroll Animation Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Only apply scroll scaling on desktop
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  
  const style = isMobile ? {} : { scale, opacity };

  // Artifact Rendering Logic (unchanged from original)
  const renderArtifact = () => {
    if (project.id === 1) {
      return (
        <div className="w-full h-full bg-slate-900/50 flex items-center justify-center p-6 relative overflow-hidden pointer-events-none">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-10">
            {[...Array(36)].map((_, i) => <div key={i} className="border border-indigo-500/30 rounded-full" />)}
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-[200px]">
            <div className="w-full h-12 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-300 font-mono">CRM Trigger</div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500/50 to-purple-500/50" />
            <div className="w-full flex gap-4">
               <div className="flex-1 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xs text-purple-300 font-mono">Email</div>
               <div className="flex-1 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xs text-purple-300 font-mono">Slack</div>
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-purple-500/50 to-pink-500/50" />
            <div className="w-full h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-xs text-pink-300 font-mono">Report</div>
          </div>
        </div>
      );
    } else if (project.id === 2) {
      return (
        <div className="w-full h-full bg-slate-900/50 p-6 flex items-center justify-center relative overflow-hidden pointer-events-none">
           <div className="w-full max-w-[280px] space-y-3">
              <div className="flex items-center gap-3 opacity-50 grayscale">
                <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-[10px]">YT</div>
                <div className="h-0.5 flex-1 bg-white/10" />
                <div className="w-20 h-8 rounded bg-white/5 flex items-center justify-center text-[10px]">Manual</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-pink-500 flex items-center justify-center text-[10px] font-bold">YT</div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-500 to-indigo-500" />
                <div className="flex gap-1">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-6 h-8 rounded bg-indigo-500/40 border border-indigo-400/50" />
                   ))}
                </div>
              </div>
              <div className="text-right text-[10px] text-pink-400 font-mono mt-1">Automated: 300% Gain</div>
           </div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-full bg-slate-900/50 p-6 flex items-center justify-center relative overflow-hidden pointer-events-none">
           <div className="w-full max-w-[240px] bg-black/40 rounded-xl border border-white/10 p-4 space-y-3">
             <div className="flex justify-between items-end h-16 gap-1">
                {[40, 60, 45, 70, 50, 85, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-sm relative group-hover:bg-indigo-500/40 transition-colors">
                    <div className="absolute bottom-0 left-0 right-0 bg-indigo-500" style={{ height: `${h}%` }} />
                  </div>
                ))}
             </div>
             <div className="flex justify-between border-t border-white/10 pt-2">
               <div>
                 <div className="text-[10px] text-gray-500 uppercase">Conv. Rate</div>
                 <div className="text-lg font-bold text-white">4.2%</div>
               </div>
               <div className="text-right">
                  <div className="text-[10px] text-gray-500 uppercase">Growth</div>
                  <div className="text-lg font-bold text-pink-400">+23%</div>
               </div>
             </div>
           </div>
        </div>
      );
    }
  };

  return (
    <motion.div 
      ref={ref}
      id={id} // ID for Deep Linking
      style={style}
      onClick={onClick}
      className={`
      relative group rounded-[2rem] border border-white/5 bg-surface transition-all duration-300 bg-noise overflow-hidden cursor-pointer
      ${isMobile ? 'w-[85vw] flex-shrink-0 snap-center' : 'w-full'}
      hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:scale-[1.02]
    `}>
      {/* Card Image / Artifact Area */}
      <div className="relative h-[240px] md:h-[350px] overflow-hidden border-b border-white/5 bg-black/20">
        
        {/* ADDED: Cybernetic Scanner Overlay */}
        <CyberneticScanner />

        {renderArtifact()}
        
        {/* Floating Badge */}
        <div className="absolute top-4 right-4 z-20 glass-card px-3 py-1.5 rounded-full backdrop-blur-xl border-white/10">
          <span className="text-[10px] font-mono text-white tracking-wider">{project.stats}</span>
        </div>
        
        {/* Click Indicator Overlay */}
        <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="glass-card px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Case Study <ChevronRight size={14} />
            </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 md:p-8 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
           {project.tags.map(tag => (
             <span key={tag} className="px-3 py-1 text-[10px] font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 backdrop-blur-sm">
               {tag}
             </span>
           ))}
        </div>
        
        <div className="flex justify-between items-start gap-4">
          <div>
             <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {project.title}
             </h3>
             {/* OPTIMIZATION: Updated Contrast */}
             <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
              {project.description}
             </p>
          </div>
          <div className="p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0 mt-1 cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    // Calculate which card is mostly in view
    // Card width is 85vw. 
    // A simple approximate way to find the index:
    const cardWidth = container.offsetWidth * 0.85; 
    const index = Math.round(container.scrollLeft / cardWidth);
    
    // Ensure index stays within bounds
    const safeIndex = Math.min(Math.max(index, 0), projects.length - 1);
    if (safeIndex !== activeMobileIndex) {
        setActiveMobileIndex(safeIndex);
    }
  };

  return (
    <section id="work" className="py-24 bg-surface relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Selected Work</h2>
            {/* OPTIMIZATION: Updated Contrast */}
            <p className="text-gray-300 text-lg">Click on a project to view the detailed assets.</p>
          </motion.div>
        </div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 2 ? 'col-span-2 w-2/3 mx-auto' : ''}>
              <ProjectCard 
                project={project} 
                id={`project-${project.id}`} // Pass ID here
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout (Horizontal Swipe) */}
        <div className="md:hidden flex flex-col gap-6">
            <div 
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-6 px-6 no-scrollbar relative z-10"
              onScroll={handleMobileScroll}
            >
                {projects.map((project, index) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    id={`project-mobile-${project.id}`} // Separate ID for mobile
                    isMobile={true} 
                    onClick={() => setSelectedProject(project)}
                />
                ))}
            </div>

            {/* OPTIMIZATION: Pagination Dots Indicator */}
            <div className="flex justify-center gap-2">
                {projects.map((_, index) => (
                    <div 
                        key={index}
                        className={`
                            h-1.5 rounded-full transition-all duration-300
                            ${activeMobileIndex === index ? 'w-6 bg-indigo-500' : 'w-1.5 bg-white/20'}
                        `}
                    />
                ))}
            </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-6xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden relative z-10 flex flex-col shadow-2xl"
            >
              {/* Modal Header (Fixed) */}
              <div className="flex-shrink-0 border-b border-white/5 bg-[#0A0A0A] p-6 md:p-8 flex items-start justify-between relative z-20">
                 <div>
                    <span className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-3 inline-block">
                        {selectedProject.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-serif text-white">{selectedProject.title}</h3>
                 </div>
                 <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white/5 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 border border-white/10 cursor-pointer"
                  >
                    <X size={20} />
                  </button>
              </div>

              {/* Scrollable Body - List of Assets */}
              <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[#0A0A0A]">
                  <div className="max-w-4xl mx-auto space-y-24">
                      {selectedProject.assets.map((asset, index) => {
                        // SPECIAL RENDER FOR COMPARISON TYPE
                        if (asset.type === 'comparison') {
                          return (
                            <div key={index} className="flex flex-col gap-8 group">
                               {/* Comparison Header */}
                               <div className="space-y-4">
                                  <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-gray-500 text-sm">
                                          0{index + 1}
                                      </div>
                                      <h4 className="text-2xl md:text-3xl font-serif text-white">{asset.title}</h4>
                                  </div>
                                  
                                  <div className="pl-14">
                                    <p className="text-xs text-indigo-400 uppercase tracking-wider font-bold mb-2">Bucket: {selectedProject.title}</p>
                                    <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                                      {asset.challenge}
                                    </p>
                                  </div>
                               </div>

                               {/* Comparison Grid */}
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-14">
                                  {/* Left Column - Before */}
                                  <div className="space-y-3">
                                    {asset.beforeVideo ? (
                                        <div className="relative rounded-xl overflow-hidden border border-red-500/20 bg-black">
                                           <div className="absolute top-3 left-3 z-10 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                                           <video 
                                             src={asset.beforeVideo}
                                             controls
                                             muted
                                             loop
                                             autoPlay
                                             playsInline
                                             className="w-full h-auto max-h-[500px] object-contain block"
                                           />
                                        </div>
                                    ) : (
                                        <div 
                                          className="relative group/image cursor-zoom-in rounded-xl overflow-hidden border border-red-500/20"
                                          onClick={() => asset.beforeImage && setLightboxImage(asset.beforeImage)}
                                        >
                                          <div className="absolute top-3 left-3 z-10 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center z-20">
                                             <Maximize2 className="text-white drop-shadow-lg" />
                                          </div>
                                          <img src={asset.beforeImage} alt="Before" className="w-full h-[400px] object-cover object-top opacity-80 group-hover/image:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                    <h5 className="text-white font-medium">Before – Old Website</h5>
                                    {asset.beforeCaption && <p className="text-sm text-gray-500 font-light">{asset.beforeCaption}</p>}
                                  </div>

                                  {/* Right Column - After */}
                                  <div className="space-y-3">
                                    {asset.afterVideo ? (
                                        <div className="relative rounded-xl overflow-hidden border border-emerald-500/20 bg-black">
                                           <div className="absolute top-3 left-3 z-10 bg-emerald-600/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                                           <video 
                                             src={asset.afterVideo}
                                             controls
                                             muted
                                             loop
                                             autoPlay
                                             playsInline
                                             className="w-full h-auto max-h-[500px] object-contain block"
                                           />
                                        </div>
                                    ) : (
                                        <div 
                                          className="relative group/image cursor-zoom-in rounded-xl overflow-hidden border border-emerald-500/20"
                                          onClick={() => asset.afterImage && setLightboxImage(asset.afterImage)}
                                        >
                                          <div className="absolute top-3 left-3 z-10 bg-emerald-600/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center z-20">
                                             <Maximize2 className="text-white drop-shadow-lg" />
                                          </div>
                                          <img src={asset.afterImage} alt="After" className="w-full h-[400px] object-cover object-top" />
                                        </div>
                                    )}
                                    <h5 className="text-white font-medium">After – New Website</h5>
                                    {asset.afterCaption && <p className="text-sm text-gray-500 font-light">{asset.afterCaption}</p>}
                                  </div>
                               </div>
                               
                               {/* Comparison Outcome */}
                               <div className="pl-0 md:pl-14">
                                  <div className="bg-indigo-500/5 border border-indigo-500/10 p-5 rounded-xl flex items-center gap-4">
                                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                          <TrendingUp size={20} />
                                      </div>
                                      <div className="flex-1">
                                          <span className="text-xs text-indigo-300 uppercase tracking-wider font-bold block mb-1">Outcome</span>
                                          <p className="text-white font-medium text-lg">{asset.outcome}</p>
                                      </div>
                                  </div>
                               </div>
                               
                               {index !== selectedProject.assets.length - 1 && (
                                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mt-8" />
                               )}
                            </div>
                          );
                        }

                        // STANDARD RENDER FOR IMAGE/VIDEO TYPES
                        return (
                          <div key={index} className="flex flex-col gap-8 group">
                              
                              {/* Asset Header */}
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-gray-500 text-sm">
                                      0{index + 1}
                                  </div>
                                  <h4 className="text-2xl md:text-3xl font-serif text-white">{asset.title}</h4>
                              </div>

                              {/* Visual Media Container */}
                              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl relative group-hover:border-white/20 transition-colors">
                                  {/* Fake Browser Toolbar */}
                                  <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                                      <div className="flex gap-1.5">
                                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                      </div>
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="w-full bg-black relative">
                                    {asset.type === 'video' ? (
                                        <video 
                                          src={asset.url}
                                          poster={asset.poster}
                                          controls 
                                          className="w-full h-auto block" 
                                          muted
                                          playsInline
                                          loop
                                        >
                                          Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img 
                                          src={asset.url} 
                                          alt={asset.title}
                                          className="w-full h-auto block"
                                        />
                                    )}
                                  </div>
                                  
                                  {/* Caption Section */}
                                  {asset.caption && (
                                    <div className="px-5 py-4 border-t border-white/5 bg-[#141414]">
                                        <div className="flex gap-3">
                                          <div className="mt-0.5 text-indigo-400">
                                            <Info size={16} />
                                          </div>
                                          <p className="text-sm text-gray-400 font-light italic leading-relaxed">
                                              {asset.caption}
                                          </p>
                                        </div>
                                    </div>
                                  )}
                              </div>

                              {/* Problem / Solution Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Challenge Card */}
                                  <div className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-6 hover:bg-red-500/[0.05] transition-colors">
                                      <div className="flex items-center gap-2 mb-3 text-red-400">
                                          <AlertCircle size={18} />
                                          <span className="font-bold text-xs uppercase tracking-wider">The Challenge</span>
                                      </div>
                                      <p className="text-gray-300 font-light leading-relaxed text-sm">
                                          {asset.challenge}
                                      </p>
                                  </div>

                                  {/* Solution Card */}
                                  <div className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6 hover:bg-emerald-500/[0.05] transition-colors">
                                      <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                          <CheckCircle2 size={18} />
                                          <span className="font-bold text-xs uppercase tracking-wider">The Solution</span>
                                      </div>
                                      <p className="text-gray-300 font-light leading-relaxed text-sm">
                                          {asset.solution}
                                      </p>
                                  </div>
                              </div>

                              {/* Outcome Banner */}
                              <div className="bg-indigo-500/5 border border-indigo-500/10 p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 w-fit">
                                      <TrendingUp size={20} />
                                  </div>
                                  <div className="flex-1">
                                      <span className="text-xs text-indigo-300 uppercase tracking-wider font-bold block mb-1">Outcome</span>
                                      <p className="text-white font-medium text-lg">{asset.outcome}</p>
                                  </div>
                              </div>

                              {/* Separator (except for last item) */}
                              {index !== selectedProject.assets.length - 1 && (
                                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mt-8" />
                              )}
                          </div>
                        );
                      })}

                      {/* Footer Actions */}
                      {selectedProject.link && selectedProject.link !== '#' && (
                         <div className="flex justify-center pt-8">
                             <a 
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform cursor-pointer"
                             >
                                 View Live Project <ExternalLink size={18} />
                             </a>
                         </div>
                      )}
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;