import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, X, ExternalLink, AlertCircle, CheckCircle2, TrendingUp, Info, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProjectBySlug } from '../data/projects';

// Lightbox Component
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col"
    >
      {/* Lightbox Toolbar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
        <span className="text-white/70 text-sm font-mono ml-4">Pinch to Zoom • Scroll to view</span>
        <button 
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Scrollable Image Container */}
      <div 
        className="w-full h-full overflow-auto custom-scrollbar flex items-start justify-center pt-20 pb-20 px-4 md:px-10 cursor-zoom-out"
        onClick={onClose}
      >
        <img 
          src={src} 
          alt="Full screen view" 
          className="max-w-full md:max-w-4xl w-auto h-auto object-contain shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </motion.div>
  );
};

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Redirect to portfolio overview if project not found
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">{project.title}</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Assets List */}
          <div className="space-y-24">
            {project.assets.map((asset, index) => {
              // SPECIAL RENDER FOR COMPARISON TYPE
              if (asset.type === 'comparison') {
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col gap-8 group"
                  >
                    {/* Comparison Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-gray-500 text-sm">
                          0{index + 1}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-serif text-white">{asset.title}</h4>
                      </div>
                      
                      <div className="pl-14">
                        <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                          {asset.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-14">
                      {/* Left Column - Before */}
                      <div className="space-y-3">
                        {asset.beforeVideo ? (
                          <div className="relative rounded-xl overflow-hidden border border-red-500/20 bg-black">
                            <div className="absolute top-3 left-3 z-10 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                            <video 
                              src={asset.beforeVideo}
                              controls
                              muted
                              loop
                              autoPlay
                              playsInline
                              className="w-full h-auto max-h-[500px] object-contain block"
                            />
                          </div>
                        ) : (
                          <div 
                            className="relative group/image cursor-zoom-in rounded-xl overflow-hidden border border-red-500/20"
                            onClick={() => asset.beforeImage && setLightboxImage(asset.beforeImage)}
                          >
                            <div className="absolute top-3 left-3 z-10 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center z-20">
                              <Maximize2 className="text-white drop-shadow-lg" />
                            </div>
                            <img src={asset.beforeImage} alt="Before" className="w-full h-[400px] object-cover object-top opacity-80 group-hover/image:opacity-100 transition-opacity" />
                          </div>
                        )}
                        <h5 className="text-white font-medium">Before – Old Website</h5>
                        {asset.beforeCaption && <p className="text-sm text-gray-500 font-light">{asset.beforeCaption}</p>}
                      </div>

                      {/* Right Column - After */}
                      <div className="space-y-3">
                        {asset.afterVideo ? (
                          <div className="relative rounded-xl overflow-hidden border border-emerald-500/20 bg-black">
                            <div className="absolute top-3 left-3 z-10 bg-emerald-600/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                            <video 
                              src={asset.afterVideo}
                              controls
                              muted
                              loop
                              autoPlay
                              playsInline
                              className="w-full h-auto max-h-[500px] object-contain block"
                            />
                          </div>
                        ) : (
                          <div 
                            className="relative group/image cursor-zoom-in rounded-xl overflow-hidden border border-emerald-500/20"
                            onClick={() => asset.afterImage && setLightboxImage(asset.afterImage)}
                          >
                            <div className="absolute top-3 left-3 z-10 bg-emerald-600/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center z-20">
                              <Maximize2 className="text-white drop-shadow-lg" />
                            </div>
                            <img src={asset.afterImage} alt="After" className="w-full h-[400px] object-cover object-top" />
                          </div>
                        )}
                        <h5 className="text-white font-medium">After – New Website</h5>
                        {asset.afterCaption && <p className="text-sm text-gray-500 font-light">{asset.afterCaption}</p>}
                      </div>
                    </div>
                    
                    {/* Comparison Outcome */}
                    <div className="pl-0 md:pl-14">
                      <div className="bg-indigo-500/5 border border-indigo-500/10 p-5 rounded-xl flex items-center gap-4">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                          <TrendingUp size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-indigo-300 uppercase tracking-wider font-bold block mb-1">Outcome</span>
                          <p className="text-white font-medium text-lg">{asset.outcome}</p>
                        </div>
                      </div>
                    </div>
                    
                    {index !== project.assets.length - 1 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mt-8" />
                    )}
                  </motion.div>
                );
              }

              // STANDARD RENDER FOR IMAGE/VIDEO TYPES
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-8 group"
                >
                  {/* Asset Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-gray-500 text-sm">
                      0{index + 1}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif text-white">{asset.title}</h4>
                  </div>

                  {/* Visual Media Container */}
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl relative group-hover:border-white/20 transition-colors">
                    {/* Fake Browser Toolbar */}
                    <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full bg-black relative">
                      {asset.type === 'embed' ? (
                        <div className={`w-full ${asset.url?.endsWith('.pdf') ? 'h-[800px]' : 'aspect-video'}`}>
                          <iframe 
                            src={asset.url} 
                            className="w-full h-full"
                            frameBorder="0" 
                            allowFullScreen
                          />
                        </div>
                      ) : asset.type === 'video' ? (
                        <video 
                          src={asset.url}
                          poster={asset.poster}
                          controls 
                          className="w-full h-auto block" 
                          muted
                          playsInline
                          loop
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div 
                          className="relative group/image cursor-zoom-in"
                          onClick={() => asset.url && setLightboxImage(asset.url)}
                        >
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center z-10">
                            <Maximize2 className="text-white drop-shadow-lg" size={32} />
                          </div>
                          <img 
                            src={asset.url} 
                            alt={asset.title}
                            className="w-full h-auto block"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* Caption Section */}
                    {asset.caption && (
                      <div className="px-5 py-4 border-t border-white/5 bg-[#141414]">
                        <div className="flex gap-3">
                          <div className="mt-0.5 text-indigo-400">
                            <Info size={16} />
                          </div>
                          <p className="text-sm text-gray-400 font-light italic leading-relaxed">
                            {asset.caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Problem / Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Challenge Card */}
                    <div className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-6 hover:bg-red-500/[0.05] transition-colors">
                      <div className="flex items-center gap-2 mb-3 text-red-400">
                        <AlertCircle size={18} />
                        <span className="font-bold text-xs uppercase tracking-wider">The Challenge</span>
                      </div>
                      <p className="text-gray-300 font-light leading-relaxed text-sm whitespace-pre-line">
                        {asset.challenge}
                      </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6 hover:bg-emerald-500/[0.05] transition-colors">
                      <div className="flex items-center gap-2 mb-3 text-emerald-400">
                        <CheckCircle2 size={18} />
                        <span className="font-bold text-xs uppercase tracking-wider">The Solution</span>
                      </div>
                      <p className="text-gray-300 font-light leading-relaxed text-sm whitespace-pre-line">
                        {asset.solution}
                      </p>
                    </div>
                  </div>

                  {/* Outcome Banner */}
                  <div className="bg-indigo-500/5 border border-indigo-500/10 p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 w-fit">
                      <TrendingUp size={20} />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-indigo-300 uppercase tracking-wider font-bold block mb-1">Outcome</span>
                      <p className="text-white font-medium text-lg">{asset.outcome}</p>
                    </div>
                  </div>

                  {/* Separator (except for last item) */}
                  {index !== project.assets.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mt-8" />
                  )}
                </motion.div>
              );
            })}

            {/* Footer Actions */}
            {project.link && project.link !== '#' && (
              <div className="flex justify-center pt-8">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform cursor-pointer"
                >
                  View Live Project <ExternalLink size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default ProjectPage;
