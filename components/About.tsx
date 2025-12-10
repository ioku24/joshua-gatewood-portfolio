import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Text Narrative - Centered Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-8">
            The Story
          </h2>
          
          <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed font-light space-y-6">
            <p>
              I'm a <span className="text-white font-medium">Marketing Operations Specialist</span> and systems builder dedicated to optimizing infrastructure for scalability.
            </p>
            <p>
              My background in high-growth startups forced me to wear a lot of hats, but my focus has always been on designing systems that scale. In fast-paced environments where multiple projects are moving at once, I lean on prioritization to spot the biggest bottlenecks in the business, target the highest-ROI problems, and automate repetitive workflows and data pipelines so teams can execute more efficiently.
            </p>
            <p>
              I’m looking to bring this systems-first mindset into an environment where deep process optimization is a core driver of growth.
            </p>
          </div>
        </motion.div>

      </div>
      
      {/* Decorative large text background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none opacity-[0.02]">
        <span className="font-serif text-[15rem] font-bold text-white whitespace-nowrap">
          ABOUT
        </span>
      </div>
    </section>
  );
};

export default About;