"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Zap, TrendingUp } from "lucide-react";

const messages = [
  "WHY AREN'T YOU BUYING?!",
  "NGMI IF YOU SKIP THIS!",
  "YOUR WALLET IS CRYING!",
  "STRONGEST BUTTON EVER!",
  "DON'T BE WEAK!",
  "BUY OR REGRET FOREVER!",
  "TRON NEEDS YOU!",
  "MONEY PRINTER GO BRRR!",
];

const icons = [ShoppingCart, Zap, TrendingUp];

export const BuyButton = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const IconComponent = icons[currentMessage % icons.length];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
            rotate: [0, -5, 5, 0]
          }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ 
            duration: 0.5,
            rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.a
            href="https://dexscreener.com/tron/tcplpakaib4gl6ajdfne3egdxjuaimt7ux"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px #ff0000",
                "0 0 40px #ff0000, 0 0 60px #ff0000",
                "0 0 20px #ff0000"
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-4 rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              {/* Animated background pulse */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl animate-pulse-glow opacity-75" />
              
              {/* Content */}
              <div className="relative flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-white font-bold text-sm">
                  <motion.span
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="block whitespace-nowrap"
                  >
                    {messages[currentMessage]}
                  </motion.span>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
              <div className="absolute -top-1 -right-3 w-1 h-1 bg-yellow-300 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -right-1 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30 -z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
