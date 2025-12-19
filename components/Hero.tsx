import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Layers, BarChart, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // EFFECT D: Parallax only - elements move at different speeds (no fade out)
  const imageY = useTransform(scrollY, [0, 600], [0, 80]); // Image moves slower (parallax)
  const textY = useTransform(scrollY, [0, 600], [0, -30]); // Text moves up slightly
  const badge1Y = useTransform(scrollY, [0, 600], [0, -50]); // Badge 1 floats up faster
  const badge2Y = useTransform(scrollY, [0, 600], [0, -70]); // Badge 2 floats up fastest
  const badge3Y = useTransform(scrollY, [0, 600], [0, -40]); // Badge 3 floats up medium

  // Intro text: hidden at first, fades in when you scroll down
  const introTextOpacity = useTransform(scrollY, [50, 200], [0, 1]);
  const introTextY = useTransform(scrollY, [50, 200], [20, 0]);

  // ROBUST SCROLL HANDLER
  // Prevents "Refusing to connect" errors by stopping default browser navigation completely
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Typewriter Animation Variants
  const sentence = "Aloha,";
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-background">
      
      {/* SEO: Primary H1 - Visually hidden but accessible to search engines */}
      <h1 className="sr-only">Joshua Gatewood - Marketing Operations Specialist</h1>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative flex flex-col items-center">
        
        {/* Animated Headline (Decorative - SEO H1 is above) */}
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: textY, willChange: 'transform' }}
          className="font-serif text-6xl md:text-8xl text-white mb-8 relative z-20 text-center"
          aria-hidden="true"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Profile Image Container - UPDATED SIZE */}
        {/* EFFECT D: Parallax - image moves slower */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          style={{ y: imageY, willChange: 'transform' }}
          className="relative z-10 w-[80vw] h-[45vh] max-h-[28rem] max-w-[22rem] md:w-[24rem] md:h-[30rem] mb-8"
        >
          {/* Main Image Card */}
          <div 
            className="w-full h-full rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden bg-black relative border border-white/5"
          >
             <img 
               src="https://ik.imagekit.io/kqcgf084pn/jg-headshot.jpeg"
               alt="Joshua Gatewood" 
               className="w-full h-full object-cover brightness-[1.05] contrast-[1.10] saturate-[0.95]"
               loading="eager" // PERFORMANCE: Prioritize loading this image
               // Updated position to 15% (near top) to ensure hair/head is not cropped
               style={{ objectPosition: "center 15%" }} 
             />
             
             {/* Subtle Cool Tone Overlay */}
             <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none" />

             {/* Gradient Overlay for blending bottom */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Stats Badges - DEEP LINKED TO PROJECTS */}
          
          {/* Badge 1: Saved 30% Time -> Links to Project 1 (Ops) */}
          {/* EFFECT D: Parallax - badge floats at its own speed */}
          <motion.a 
            href="#project-1"
            onClick={(e) => handleScrollTo(e, 'project-1')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            style={{ y: badge1Y, willChange: 'transform' }}
            className="absolute -right-2 md:-right-8 top-12 glass-card bg-black/60 px-4 py-2.5 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
            <div className="bg-indigo-500/20 p-2 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
               <Zap size={16} />
            </div>
            <div>
              <p className="text-[9px] text-gray-300 uppercase tracking-wider">Saved</p>
              <p className="text-sm font-bold text-white">30% Time</p>
            </div>
          </motion.a>

          {/* Badge 2: 3x Content -> Links to Project 2 (Content) */}
          {/* EFFECT D: Parallax - badge floats fastest */}
          <motion.a 
            href="#project-2"
            onClick={(e) => handleScrollTo(e, 'project-2')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            style={{ y: badge2Y, willChange: 'transform' }}
            className="absolute -left-2 md:-left-8 bottom-24 glass-card bg-black/60 px-4 py-2.5 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
            <div className="bg-purple-500/20 p-2 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
               <Layers size={16} />
            </div>
             <div>
              <p className="text-[9px] text-gray-300 uppercase tracking-wider">Output</p>
              <p className="text-sm font-bold text-white">3x Content</p>
            </div>
          </motion.a>

          {/* Badge 3: Engagement -> Links to Project 3 (Data) */}
          {/* EFFECT D: Parallax - badge floats at medium speed */}
          <motion.a 
            href="#project-3"
            onClick={(e) => handleScrollTo(e, 'project-3')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            style={{ y: badge3Y, willChange: 'transform' }}
            className="absolute right-4 md:-right-4 bottom-8 glass-card bg-black/60 px-4 py-2.5 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
             <div className="bg-pink-500/20 p-2 rounded-xl text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
               <BarChart size={16} />
            </div>
             <div>
              <p className="text-[9px] text-gray-300 uppercase tracking-wider">Engagement</p>
              <p className="text-sm font-bold text-white">+40%</p>
            </div>
          </motion.a>
        </motion.div>

        {/* CTA Button Container */}
        <div className="text-center w-full px-4 relative z-20 flex flex-col items-center">
          {/* CTA Button (Stays visible on load) */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <motion.a 
              href="#work"
              onClick={(e) => handleScrollTo(e, 'work')}
              className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              View Work
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
          </motion.div>
          {/* Hero Sentence - Hidden on load, fades in on scroll */}
          <motion.div 
            style={{ opacity: introTextOpacity, y: introTextY, willChange: 'transform, opacity' }}
            className="max-w-4xl mx-auto"
          >
            <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              I'm <span className="text-white font-medium">Joshua Gatewood</span>, a systems thinker designing marketing infrastructure so creative ideas can scale.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
