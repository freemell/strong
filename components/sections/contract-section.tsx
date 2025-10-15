"use client";
import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Copy, Check, AlertTriangle } from "lucide-react";

export const ContractSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "TPJELB8tc1jVFmkRhYGSmTCTTg7ZTtxsBV";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-slate-900 to-red-900 relative overflow-hidden">
      {/* Aggressive background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-red-500/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Screaming Header */}
        <ScrollReveal variant="shake">
          <div className="text-center mb-12">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-8xl font-black text-white mb-4 drop-shadow-2xl">
                <span className="text-gradient-tron animate-shake">WHY AREN'T</span>
                <br />
                <span className="text-gradient-tron animate-shake">YOU BUYING</span>
                <br />
                <span className="text-gradient-tron animate-shake">YET?!</span>
              </h2>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Contract Address Container */}
        <ScrollReveal variant="explode" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px #ff0000, 0 0 60px #ff0000",
                  "0 0 50px #ff0000, 0 0 100px #ff0000, 0 0 150px #ff0000",
                  "0 0 30px #ff0000, 0 0 60px #ff0000",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-8 rounded-3xl border-4 border-white/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Aggressive background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                {/* Warning Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center mb-6"
                >
                  <AlertTriangle className="w-16 h-16 text-white mx-auto drop-shadow-lg" />
                </motion.div>

                {/* Contract Label */}
                <motion.h3
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl md:text-3xl font-bold text-white text-center mb-6 drop-shadow-lg"
                >
                  CONTRACT ADDRESS
                </motion.h3>

                {/* Contract Address */}
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-black/30 rounded-2xl p-6 mb-6 border-2 border-white/20"
                >
                  <p className="text-white font-mono text-lg md:text-xl text-center break-all select-all">
                    {contractAddress}
                  </p>
                </motion.div>

                {/* Copy Button */}
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px #ff0000",
                      "0 0 40px #ff0000, 0 0 60px #ff0000",
                      "0 0 20px #ff0000",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  {copied ? (
                    <>
                      <Check className="w-6 h-6" />
                      <span className="text-xl">COPIED! NOW GO BUY!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-6 h-6" />
                      <span className="text-xl">COPY CONTRACT & BUY NOW!</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Floating warning elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-2 -right-6 w-6 h-6 bg-red-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute -bottom-3 -right-3 w-4 h-4 bg-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Urgency Message */}
        <ScrollReveal variant="slide-up" delay={0.5}>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center mt-12"
          >
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              ⚡ DON'T MISS OUT! ⚡
            </p>
            <p className="text-lg text-white/80 mt-2">
              Every second you wait is money you're not making!
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};
