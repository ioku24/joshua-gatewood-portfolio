import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GitFork, Database, BarChart3, Check, Terminal, Activity } from 'lucide-react';

const Expertise: React.FC = () => {
  // Staggered animation container for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card appearing
      }
    }
  };

  // Animation for individual cards
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section id="expertise" className="py-24 bg-background relative border-t border-white/5 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-3">My Expertise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl leading-tight">
              Architecting the <span className="text-gray-500">invisible systems</span> that power growth.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 max-w-sm text-sm md:text-base font-light"
          >
            Moving beyond simple tasks to build scalable, automated infrastructure.
          </motion.p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when 100px of the grid is in view
        >
          
          {/* Card 1: System Architecture (Large) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-8 rounded-3xl bg-surface/40 border border-white/5 hover:bg-surface/60 hover:border-indigo-500/20 transition-all duration-300 bg-noise relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Compass size={120} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/20">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">System Architecture</h3>
                <p className="text-gray-400 text-base leading-relaxed font-light max-w-md">
                  Blueprinting the 'central nervous system' of your marketing operations. I audit tech stacks and map processes to eliminate redundancy.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Tech Stack Audit", "Process Mapping", "Integration Strategy"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Workflow Automation (Tall/Standard) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 p-8 rounded-3xl bg-surface/40 border border-white/5 hover:bg-surface/60 hover:border-purple-500/20 transition-all duration-300 bg-noise relative overflow-hidden group flex flex-col"
          >
             {/* Decorative Code Snippet */}
             <div className="absolute -right-4 top-8 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                <div className="space-y-2 font-mono text-[10px] text-purple-400">
                   <div className="bg-purple-500/20 h-2 w-20 rounded" />
                   <div className="bg-purple-500/20 h-2 w-16 rounded ml-4" />
                   <div className="bg-purple-500/20 h-2 w-24 rounded" />
                </div>
             </div>

             <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
                <GitFork size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                Removing manual bottlenecks with intelligent, automated triggers via Zapier or Make.
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
                 <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Terminal size={14} className="text-purple-500" />
                    <span>Lead Routing</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Terminal size={14} className="text-purple-500" />
                    <span>Auto-Nurture</span>
                 </div>
              </div>
          </motion.div>

          {/* Card 3: Marketing Ops (Standard) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 p-8 rounded-3xl bg-surface/40 border border-white/5 hover:bg-surface/60 hover:border-cyan-500/20 transition-all duration-300 bg-noise relative overflow-hidden group"
          >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Database size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">Marketing Ops</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                Managing the tools and data that power your growth campaigns. Clean data = clear decisions.
              </p>

              <div className="flex gap-2 mt-auto">
                 <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-mono border border-cyan-500/20">CRM</span>
                 <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-mono border border-cyan-500/20">Hygiene</span>
              </div>
          </motion.div>

          {/* Card 4: Scalable Reporting (Large) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-8 rounded-3xl bg-surface/40 border border-white/5 hover:bg-surface/60 hover:border-pink-500/20 transition-all duration-300 bg-noise relative overflow-hidden group"
          >
             {/* Decorative Chart */}
             <div className="absolute bottom-0 right-0 w-48 h-32 opacity-10 group-hover:opacity-20 transition-opacity flex items-end justify-end gap-2 p-8">
                <div className="w-4 bg-pink-400 h-[40%] rounded-t-sm" />
                <div className="w-4 bg-pink-400 h-[60%] rounded-t-sm" />
                <div className="w-4 bg-pink-400 h-[30%] rounded-t-sm" />
                <div className="w-4 bg-pink-400 h-[80%] rounded-t-sm" />
             </div>

             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6 border border-pink-500/20">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Scalable Reporting</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">
                    Turning raw data into actionable insights. I build custom dashboards and attribution models so leadership knows exactly what's working.
                  </p>
               </div>
               
               {/* Mini Stat Widget */}
               <div className="w-full md:w-auto bg-black/40 border border-white/10 rounded-xl p-4 min-w-[160px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity size={14} className="text-pink-500" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Live Metrics</span>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-400">CAC</span>
                        <span className="text-white font-mono">$42</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[60%] h-full bg-pink-500" />
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-400">LTV</span>
                        <span className="text-white font-mono">$850</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-indigo-500" />
                     </div>
                  </div>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;