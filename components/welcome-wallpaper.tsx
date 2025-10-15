"use client";
import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const WelcomeWallpaper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Debug: Log when component mounts
  React.useEffect(() => {
    console.log('WelcomeWallpaper mounted');
  }, []);

  // Transform scroll progress to opacity (fade out as user scrolls)
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div
        className="relative w-full h-full"
        style={{ scale }}
      >
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        
        {/* Try regular img tag first */}
        <img
          src="/images/welcome.png"
          alt="Welcome Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => console.log('Image failed to load - check console')}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        {/* Animated particles/effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300/40 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
};
