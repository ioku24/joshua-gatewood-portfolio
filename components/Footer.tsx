import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-surface pt-40 pb-16 border-t border-white/5 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 leading-tight">
            Let's build together.
          </h2>
          <p className="text-gray-300 text-xl mb-16 max-w-2xl mx-auto font-light">
            Ready to optimize your marketing operations or build a scalable content system? Let's connect.
          </p>
          
          <a 
            href="mailto:joshuangatewood@gmail.com"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300 mb-20 group"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="flex justify-center space-x-8 mb-20">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/joshuangatewood", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/joshhustles", label: "X (Twitter)" },
            { icon: Instagram, href: "https://www.instagram.com/joshhustle/", label: "Instagram" },
            { icon: Youtube, href: "https://www.youtube.com/@joshuagatewood", label: "YouTube" }
          ].map((Social, index) => (
            <a 
              key={index}
              href={Social.href} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={Social.label}
              className="p-5 rounded-full glass-card text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            >
              <Social.icon size={24} />
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-10">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Joshua Gatewood. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;