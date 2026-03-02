import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AIOverviewSection from "@/components/sections/AIOverviewSection";
import BuiltSection from "@/components/sections/BuiltSection";
import ClientWorkSection from "@/components/sections/ClientWorkSection";
import ConnectSection from "@/components/sections/ConnectSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import HeroSection from "@/components/sections/HeroSection";
import HireMeSection from "@/components/sections/HireMeSection";
import IntervisedSection from "@/components/sections/IntervisedSection";
import StackSection from "@/components/sections/StackSection";
import {
  buildPageMetadata,
  getHomeAiOverviewJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";

const homeDescription =
  "Prince Jona portfolio: iOS apps, AI systems, client deployments, and connected social/work presence across Intervised, GitHub, TikTok, Spotify, Instagram, and SoundCloud.";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio",
  description: homeDescription,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          title: "Prince Jona Portfolio",
          description: homeDescription,
          path: "/",
          pageType: "ProfilePage",
        })}
      />
      <JsonLd data={getHomeAiOverviewJsonLd()} />
      <main className="portfolio-home">
        <HeroSection />
        <AIOverviewSection />
        <EcosystemSection />
        <BuiltSection />
        <ClientWorkSection />
        <StackSection />
        <IntervisedSection />
        <HireMeSection />
        <ConnectSection />
      </main>
    </>
  );
}
