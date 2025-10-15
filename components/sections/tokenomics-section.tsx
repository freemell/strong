"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { PieChart, TrendingUp, Shield, Zap } from "lucide-react";

export const TokenomicsSection = () => {
  const tokenomics = [
    { label: "Community Rewards", percentage: 40, color: "from-red-500 to-red-600" },
    { label: "Liquidity Pool", percentage: 30, color: "from-blue-500 to-blue-600" },
    { label: "Development Fund", percentage: 20, color: "from-purple-500 to-purple-600" },
    { label: "Marketing & Partnerships", percentage: 10, color: "from-yellow-500 to-yellow-600" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Deflationary",
      description: "Built-in burn mechanism",
      color: "text-red-400"
    },
    {
      icon: TrendingUp,
      title: "Auto-Staking",
      description: "Earn rewards automatically",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Fast Transactions",
      description: "Powered by TRON network",
      color: "text-blue-400"
    },
    {
      icon: PieChart,
      title: "Fair Distribution",
      description: "No whale manipulation",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Tokenomics</span>
              <br />
              <span className="text-gradient-tron">That Make Sense</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Built for the community, by the community. No hidden tricks, just STRONG fundamentals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Distribution Chart */}
          <ScrollReveal variant="slide-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Token Distribution</h3>
              
              {/* Pie Chart Visualization */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {tokenomics.map((item, index) => {
                    const cumulativePercentage = tokenomics
                      .slice(0, index)
                      .reduce((sum, token) => sum + token.percentage, 0);
                    
                    const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                    const strokeDashoffset = -cumulativePercentage;

                    return (
                      <motion.circle
                        key={item.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={`url(#gradient${index})`}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        initial={{ strokeDashoffset: -100 }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    );
                  })}
                  
                  {/* Gradients */}
                  <defs>
                    {tokenomics.map((item, index) => (
                      <linearGradient key={index} id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={`var(--color-${index}-start)`} />
                        <stop offset="100%" stopColor={`var(--color-${index}-end)`} />
                      </linearGradient>
                    ))}
                  </defs>
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$sTRONg</div>
                    <div className="text-sm text-white/70">Total Supply</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                {tokenomics.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-white/90">{item.label}</span>
                      <span className="text-white font-bold">{item.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Features */}
          <ScrollReveal variant="slide-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8">Why $sTRONg is Different</h3>
              
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Supply Info */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 mt-8"
              >
                <h4 className="text-2xl font-bold text-white mb-4">Token Supply</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-400">1B</div>
                    <div className="text-white/70 text-sm">Total Supply</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">850M</div>
                    <div className="text-white/70 text-sm">In Circulation</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Call to Action */}
        <ScrollReveal variant="pop" delay={0.6}>
          <div className="text-center mt-16">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl"
            >
              <div className="bg-slate-900 rounded-xl px-8 py-4">
                <p className="text-white text-lg font-bold">
                  "Strong tokenomics = Strong community = Strong price action"
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        :root {
          --color-0-start: #ef4444;
          --color-0-end: #dc2626;
          --color-1-start: #3b82f6;
          --color-1-end: #2563eb;
          --color-2-start: #8b5cf6;
          --color-2-end: #7c3aed;
          --color-3-start: #eab308;
          --color-3-end: #ca8a04;
        }
      `}</style>
    </section>
  );
};
