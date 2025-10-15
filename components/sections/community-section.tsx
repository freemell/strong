"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Users, MessageCircle, Heart } from "lucide-react";

export const CommunitySection = () => {
  const memeImages = [
    "/images/photo_6014879459716483834_x.jpg",
    "/images/photo_6017114135495559110_x.jpg",
    "/images/photo_6017114135495559109_x.jpg",
    "/images/image copy 5.png",
    "/images/image copy 6.png",
  ];

  const socialLinks = [
    {
      name: "Justin Sun's Post",
      url: "https://x.com/justinsuntron/status/1892589205441720334",
      icon: Twitter,
      color: "text-blue-400",
      description: "The announcement that started it all"
    },
    {
      name: "X Community",
      url: "https://x.com/i/communities/1978467404196794825",
      icon: Users,
      color: "text-green-400",
      description: "Join the STRONGEST community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Community</span>
              <br />
              <span className="text-gradient-tron">That Gets It</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join the STRONGEST community in crypto. Where memes meet money and everyone gets it.
            </p>
          </div>
        </ScrollReveal>

        {/* Meme Gallery */}
        <ScrollReveal variant="slide-up" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Community Memes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {memeImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 group-hover:border-purple-400/50 transition-all duration-300">
                    <Image
                      src={image}
                      alt={`Community meme ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <ScrollReveal key={social.name} variant="slide-up" delay={index * 0.2}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <social.icon className={`w-12 h-12 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-white/70">{social.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    Join Now →
                  </span>
                  <MessageCircle className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Community Stats */}
        <ScrollReveal variant="slide-up" delay={0.4}>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Community Power</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-white/70">Community Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
                <div className="text-white/70">Social Engagement</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-white/70">Active Community</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-white/70">Diamond Hands</div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* IYKYK Badge */}
        <ScrollReveal variant="pop" delay={0.6}>
          <div className="text-center mt-12">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 p-1 rounded-2xl"
            >
              <div className="bg-slate-900 rounded-xl px-8 py-4">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-yellow-400 text-2xl">💎</span>
                  <span className="text-white text-xl font-bold">IYKYK</span>
                  <span className="text-yellow-400 text-2xl">💎</span>
                </div>
                <p className="text-white/70 mt-2">If You Know, You Know</p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
