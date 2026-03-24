export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
  isPrivate?: boolean;
  badge?: string;
  category: "built" | "client";
  projectType: "source-code" | "application" | "website" | "organization" | "creative-work";
}

export const builtProjects: ReadonlyArray<PortfolioProject> = [
  {
    id: "the-arc",
    name: "The-Arc",
    description: "Native iOS 26 app — actively shipping, hottest repo this week",
    stack: ["Swift 6", "iOS 26", "Xcode"],
    href: "https://github.com/PrinceJonaa/The-Arc",
    category: "built",
    projectType: "source-code",
  },
  {
    id: "mirror-os",
    name: "Mirror-OS",
    description: "Phenomenological truth engine — AI that reasons relationally",
    stack: ["Python", "AI"],
    href: "https://github.com/PrinceJonaa/Mirror-OS",
    category: "built",
    projectType: "source-code",
  },
  {
    id: "statefulrepl",
    name: "StatefulREPL",
    description: "AI REPL with persistent memory across sessions",
    stack: ["Python", "AI Systems"],
    href: "https://github.com/PrinceJonaa/StatefulREPL",
    category: "built",
    projectType: "source-code",
  },
  {
    id: "web-novel-reader",
    name: "Web Novel Reader",
    description: "Offline-first iOS story library with save-for-later",
    stack: ["Swift", "SwiftUI", "iOS"],
    href: "https://princejonaa.github.io/Web-Novel-Reader/",
    category: "built",
    projectType: "application",
  },
  {
    id: "elite-mind-glasses",
    name: "elite-mind-glasses",
    description: "On-device AI that helps you see any situation through elite decision frameworks",
    stack: ["TypeScript", "On-device AI"],
    isPrivate: true,
    category: "built",
    projectType: "creative-work",
  },
  {
    id: "vibecloud",
    name: "VibeCloud",
    description: "Music × mood cloud sync IOS Music App— presence-aware audio",
    stack: ["Swift", "SwiftUI"],
    isPrivate: true,
    category: "built",
    projectType: "creative-work",
  },
] as const;

export const clientProjects: ReadonlyArray<PortfolioProject> = [
  {
    id: "intervised",
    name: "Intervised LLC",
    description: "Creative & technology studio — iOS apps, AI systems, experiential web",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://www.intervised.com",
    category: "client",
    projectType: "organization",
  },
  {
    id: "heartz4sale",
    name: "heartz4sale.com",
    description:
      "Official artist website for HBKREVENGE — visuals, show updates, booking flows, and merch entry points.",
    stack: ["React", "Vite", "SEO", "Structured Data"],
    href: "https://heartz4sale.com",
    category: "client",
    projectType: "website",
  },
  {
    id: "hondo-school-of-sounds",
    name: "Hondo School of Sounds",
    description:
      "Private & group music lessons for kids and adults — piano, violin, viola, flute, percussion. Package-based booking.",
    stack: ["Next.js", "Vercel"],
    href: "https://hondoschoolofsounds.com",
    category: "client",
    projectType: "website",
  },
  {
    id: "coeurdesire",
    name: "CoeurDesire",
    description: "Spiritual coaching & blessings platform",
    stack: ["Next.js", "TypeScript"],
    href: "https://coeur-desire.vercel.app",
    category: "client",
    projectType: "website",
  },
  {
    id: "music-mirror",
    name: "music-mirror",
    description: "Interactive music experience — presence meets sound",
    stack: ["HTML", "CSS", "JS"],
    href: "https://music-mirror-six.vercel.app",
    category: "client",
    projectType: "website",
  },
  {
    id: "shades",
    name: "SHADES",
    description:
      "Official website for SHADES — an NYC live collective blending R&B, soul, and multicultural grooves.",
    stack: ["Next.js", "TypeScript"],
    href: "https://shadesmusicofficial.com",
    category: "client",
    projectType: "website",
  },
] as const;
