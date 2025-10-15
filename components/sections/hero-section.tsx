"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, TrendingUp, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with existing wallpaper */}
      <div className="absolute inset-0">
        {/* This will be handled by the wallpaper component */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Logo */}
        <ScrollReveal variant="explode" delay={0.2}>
          <div className="mb-8">
            <Image
              src="/images/image copy.png"
              alt="$sTRONg Logo"
              width={400}
              height={400}
              className="mx-auto drop-shadow-2xl animate-pulse-glow"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Main Title */}
        <ScrollReveal variant="slide-up" delay={0.4}>
          <h1 className="text-5xl md:text-8xl font-black mb-6">
            <span className="text-gradient-tron">$sTRONg</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="slide-up" delay={0.6}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            The STRONGEST Meme on TRON
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal variant="slide-up" delay={0.8}>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Built on TRON's robust ecosystem. Not just a meme, but a symbol of TRON's 
            technological prowess and community spirit. IYKYK.
          </p>
        </ScrollReveal>

        {/* Animated Icons */}
        <ScrollReveal variant="pop" delay={1.0}>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="w-8 h-8 text-green-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-8 h-8 text-purple-400" />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal variant="shake" delay={1.2}>
          <motion.a
            href="https://dexscreener.com/tron/tcplpakaib4gl6ajdfne3egdxjuaimt7ux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-8 py-4 rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl animate-pulse-glow opacity-75" />
              
              {/* Button content */}
              <div className="relative flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-white font-bold text-xl">
                  BUY NOW OR REGRET FOREVER
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30 -z-10" />
            </div>
          </motion.a>
        </ScrollReveal>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
};
