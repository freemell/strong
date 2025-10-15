"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { TrendingUp, Trophy, Users, BarChart3 } from "lucide-react";

export const MarketSection = () => {
  const stats = [
    { label: "SunSwap Ranking", value: "#10", icon: Trophy, color: "text-yellow-400" },
    { label: "Community Growth", value: "📈", icon: TrendingUp, color: "text-green-400" },
    { label: "TRON Network", value: "🚀", icon: BarChart3, color: "text-blue-400" },
    { label: "Meme Power", value: "💪", icon: Users, color: "text-red-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Market</span>
              <br />
              <span className="text-gradient-tron">Position</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              While others are weak, we are STRONG. Built on the most powerful blockchain.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Solana Comparison */}
          <ScrollReveal variant="slide-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Other Chains</h3>
                <p className="text-white/60">Solana's $USELESS</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Utility</span>
                  <span className="text-red-400">❌ Useless</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Strength</span>
                  <span className="text-red-400">❌ Weak</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Community</span>
                  <span className="text-red-400">❌ Fragmented</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* TRON Comparison */}
          <ScrollReveal variant="slide-left">
            <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">TRON's $sTRONg</h3>
                  <p className="text-white/60">The STRONGEST meme</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white/90">Utility</span>
                    <span className="text-green-400">✅ STRONG</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white/90">Strength</span>
                    <span className="text-green-400">✅ UNBREAKABLE</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white/90">Community</span>
                    <span className="text-green-400">✅ UNITED</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <ScrollReveal variant="slide-up" delay={0.2}>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal variant="pop" delay={0.4}>
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-red-600 to-purple-600 p-1 rounded-2xl">
              <div className="bg-slate-900 rounded-xl px-8 py-4">
                <p className="text-white text-lg font-bold">
                  "While they're making useless tokens, we're building the STRONGEST community on TRON"
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
