import { JetBrains_Mono } from "next/font/google";
import BuiltSection from "@/components/sections/BuiltSection";
import ClientWorkSection from "@/components/sections/ClientWorkSection";
import ConnectSection from "@/components/sections/ConnectSection";
import HeroSection from "@/components/sections/HeroSection";
import HireMeSection from "@/components/sections/HireMeSection";
import IntervisedSection from "@/components/sections/IntervisedSection";
import StackSection from "@/components/sections/StackSection";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${jetBrainsMono.variable} portfolio-home`}>
      <HeroSection />
      <BuiltSection />
      <ClientWorkSection />
      <StackSection />
      <IntervisedSection />
      <HireMeSection />
      <ConnectSection />
    </main>
  );
}
