import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BuiltSection from "@/components/sections/BuiltSection";
import ClientWorkSection from "@/components/sections/ClientWorkSection";
import ConnectSection from "@/components/sections/ConnectSection";
import HeroSection from "@/components/sections/HeroSection";
import HireMeSection from "@/components/sections/HireMeSection";
import IntervisedSection from "@/components/sections/IntervisedSection";
import StackSection from "@/components/sections/StackSection";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";

const homeDescription =
  "Prince Jona portfolio: iOS apps, AI systems, and client deployments from Intervised LLC in Brooklyn, NY.";

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
      <main className="portfolio-home">
        <HeroSection />
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
