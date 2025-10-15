"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, ExternalLink, Heart, Zap } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <ScrollReveal variant="slide-up">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <Image
                  src="/images/image copy.png"
                  alt="$sTRONg Logo"
                  width={120}
                  height={120}
                  className="mx-auto md:mx-0 drop-shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-gradient-tron">$sTRONg</span>
              </h3>
              <p className="text-white/70 leading-relaxed">
                The STRONGEST meme coin on TRON. Built for the community, 
                powered by conviction. IYKYK.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal variant="slide-up" delay={0.2}>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                <motion.a
                  href="https://dexscreener.com/tron/tcplpakaib4gl6ajdfne3egdxjuaimt7ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 justify-center md:justify-start"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buy on DexScreener</span>
                </motion.a>
                <motion.a
                  href="https://x.com/justinsuntron/status/1892589205441720334"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 justify-center md:justify-start"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Justin Sun's Post</span>
                </motion.a>
                <motion.a
                  href="https://x.com/i/communities/1978467404196794825"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 justify-center md:justify-start"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Join Community</span>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contract Info */}
          <ScrollReveal variant="slide-up" delay={0.4}>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-6">Contract</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white/70 text-sm mb-2">Contract Address:</p>
                <p className="text-white font-mono text-xs break-all">
                  TPJELB8tc1jVFmkRhYGSmTCTTg7ZTtxsBV
                </p>
              </div>
              <div className="mt-4">
                <p className="text-white/70 text-sm">Network: TRON</p>
                <p className="text-white/70 text-sm">Standard: TRC-20</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <ScrollReveal variant="slide-right">
              <div className="flex items-center space-x-2 text-white/60">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with strength by the $sTRONg community</span>
              </div>
            </ScrollReveal>

            {/* Disclaimer */}
            <ScrollReveal variant="slide-left">
              <div className="text-center md:text-right">
                <p className="text-white/50 text-sm max-w-md">
                  This is a meme coin. DYOR. Not financial advice. 
                  Only invest what you can afford to lose.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Final Message */}
          <ScrollReveal variant="pop" delay={0.6}>
            <div className="text-center mt-8">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-purple-600 px-6 py-3 rounded-full"
              >
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white font-bold">STRONG TOGETHER</span>
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};
