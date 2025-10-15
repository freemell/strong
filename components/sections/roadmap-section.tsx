"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Rocket, Target, Globe, Zap, TrendingUp, Users } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      icon: Rocket,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      items: [
        "Launch on TRON network",
        "Build initial community",
        "Establish partnerships",
        "Create viral memes"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth",
      status: "active",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      items: [
        "SunSwap listing (#10 ranking)",
        "Community expansion",
        "Influencer partnerships",
        "Cross-chain bridges"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem",
      status: "upcoming",
      icon: Target,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      items: [
        "DeFi integrations",
        "NFT collection launch",
        "Staking rewards program",
        "Governance token features"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global",
      status: "future",
      icon: Globe,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-500/30",
      items: [
        "Global recognition",
        "Traditional media coverage",
        "Institutional partnerships",
        "TRON ecosystem leadership"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Roadmap to</span>
              <br />
              <span className="text-gradient-tron">Dominance</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From meme to mainstream. Our journey to becoming the STRONGEST token on TRON.
            </p>
          </div>
        </ScrollReveal>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-yellow-500 transform md:-translate-x-1/2" />

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <ScrollReveal key={item.phase} variant={index % 2 === 0 ? "slide-right" : "slide-left"}>
                <div className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      animate={item.status === "active" ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      } : {}}
                      transition={{
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                      }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.bgColor} border-4 ${item.borderColor} flex items-center justify-center backdrop-blur-sm`}
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:pr-8" : "md:mr-auto md:pl-8"} pl-16 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${item.borderColor} relative overflow-hidden`}
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "completed" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                          item.status === "active" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                          item.status === "upcoming" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                          "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Phase and Title */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.phase}</h3>
                        <h4 className="text-3xl font-black text-white">{item.title}</h4>
                      </div>

                      {/* Items List */}
                      <ul className="space-y-3">
                        {item.items.map((roadmapItem, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                            <span className="text-white/90">{roadmapItem}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Special Effects for Active Phase */}
                      {item.status === "active" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <ScrollReveal variant="slide-up" delay={0.4}>
          <div className="mt-20 text-center">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 max-w-4xl mx-auto"
            >
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Integration with TRON's Vision
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                $sTRONg aligns perfectly with TRON's mission for financial freedom and global settlement. 
                As TRON continues to lead in USDT transaction volume and DeFi innovation, 
                we're building the community and culture that supports this revolutionary ecosystem.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="text-white/70">Building the future of finance, one meme at a time</span>
                <Users className="w-6 h-6 text-orange-400" />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal variant="pop" delay={0.6}>
          <div className="text-center mt-12">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block bg-gradient-to-r from-orange-600 to-yellow-600 p-1 rounded-2xl"
            >
              <div className="bg-slate-900 rounded-xl px-8 py-4">
                <p className="text-white text-lg font-bold">
                  "The future is STRONG. The future is TRON. The future is $sTRONg."
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
