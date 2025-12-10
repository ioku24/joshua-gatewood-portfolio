import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: 'Gauntlet AI',
    role: 'Marketing Operations Intern',
    period: '06/2025 - Present',
    description: 'Audited the acquisition ecosystem to diagnose bottlenecks. Built offer-specific funnels driving a 2x increase in pipeline volume. Created KPI dashboards and cleaned HubSpot data for executive reporting. Engineered a content repurposing engine increasing output 3-5x.',
    highlight: 'Remote'
  },
  {
    company: 'HOME Organization',
    role: 'Social Media Manager',
    period: '04/2025 - 06/2025',
    description: 'Developed strategies across LinkedIn, FB, and IG, increasing engagement by 25% in 30 days. Built AI-assisted workflows to streamline content creation and scheduling.',
    highlight: 'Remote'
  },
  {
    company: 'Lenawee County',
    role: 'Community Development Assistant',
    period: '05/2023 - 05/2025',
    description: 'Secured federal funding for community programs and housing. Created content for Land Bank properties and presented data-driven reports to Commissioners.',
    highlight: 'Adrian, MI'
  },
  {
    company: 'Adrian College',
    role: 'Social Media & Brand Manager (Men\'s Rugby)',
    period: '08/2023 - 05/2024',
    description: 'Built digital presence attracting 2,000+ followers. Generated 75 recruitment calls leading to a record-high 30-player freshman class. Developed AI chatbot converting leads into recruits.',
    highlight: 'Adrian, MI'
  }
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scrollytelling Logic: Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress bar movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 bg-background relative overflow-hidden scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Professional Journey</h2>
          <p className="text-gray-400">The path that led to systems thinking.</p>
        </motion.div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-[0.5px]" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:-translate-x-[0.5px] origin-top z-0" 
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[-6px] md:left-1/2 top-0 z-20 md:-translate-x-[7px]">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="w-3.5 h-3.5 bg-background border-2 border-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  />
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`
                    relative p-8 rounded-3xl border border-white/5 bg-surface/80 backdrop-blur-sm bg-noise
                    hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-500 group
                    ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}
                  `}>
                    
                    {/* Glowing effect behind card */}
                    <div className="absolute inset-0 bg-indigo-500/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                       <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs font-mono text-indigo-300 border border-white/5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-gray-400 text-sm font-medium mb-6 flex items-center gap-2">
                       <span className="text-gray-300">{exp.company}</span>
                       <span className="w-1 h-1 rounded-full bg-gray-600" />
                       <span className="text-gray-500">{exp.highlight}</span>
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Spacer for Balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;