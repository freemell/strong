"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "slide-up" | "slide-left" | "slide-right" | "pop" | "shake" | "explode";
  delay?: number;
  className?: string;
}

const variants = {
  "slide-up": {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-left": {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },
  "pop": {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  },
  "shake": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: [1, 1.1, 1, 1.05, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.6, 1]
      }
    }
  },
  "explode": {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: [0, 1.2, 1],
      rotate: 0,
      transition: {
        duration: 0.8,
        times: [0, 0.6, 1]
      }
    }
  }
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  variant = "slide-up", 
  delay = 0,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
