import type { Metadata } from "next";
import type { PortfolioProject } from "./work";
import { builtProjects, clientProjects } from "./work";

interface SocialProfile {
  id: string;
  name: string;
  url: string;
  handle: string;
  description: string;
  embedUrl?: string;
}

interface ConnectedWorkLink {
  id: string;
  name: string;
  url: string;
  description: string;
  schemaType: "AboutPage" | "WebSite";
  alternateUrl?: string;
}

export const socialProfiles: ReadonlyArray<SocialProfile> = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/princejonaa/",
    handle: "@princejonaa",
    description:
      "Visual content, short-form video, and creator updates from Prince Jona.",
    embedUrl: "https://www.instagram.com/princejonaa/embed",
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    url: "https://soundcloud.com/princejona",
    handle: "@princejona",
    description: "Audio releases and music catalog for Prince Jona.",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/76057630&visual=true&show_artwork=true",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@princejonaofficial",
    handle: "@princejonaofficial",
    description: "Short-form videos and creator profile for Prince Jona.",
    embedUrl: "https://www.tiktok.com/embed/@princejonaofficial",
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/artist/4oLxy1WTGaWi2D5bCwRkzP",
    handle: "Artist",
    description: "Official Spotify artist profile for Prince Jona.",
    embedUrl:
      "https://open.spotify.com/embed/artist/4oLxy1WTGaWi2D5bCwRkzP?utm_source=generator",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/PrinceJonaa",
    handle: "@PrinceJonaa",
    description: "Open-source repositories and engineering work by Prince Jona.",
  },
] as const;

export const connectedWorkLinks: ReadonlyArray<ConnectedWorkLink> = [
  {
    id: "intervised-team",
    name: "Intervised Team",
    url: "https://www.intervised.com/team",
    description:
      "Intervised team profile and leadership context connected to Prince Jona.",
    schemaType: "AboutPage",
  },
  {
    id: "heartz4sale",
    name: "heartz4sale.com",
    url: "https://heartz4sale.com",
    description:
      "Official artist website for hbkrevenge completed by Prince Jona and Intervised.",
    schemaType: "WebSite",
  },
  {
    id: "shades",
    name: "SHADES",
    url: "https://shadesmusicofficial.com",
    description:
      "Official website for SHADES, an NYC live collective blending R&B, soul, and multicultural grooves.",
    schemaType: "WebSite",
  },
] as const;

export const siteConfig = {
  name: "Prince Jona",
  legalName: "Prince Jona (Jonathan Bonner)",
  companyName: "Intervised LLC",
  companySlogan: "Broadcast Outward",
  url: "https://www.princejona.com",
  description:
    "Prince Jona is an iOS Developer, AI Systems Builder, Full-Stack Engineer, and founder of Intervised LLC in Brooklyn, NY.",
  locale: "en_US",
  ogImagePath: "/og.png",
  xHandle: "@PrinceJonaa",
  email: "jona@intervised.com",
  location: "Brooklyn, NY, United States",
  foundedYear: "2021",
  spouseName: "Reina Hondo",
  spouseProfileUrl: "https://hondoschoolofsounds.com/bio",
  sameAs: [
    "https://github.com/PrinceJonaa",
    "https://www.instagram.com/princejonaa/",
    "https://soundcloud.com/princejona",
    "https://www.tiktok.com/@princejonaofficial",
    "https://open.spotify.com/artist/4oLxy1WTGaWi2D5bCwRkzP",
    "https://www.intervised.com",
    "https://www.intervised.com/team",
  ],
};

const siteUrl = siteConfig.url;
const personId = `${siteUrl}/#person`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const contactPointId = `${siteUrl}/#contact-point`;
const spouseId = `${siteUrl}/#reina-hondo`;
const hondoSchoolId = `${siteUrl}/#hondo-school`;
const profileListId = `${siteUrl}/#connected-profiles`;
const workListId = `${siteUrl}/#connected-work`;
const builtProjectListId = `${siteUrl}/#built-projects`;
const clientProjectListId = `${siteUrl}/#client-projects`;

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path === "/") return siteUrl;
  return `${siteUrl}${path}`;
}

