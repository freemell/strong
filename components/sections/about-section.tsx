"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { Shield, Zap, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <ScrollReveal variant="slide-right">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-gradient-tron">Background</span>
                <br />
                <span className="text-white">& Origin</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.2}>
              <div className="space-y-6 text-lg text-white/90">
                <p>
                  <strong className="text-red-400">$sTRONg</strong> is a meme coin on the TRON blockchain, 
                  launched as a playful yet powerful representation of TRON's core values of strength, 
                  resilience, and conviction.
                </p>
                
                <p>
                  More than just a meme, <strong className="text-red-400">$sTRONg</strong> is a symbol of 
                  TRON's robust ecosystem, mirroring its technological prowess and community spirit. 
                  Built on the foundation of TRON's mission for financial freedom.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <ScrollReveal variant="pop" delay={0.4}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-red-500/20">
                      <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <h3 className="font-bold text-white">Strength</h3>
                      <p className="text-sm text-white/70">Built on TRON's power</p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal variant="pop" delay={0.6}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-red-500/20">
                      <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h3 className="font-bold text-white">Resilience</h3>
                      <p className="text-sm text-white/70">Unbreakable spirit</p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal variant="pop" delay={0.8}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-red-500/20">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <h3 className="font-bold text-white">Community</h3>
                      <p className="text-sm text-white/70">Stronger together</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            <ScrollReveal variant="slide-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/image.png"
                    alt="sTRONg Visual 1"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl border-4 border-red-500/30 hover:border-red-400 transition-all duration-300"
                  />
                  <Image
                    src="/images/image copy 2.png"
                    alt="sTRONg Visual 2"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl border-4 border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/images/image copy 3.png"
                    alt="sTRONg Visual 3"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl border-4 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300"
                  />
                  <Image
                    src="/images/image copy 4.png"
                    alt="sTRONg Visual 4"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-2xl border-4 border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
