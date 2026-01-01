import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-surface relative overflow-hidden scroll-mt-32">
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
            <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white">
              Marketer turned builder. Powered by AI.
            </h2>
          </div>

          {/* Content card */}
          <div className="relative p-10 md:p-14 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-background/50 backdrop-blur-sm shadow-sm dark:shadow-none hover:shadow-md transition-shadow duration-300">
            {/* Decorative corner accents */}
            <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-lg" />
            <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-indigo-500/30 rounded-br-lg" />

            <div className="space-y-8 text-center max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed font-light">
                I graduated in 2025 from Adrian College with a degree in Business Marketing. I started doing traditional <span className="text-slate-900 dark:text-white font-medium">marketing operations work</span> at Gauntlet AI, fixing broken funnels, cleaning HubSpot data, and building automation workflows. Then I discovered <span className="text-slate-900 dark:text-white font-medium">AI tools like Claude Code</span>. Suddenly, I could build technical solutions most marketers can't touch. I shipped RankEasy, a full SaaS platform with payments and OAuth, in 4 days.
              </p>

              {/* Pull Quote */}
              <div className="relative py-10 px-8 border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 rounded-r-2xl">
                <p className="text-xl md:text-2xl font-serif italic text-slate-900 dark:text-white leading-[1.4]">
                  "I don't choose between marketing and building. I do both."
                </p>
              </div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed font-light">
                Originally from Hawaii, I'm a systems thinker who loves solving problems and optimizing processes. When I'm not building marketing systems, I'm working out or playing rugby. <span className="text-slate-900 dark:text-white font-medium">My next goal: joining a big tech company</span> where I can combine marketing expertise with AI-powered execution.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200 dark:border-white/5">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Target size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">Systems Thinking</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Code2 size={18} className="text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">AI-Powered Building</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <TrendingUp size={18} className="text-pink-600 dark:text-pink-400" />
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">Ship Fast</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;