function defaultOgImage(title: string) {
  return {
    url: toAbsoluteUrl(siteConfig.ogImagePath),
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — ${title}`,
  };
}

function getProfilePageId(profileId: string) {
  return `${siteUrl}/#profile-${profileId}`;
}

function getWorkPageId(workId: string) {
  return `${siteUrl}/#work-${workId}`;
}

function getProjectNodeId(projectId: string) {
  return `${siteUrl}/#project-${projectId}`;
}

function projectCreator(project: PortfolioProject) {
  return project.category === "client"
    ? [{ "@id": personId }, { "@id": organizationId }]
    : { "@id": personId };
}

function normalizeProgrammingLanguages(stack: string[]) {
  const languageMap: Record<string, string> = {
    swift: "Swift",
    swiftui: "Swift",
    python: "Python",
    typescript: "TypeScript",
    javascript: "JavaScript",
    js: "JavaScript",
    ts: "TypeScript",
    html: "HTML",
    css: "CSS",
  };
  const normalized = new Set<string>();
  const languageEntries = Object.entries(languageMap);

  stack.forEach((value) => {
    const key = value.toLowerCase().trim();

    // Exact match (e.g., "python")
    if (languageMap[key]) normalized.add(languageMap[key]);

    // Prefix match for versioned labels (e.g., "swift 6", "typescript 5")
    languageEntries.forEach(([languageKey, canonicalLanguage]) => {
      if (key.startsWith(`${languageKey} `)) normalized.add(canonicalLanguage);
    });

    // Token match for compound labels (e.g., "HTML/CSS", "React + TypeScript")
    key
      .split(/[^a-z]+/g)
      .filter(Boolean)
      .forEach((token) => {
        if (languageMap[token]) normalized.add(languageMap[token]);
      });
  });

  return Array.from(normalized);
}

function toProjectJsonLdNode(project: PortfolioProject) {
  const baseThing = {
    "@id": getProjectNodeId(project.id),
    name: project.name,
    description: project.description,
    url: project.href ?? siteUrl,
  };

  const creativeWorkBase = {
    ...baseThing,
    creator: projectCreator(project),
    keywords: project.stack,
    inLanguage: "en-US",
    isPartOf: {
      "@id": websiteId,
    },
  };
  const detectedLanguages = normalizeProgrammingLanguages(project.stack);

  if (project.projectType === "source-code") {
    return {
      "@type": "SoftwareSourceCode",
      ...creativeWorkBase,
      ...(project.href ? { codeRepository: project.href } : {}),
      ...(detectedLanguages.length > 0
        ? { programmingLanguage: detectedLanguages }
        : {}),
      runtimePlatform: "Cross-platform",
    };
  }

  if (project.projectType === "application") {
    const isIosProject = project.stack.some((value) => value.toLowerCase().includes("ios"));

    return {
      "@type": "SoftwareApplication",
      ...creativeWorkBase,
      applicationCategory: "DeveloperApplication",
      operatingSystem: isIosProject ? "iOS" : "Cross-platform",
      ...(project.href ? { downloadUrl: project.href } : {}),
    };
  }

  if (project.projectType === "organization") {
    return {
      "@type": "Organization",
      ...baseThing,
      url: project.href ?? "https://www.intervised.com",
      sameAs: ["https://www.intervised.com/team"],
      founder: {
        "@id": personId,
      },
      member: [{ "@id": personId }, { "@id": spouseId }],
      contactPoint: {
        "@id": contactPointId,
      },
    };
  }

  if (project.projectType === "website") {
    return {
      "@type": "WebSite",
      ...creativeWorkBase,
      publisher: project.category === "client" ? { "@id": organizationId } : { "@id": personId },
    };
  }

  return {
    "@type": "CreativeWork",
    ...creativeWorkBase,
    ...(project.isPrivate ? { isAccessibleForFree: false } : {}),
  };
}

export function getVerificationMetadata():
  | Metadata["verification"]
  | undefined {
  const google =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
    process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;

  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const absolute = toAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: absolute,
    },
    openGraph: {
      title,
      description,
      url: absolute,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [defaultOgImage(title)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.xHandle,
      creator: siteConfig.xHandle,
      images: [toAbsoluteUrl(siteConfig.ogImagePath)],
    },
    other: {
      "twitter:url": absolute,
    },
  };
}

