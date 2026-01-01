import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ExperienceItem } from '../types';

interface ExtendedExperience extends ExperienceItem {
  achievements: string[];
  metric?: string;
  skills?: string[];
}

const experiences: ExtendedExperience[] = [
  {
    company: 'Gauntlet AI',
    role: 'Marketing Operations Intern',
    period: '06/2025 - Present',
    description: '',
    highlight: 'Remote',
    metric: '2x Pipeline',
    achievements: [
      'Audited acquisition ecosystem to diagnose bottlenecks',
      'Built offer-specific funnels driving 2x pipeline increase',
      'Created KPI dashboards and cleaned HubSpot data',
      'Engineered content repurposing engine (3-5x output)'
    ],
    skills: ['HubSpot', 'Funnel Design', 'Data Ops']
  },
  {
    company: 'HOME Organization',
    role: 'Social Media Manager',
    period: '04/2025 - 06/2025',
    description: '',
    highlight: 'Remote',
    metric: '+25% Engagement',
    achievements: [
      'Developed multi-platform strategy (LinkedIn, FB, IG)',
      'Increased engagement 25% in 30 days',
      'Built AI-assisted content workflows'
    ],
    skills: ['Social Strategy', 'AI Tools', 'Content']
  },
  {
    company: 'Lenawee County',
    role: 'Community Development Assistant',
    period: '05/2023 - 05/2025',
    description: '',
    highlight: 'Adrian, MI',
    achievements: [
      'Secured federal funding for community programs',
      'Created content for Land Bank properties',
      'Presented data-driven reports to Commissioners'
    ],
    skills: ['Reporting', 'Stakeholder Mgmt']
  },
  {
    company: 'Adrian College',
    role: 'Social Media & Brand Manager',
    period: '08/2023 - 05/2024',
    description: '',
    highlight: 'Adrian, MI',
    metric: '2,000+ Followers',
    achievements: [
      'Built digital presence attracting 2,000+ followers',
      'Generated 75 recruitment calls (record 30-player class)',
      'Developed AI chatbot converting leads to recruits'
    ],
    skills: ['Brand Building', 'Lead Gen', 'Chatbots']
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
          {/* OPTIMIZATION: Updated Contrast */}
          <p className="text-gray-300">The path that led to systems thinking.</p>
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

                {/* Content Card - OPTIMIZATION: Increased mobile padding (pl-12) */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`
                    relative p-8 rounded-3xl border border-white/5 bg-surface/80 backdrop-blur-sm bg-noise
                    hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-500 group
                    ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}
                  `}>
                    
                    {/* Glowing effect behind card */}
                    <div className="absolute inset-0 bg-indigo-500/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-gray-400 text-sm font-medium mt-1 flex items-center gap-2">
                          <span className="text-gray-300">{exp.company}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="text-gray-500">{exp.highlight}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {exp.metric && (
                          <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                            {exp.metric}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs font-mono text-gray-400 border border-white/5 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Achievement bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-2 flex-shrink-0" />
                          <span className="group-hover:text-gray-200 transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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