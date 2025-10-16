import { SimpleWallpaper } from "@/components/simple-wallpaper";
import { BuyButton } from "@/components/ui/buy-button";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MarketSection } from "@/components/sections/market-section";
import { ContractSection } from "@/components/sections/contract-section";
import { CommunitySection } from "@/components/sections/community-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Wallpaper */}
      <SimpleWallpaper />
      
      {/* Floating Buy Button */}
      <BuyButton />
      
      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <MarketSection />
      <ContractSection />
      <CommunitySection />
      <FooterSection />
    </main>
  );
}
