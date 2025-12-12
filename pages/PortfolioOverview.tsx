import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const PortfolioOverview: React.FC = () => {
  // Artifact Rendering Logic for each project type
  const renderArtifact = (projectId: number) => {
    if (projectId === 1) {
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
    } else if (projectId === 2) {
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
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Selected Work</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              A collection of projects showcasing my expertise in marketing operations, 
              content systems, and data-driven optimization.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 2 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}
              >
                <Link 
                  to={`/work/${project.slug}`}
                  className="block relative group rounded-[2rem] border border-white/5 bg-surface transition-all duration-300 bg-noise overflow-hidden hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:scale-[1.02]"
                >
                  {/* Card Image / Artifact Area */}
                  <div className="relative h-[240px] md:h-[350px] overflow-hidden border-b border-white/5 bg-black/20">
                    {renderArtifact(project.id)}
                    
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioOverview;
