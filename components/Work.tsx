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
  
  const style = isMobile ? {} : { scale, opacity, willChange: 'transform, opacity' };

  // Get the first asset image for this project
  const getProjectImage = () => {
    if (project.assets && project.assets.length > 0) {
      const firstAsset = project.assets[0];
      // Return the main image URL from the first asset
      return firstAsset.url || firstAsset.beforeImage || '';
    }
    return '';
  };

  const projectImage = getProjectImage();

  return (
    <motion.div
      ref={ref}
      id={id}
      style={style}
      className={`
      relative group rounded-[2rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-surface transition-all duration-300 bg-noise overflow-hidden shadow-md dark:shadow-none
      ${isMobile ? 'w-[85vw] flex-shrink-0 snap-center' : 'w-full'}
      hover:border-indigo-500/30 hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)] hover:scale-[1.02]
    `}>
      <Link to={`/work/${project.slug}`} className="block">
      {/* Card Image / Artifact Area */}
      <div className="relative h-[240px] md:h-[350px] overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-black/20">

          {/* Cybernetic Scanner Overlay */}
        <CyberneticScanner />

        {/* Project Image */}
        {projectImage && (
          <img
            src={projectImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        )}

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
        <div className="flex flex-wrap gap-2 mb-5">
           {project.tags.map(tag => (
             <span key={tag} className="px-3 py-1.5 text-[10px] font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-full border border-indigo-500/20 backdrop-blur-sm">
               {tag}
             </span>
           ))}
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              {project.title}
             </h3>
             <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base font-light">
              {project.description}
             </p>
          </div>
            <div className="p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white group-hover:bg-indigo-600 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black group-hover:border-indigo-600 dark:group-hover:border-white transition-all duration-300 flex-shrink-0 mt-1">
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
    <section id="work" className="py-24 bg-white dark:bg-surface relative scroll-mt-32 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white mb-4">Selected Work</h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg">Click on a project to view the detailed case study.</p>
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
            <div key={project.id} className={index === 2 ? 'col-span-2' : ''}>
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