export function getSiteGraphJsonLd() {
  const allPortfolioProjects = [...builtProjects, ...clientProjects];

  const profileNodes = socialProfiles.map((profile) => ({
    "@type": "ProfilePage",
    "@id": getProfilePageId(profile.id),
    url: profile.url,
    name: `${siteConfig.name} on ${profile.name}`,
    description: profile.description,
    isPartOf: {
      "@id": websiteId,
    },
    mainEntity: {
      "@id": personId,
    },
    about: {
      "@id": personId,
    },
    sameAs: [profile.url],
  }));

  const workNodes = connectedWorkLinks.map((work) => ({
    "@type": work.schemaType,
    "@id": getWorkPageId(work.id),
    url: work.url,
    name: work.name,
    description: work.description,
    isPartOf: {
      "@id": websiteId,
    },
    about:
      work.id === "intervised-team"
        ? [{ "@id": personId }, { "@id": spouseId }, { "@id": organizationId }]
        : [{ "@id": personId }, { "@id": organizationId }],
    ...(work.alternateUrl ? { sameAs: [work.alternateUrl] } : {}),
  }));

  const portfolioProjectNodes = allPortfolioProjects.map((project) =>
    toProjectJsonLdNode(project),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteUrl,
        image: toAbsoluteUrl(siteConfig.ogImagePath),
        email: `mailto:${siteConfig.email}`,
        jobTitle: [
          "iOS Developer",
          "AI Systems Builder",
          "Full-Stack Engineer",
          "Founder",
          "Music Artist",
        ],
        knowsAbout: [
          "iOS Development",
          "AI Systems",
          "Full-Stack Engineering",
          "Swift",
          "Next.js",
          "TypeScript",
          "Schema.org structured data",
          "Brand and digital product development",
        ],
        homeLocation: {
          "@type": "Place",
          name: siteConfig.location,
        },
        contactPoint: {
          "@id": contactPointId,
        },
        mainEntityOfPage: {
          "@id": `${siteUrl}/#profilepage-home`,
        },
        hasOccupation: [
          { "@type": "Occupation", name: "iOS Developer" },
          { "@type": "Occupation", name: "AI Systems Builder" },
          { "@type": "Occupation", name: "Full-Stack Engineer" },
          { "@type": "Occupation", name: "Founder" },
          { "@type": "Occupation", name: "Music Artist" },
        ],
        knowsLanguage: ["en-US"],
        worksFor: {
          "@id": organizationId,
        },
        memberOf: {
          "@id": organizationId,
        },
        owns: {
          "@id": organizationId,
        },
        spouse: {
          "@id": spouseId,
        },
        subjectOf: [
          ...socialProfiles.map((profile) => ({ "@id": getProfilePageId(profile.id) })),
          ...connectedWorkLinks.map((work) => ({ "@id": getWorkPageId(work.id) })),
        ],
        sameAs: siteConfig.sameAs,
      },
      {
        "@type": "Person",
        "@id": spouseId,
        name: siteConfig.spouseName,
        url: siteConfig.spouseProfileUrl,
        spouse: {
          "@id": personId,
        },
        mainEntityOfPage: siteConfig.spouseProfileUrl,
        subjectOf: [{ "@id": hondoSchoolId }, { "@id": organizationId }],
        worksFor: {
          "@id": hondoSchoolId,
        },
        affiliation: {
          "@id": organizationId,
        },
        sameAs: [
          "https://hondoschoolofsounds.com/",
          "https://www.tiktok.com/@challenges_inlife",
        ],
      },
      {
        "@type": "MusicSchool",
        "@id": hondoSchoolId,
        name: "Hondo School of Sounds",
        url: "https://hondoschoolofsounds.com/",
        founder: {
          "@id": spouseId,
        },
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.companyName,
        slogan: siteConfig.companySlogan,
        url: "https://www.intervised.com",
        foundingDate: siteConfig.foundedYear,
        founder: {
          "@id": personId,
        },
        member: [{ "@id": personId }, { "@id": spouseId }],
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512x512.png`,
        },
        location: {
          "@type": "Place",
          name: "New York, NY, United States",
        },
        contactPoint: {
          "@id": contactPointId,
        },
        makesOffer: {
          "@id": `${siteUrl}/#intervised-services`,
        },
        subjectOf: [
          { "@id": getWorkPageId("intervised-team") },
          { "@id": `${siteUrl}/#heartz4sale-project` },
        ],
        sameAs: ["https://www.intervised.com", "https://www.intervised.com/team"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#intervised-services`,
        name: siteConfig.companyName,
        url: "https://www.intervised.com/services",
        provider: {
          "@id": organizationId,
        },
        description:
          "Creative and technology services including iOS development, AI integrations, full-stack engineering, and digital brand systems.",
        areaServed: [
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Intervised Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "iOS App Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Systems Integration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full-Stack Web Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand and Digital Strategy",
              },
            },
          ],
        },
      },
      {
        "@type": "ContactPoint",
        "@id": contactPointId,
        contactType: "business inquiries",
        email: `mailto:${siteConfig.email}`,
        url: `${siteUrl}/#connect`,
        availableLanguage: ["en"],
        areaServed: [
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: {
          "@id": organizationId,
        },
        about: [{ "@id": personId }, { "@id": organizationId }],
        sameAs: siteConfig.sameAs,
        mentions: [
          { "@id": spouseId },
          { "@id": `${siteUrl}/#heartz4sale-project` },
        ],
        hasPart: [
          { "@id": profileListId },
          { "@id": workListId },
          { "@id": builtProjectListId },
          { "@id": clientProjectListId },
        ],
      },
      {
        "@type": "ItemList",
        "@id": profileListId,
        name: "Prince Jona Social Profiles",
        numberOfItems: socialProfiles.length,
        itemListElement: socialProfiles.map((profile, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": getProfilePageId(profile.id),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": workListId,
        name: "Connected Project and Team Pages",
        numberOfItems: connectedWorkLinks.length,
        itemListElement: connectedWorkLinks.map((work, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": getWorkPageId(work.id),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": builtProjectListId,
        name: "Projects Built by Prince Jona",
        numberOfItems: builtProjects.length,
        itemListElement: builtProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": getProjectNodeId(project.id),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": clientProjectListId,
        name: "Client Projects Delivered by Prince Jona",
        numberOfItems: clientProjects.length,
        itemListElement: clientProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": getProjectNodeId(project.id),
          },
        })),
      },
      {
        "@type": "CreativeWork",
        "@id": `${siteUrl}/#heartz4sale-project`,
        name: "heartz4sale.com Artist Website",
        url: "https://heartz4sale.com",
        creator: [{ "@id": personId }, { "@id": organizationId }],
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@type": "MusicGroup",
          name: "HBKREVENGE",
        },
      },
      ...profileNodes,
      ...workNodes,
      ...portfolioProjectNodes,
    ],
  };
}

export function getHomeAiOverviewJsonLd() {
  const totalProjects = builtProjects.length + clientProjects.length;
  const featuredProjects = [
    builtProjects[0]?.name,
    builtProjects[1]?.name,
    clientProjects[1]?.name,
  ].filter((projectName): projectName is string => Boolean(projectName));
  const featuredProjectsText =
    featuredProjects.length > 0 ? featuredProjects.join(", ") : "The-Arc and heartz4sale.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage-home`,
        url: siteUrl,
        name: "Prince Jona Portfolio",
        description:
          "Connected portfolio overview linking Prince Jona, Intervised LLC, social profiles, and deployed work.",
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
        about: [
          { "@id": organizationId },
          { "@id": `${siteUrl}/#intervised-services` },
          { "@id": `${siteUrl}/#heartz4sale-project` },
        ],
        hasPart: [
          { "@id": profileListId },
          { "@id": workListId },
          { "@id": builtProjectListId },
          { "@id": clientProjectListId },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumbs-home`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq-home`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Prince Jona?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prince Jona is an iOS Developer, AI Systems Builder, Full-Stack Engineer, music artist, and founder of Intervised LLC in Brooklyn, New York.",
            },
          },
          {
            "@type": "Question",
            name: "What does Intervised LLC do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Intervised LLC is a creative and technology studio focused on iOS apps, AI systems, full-stack products, and brand experiences.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Prince Jona's official profiles and connected work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Official profiles include Instagram, TikTok, SoundCloud, Spotify, and GitHub. Connected work and team context include www.intervised.com/team and heartz4sale.com.",
            },
          },
          {
            "@type": "Question",
            name: "What work has Prince Jona shipped?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `The connected portfolio currently maps ${totalProjects} built and client projects, including ${featuredProjectsText}.`,
            },
          },
        ],
      },
    ],
  };
}

interface WebPageJsonLdInput {
  title: string;
  description: string;
  path: string;
  pageType: "ProfilePage" | "AboutPage" | "CollectionPage" | "WebPage";
}

export function getWebPageJsonLd({
  title,
  description,
  path,
  pageType,
}: WebPageJsonLdInput) {
  const absolute = toAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${absolute}#webpage`,
    url: absolute,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": websiteId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(siteConfig.ogImagePath),
    },
    about: [{ "@id": personId }, { "@id": organizationId }],
    ...(pageType === "ProfilePage" ? { mainEntity: { "@id": personId } } : {}),
  };
}
