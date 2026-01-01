import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface relative overflow-hidden scroll-mt-32">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Marketer who codes. Engineer who gets GTM.
            </h2>
          </div>

          {/* Content card */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-background/50 backdrop-blur-sm">
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-indigo-500/30 rounded-br-lg" />

            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Most marketers configure tools. <span className="text-white font-medium">I build them.</span> When an off-the-shelf solution doesn't exist, I write the code myself—whether that's a Next.js web app, a Supabase-powered dashboard, or an AI agent that automates workflows.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                My startup background taught me to prioritize ruthlessly and ship fast. Now I'm looking to bring that <span className="text-white font-medium">builder mindset</span> to a team where engineering and marketing intersect.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Target size={18} className="text-indigo-400" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Find Bottlenecks</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Code2 size={18} className="text-purple-400" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Build Solutions</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <TrendingUp size={18} className="text-pink-400" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Drive Growth</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;