import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-surface relative overflow-hidden scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            About Me
          </p>

          <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed font-light space-y-5 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl">
              My background in startups taught me to prioritize ruthlessly. When you're wearing multiple hats, you learn to spot bottlenecks fast and fix the problems that actually move the needle.
            </p>
            <p className="text-lg md:text-xl">
              Now I'm looking to bring that mindset to a team where <span className="text-white font-medium">process optimization drives growth</span>—whether that's a scaling startup, an agency, or an enterprise marketing team.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;