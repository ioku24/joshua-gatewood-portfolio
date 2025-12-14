import React from 'react';
import { motion } from 'framer-motion';

const TechnicalToolkit: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center mb-12 text-white"
        >
          Technical Toolkit
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Automation Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 transition-colors group bg-noise"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-300 group-hover:text-indigo-200">
              Marketing Automation
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />HubSpot</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />GoHighLevel</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />Zapier / Make / N8N</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />ManyChat</li>
            </ul>
          </motion.div>
          
          {/* Analytics Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-colors group bg-noise"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              Analytics & Data
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />Google Analytics 4</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />Looker Studio</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />Google Sheets / Coefficient</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />Miro</li>
            </ul>
          </motion.div>
          
          {/* AI & Creative Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 hover:border-pink-500/30 transition-colors group bg-noise"
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-300 group-hover:text-pink-200">
              AI & Creative
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3" />Claude / Cursor</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3" />ChatGPT / Gemini</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3" />Descript / CapCut</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3" />Adobe</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalToolkit;