import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Zap, Layers, BarChart, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // OPTIMIZATION: Visibility & Stability
  const opacity = useTransform(scrollY, [800, 1200], [1, 0]);
  const imgY = useTransform(scrollY, [0, 1000], [0, 50]);

  // Animation variants for the "Floating" effect (Breathing)
  const floatAnimation: Variants = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

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
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 bg-background">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative flex flex-col items-center">
        
        {/* Animated Headline */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }} 
          className="font-serif text-6xl md:text-8xl text-white mb-8 md:mb-12 relative z-20 text-center"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }} // Delayed to happen after text finishes
          style={{ y: imgY, opacity }} // Apply subtle parallax to image
          className="relative z-10 w-[90vw] max-w-[28rem] h-[36rem] md:w-[38rem] md:h-[48rem] mb-12"
        >
          {/* Main Image Card */}
          <motion.div 
            variants={floatAnimation}
            animate="animate"
            className="w-full h-full rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden bg-black relative border border-white/5"
          >
             <img 
               src="https://ik.imagekit.io/kqcgf084pn/jg-headshot.jpeg"
               alt="Joshua Gatewood" 
               className="w-full h-full object-cover brightness-[1.05] contrast-[1.15] saturate-[0.9]"
               // Updated position to 40% to show more chin/neck as requested
               style={{ objectPosition: "center 40%" }} 
             />
             
             {/* Subtle Cool Tone Overlay */}
             <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none" />

             {/* Gradient Overlay for blending bottom */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Stats Badges - DEEP LINKED TO PROJECTS */}
          
          {/* Badge 1: Saved 30% Time -> Links to Project 1 (Ops) */}
          <motion.a 
            href="#project-1"
            onClick={(e) => handleScrollTo(e, 'project-1')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute -right-2 md:-right-6 top-24 glass-card bg-black/60 px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
            <div className="bg-indigo-500/20 p-2.5 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
               <Zap size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider">Saved</p>
              <p className="text-base font-bold text-white">30% Time</p>
            </div>
          </motion.a>

          {/* Badge 2: 3x Content -> Links to Project 2 (Content) */}
          <motion.a 
            href="#project-2"
            onClick={(e) => handleScrollTo(e, 'project-2')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute -left-2 md:-left-6 bottom-32 glass-card bg-black/60 px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
            <div className="bg-purple-500/20 p-2.5 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
               <Layers size={18} />
            </div>
             <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider">Output</p>
              <p className="text-base font-bold text-white">3x Content</p>
            </div>
          </motion.a>

          {/* Badge 3: Engagement -> Links to Project 3 (Data) */}
          <motion.a 
            href="#project-3"
            onClick={(e) => handleScrollTo(e, 'project-3')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute right-4 md:-right-2 bottom-12 glass-card bg-black/60 px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-2xl backdrop-blur-2xl border border-white/10 cursor-pointer group z-30"
          >
             <div className="bg-pink-500/20 p-2.5 rounded-xl text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
               <BarChart size={18} />
            </div>
             <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider">Engagement</p>
              <p className="text-base font-bold text-white">+40%</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Text & Main CTA */}
        <motion.div
           style={{ opacity }}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.8 }}
           className="text-center max-w-3xl px-4 relative z-20 flex flex-col items-center"
        >
          <p className="font-sans text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            I’m <span className="text-white font-medium">Joshua Gatewood</span>, a systems thinker designing marketing infrastructure so creative ideas can scale.
          </p>

          <div className="flex justify-center">
            <a 
              href="#work"
              onClick={(e) => handleScrollTo(e, 'work')}
              className="group flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              View Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;