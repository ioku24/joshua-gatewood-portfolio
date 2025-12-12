import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, ProjectWithSlug } from '../data/projects';

// --- Scanning Animation Component ---
const CyberneticScanner: React.FC = () => {
    return (
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
            
            {/* Corner Bracket Accents */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />
        </div>
    )
}

const ProjectCard: React.FC<{ project: ProjectWithSlug; isMobile?: boolean; id?: string }> = ({ project, isMobile, id }) => {
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

  // Artifact Rendering Logic
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
      id={id}
      style={style}
      className={`
      relative group rounded-[2rem] border border-white/5 bg-surface transition-all duration-300 bg-noise overflow-hidden
      ${isMobile ? 'w-[85vw] flex-shrink-0 snap-center' : 'w-full'}
      hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:scale-[1.02]
    `}>
      <Link to={`/work/${project.slug}`} className="block">
        {/* Card Image / Artifact Area */}
        <div className="relative h-[240px] md:h-[350px] overflow-hidden border-b border-white/5 bg-black/20">
          
          {/* Cybernetic Scanner Overlay */}
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
               <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                {project.description}
               </p>
            </div>
            <div className="p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0 mt-1">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cardWidth = container.offsetWidth * 0.85; 
    const index = Math.round(container.scrollLeft / cardWidth);
    
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
            <p className="text-gray-300 text-lg">Click on a project to view the detailed case study.</p>
          </motion.div>
          
          {/* View All Link */}
          <Link 
            to="/work" 
            className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mt-4 md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 2 ? 'col-span-2 w-2/3 mx-auto' : ''}>
              <ProjectCard 
                project={project} 
                id={`project-${project.id}`}
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
                {projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    id={`project-mobile-${project.id}`}
                    isMobile={true} 
                />
                ))}
            </div>

            {/* Pagination Dots Indicator */}
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
            
            {/* Mobile View All Link */}
            <Link 
              to="/work" 
              className="flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mt-4"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
