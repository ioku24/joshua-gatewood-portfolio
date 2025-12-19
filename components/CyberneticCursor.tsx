import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CyberneticCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // 1. RAW MOUSE POSITION (Instant)
  // This tracks the actual mouse pixel perfectly for the center dot.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. SPRING PHYSICS (Fluid Ring)
  // Lower stiffness for a smoother, more "fluid" feel compared to the rigid tactical scope.
  const springConfig = { damping: 25, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Optimized: Removed expensive getComputedStyle call
      // Deep check for interactive elements using DOM only
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
        {/* LAYER 1: PRIMARY POINTER (Instant) */}
        <motion.div
            style={{ x: mouseX, y: mouseY }}
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference w-0 h-0 overflow-visible"
        >
            <motion.div
                style={{ translateX: "-50%", translateY: "-50%" }} // Strict centering
                animate={{
                    scale: isClicking ? 0.8 : (isHovering ? 1.2 : 1),
                }}
                transition={{ duration: 0.15 }}
                className="absolute bg-white rounded-full w-2.5 h-2.5"
            />
        </motion.div>

        {/* LAYER 2: ELEGANT RING (Physics) */}
        <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference w-0 h-0 overflow-visible"
        >
            <motion.div
                style={{ translateX: "-50%", translateY: "-50%" }} // Strict centering
                animate={{
                    width: isHovering ? 60 : 24,
                    height: isHovering ? 60 : 24,
                    borderWidth: isHovering ? "1.5px" : "1px",
                    opacity: isHovering ? 1 : 0.4,
                    scale: isClicking ? 0.9 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute rounded-full border border-white"
            />
        </motion.div>
    </>
  );
};

export default CyberneticCursor;