import type { Metadata } from "next";

export const siteConfig = {
  name: "Prince Jona",
  legalName: "Prince Jona (Jonathan Bonner)",
  companyName: "Intervised LLC",
  companySlogan: "Broadcast Outward",
  url: "https://princejona.com",
  description:
    "Prince Jona is an iOS Developer, AI Systems Builder, Full-Stack Engineer, and founder of Intervised LLC in Brooklyn, NY.",
  locale: "en_US",
  ogImagePath: "/og.png",
  xHandle: "@PrinceJonaa",
  email: "jona@intervised.com",
  location: "Brooklyn, NY, United States",
  foundedYear: "2021",
  sameAs: [
    "https://github.com/PrinceJonaa",
    "https://twitter.com/PrinceJonaa",
    "https://intervised.com",
  ],
};

const siteUrl = siteConfig.url;

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
  };
}

export function getSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteUrl,
        email: `mailto:${siteConfig.email}`,
        jobTitle: [
          "iOS Developer",
          "AI Systems Builder",
          "Full-Stack Engineer",
          "Founder",
        ],
        knowsAbout: [
          "iOS Development",
          "AI Systems",
          "Full-Stack Engineering",
          "Swift",
          "Next.js",
          "TypeScript",
        ],
        homeLocation: {
          "@type": "Place",
          name: siteConfig.location,
        },
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
        sameAs: siteConfig.sameAs,
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.companyName,
        slogan: siteConfig.companySlogan,
        url: "https://intervised.com",
        foundingDate: siteConfig.foundedYear,
        founder: {
          "@id": `${siteUrl}/#person`,
        },
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512x512.png`,
        },
        location: {
          "@type": "Place",
          name: "New York, NY, United States",
        },
        sameAs: ["https://intervised.com"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
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
      "@id": `${siteUrl}/#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(siteConfig.ogImagePath),
    },
    about: [
      { "@id": `${siteUrl}/#person` },
      { "@id": `${siteUrl}/#organization` },
    ],
  };
}
