"use client";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const SimpleWallpaper = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to various effects - start fade later
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);
  const blur = useTransform(scrollYProgress, [0.3, 0.6], [0, 8]);
  const brightness = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <motion.div 
      className="fixed inset-0 z-0"
      style={{ opacity }}
    >
      {/* Fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      
      {/* Parallax scrolling image with effects */}
      <motion.img
        src="/images/welcome.png"
        alt="Welcome Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          scale,
          y,
          filter: `blur(${blur}px) brightness(${brightness})`,
        }}
        onLoad={() => console.log('Image loaded successfully!')}
        onError={() => console.log('Image failed to load!')}
      />
      
      {/* Overlay that also fades */}
      <motion.div 
        className="absolute inset-0 bg-black/20"
        style={{ opacity }}
      />
      
      {/* Animated particles for extra effect */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/30 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};
