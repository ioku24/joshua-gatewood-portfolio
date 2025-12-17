import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#121212]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                <h2 className="text-white font-serif text-xl">Resume</h2>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="/HOME/Joshua Gatewood Resume Final 2026.pdf"
                  download="Joshua_Gatewood_Resume_2026.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:text-white text-gray-300 border border-white/10 rounded-lg text-sm font-medium transition-colors"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 border border-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body - Iframe Embed */}
            <div className="flex-1 bg-[#1a1a1a] relative w-full h-full">
               <iframe
                  src="/HOME/Joshua Gatewood Resume Final 2026.pdf"
                  className="w-full h-full border-none"
                  title="Joshua Gatewood Resume"
                  allow="autoplay"
               ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;