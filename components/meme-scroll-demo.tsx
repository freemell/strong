"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SimpleWallpaper } from "@/components/simple-wallpaper";
import Image from "next/image";
import { Heart, Star, Zap, Sparkles } from "lucide-react";

export function MemeScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1200px] relative">
      <SimpleWallpaper />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white drop-shadow-lg relative z-10">
              Welcome to the Ultimate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                MEME ZONE
              </span>
            </h1>
            <div className="flex justify-center items-center mt-8 space-x-4 relative z-10">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              <Star className="w-8 h-8 text-blue-400 animate-spin" />
              <Zap className="w-8 h-8 text-purple-300 animate-bounce" />
            </div>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full relative z-10">
          <div className="relative group">
            <Image
              src="/images/photo_6014879459716483834_x.jpg"
              alt="Meme 1"
              height={400}
              width={600}
              className="rounded-2xl object-cover h-full w-full transition-transform group-hover:scale-105 duration-300"
              draggable={false}
            />
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white p-3 rounded-xl backdrop-blur-sm">
              <p className="text-sm font-bold">When you realize it's Monday 😂</p>
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/images/photo_6017114135495559110_x.jpg"
              alt="Meme 2"
              height={400}
              width={600}
              className="rounded-2xl object-cover h-full w-full transition-transform group-hover:scale-105 duration-300"
              draggable={false}
            />
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white p-3 rounded-xl backdrop-blur-sm">
              <p className="text-sm font-bold">That feeling when... 🤔</p>
            </div>
          </div>
        </div>
      </ContainerScroll>
      
      {/* Second scroll section */}
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl font-semibold text-white drop-shadow-lg relative z-10">
              More Epic Content <br />
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                COMING AT YOU
              </span>
            </h2>
          </>
        }
      >
        <div className="relative h-full group">
          <Image
            src="/images/photo_6017114135495559109_x.jpg"
            alt="Epic Meme"
            height={600}
            width={800}
            className="mx-auto rounded-2xl object-cover h-full w-full transition-transform group-hover:scale-105 duration-500"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 text-white relative z-10">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">The Ultimate Vibe Check</h3>
            <p className="text-lg opacity-90 flex items-center gap-2">
              When everything just clicks 
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            </p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
