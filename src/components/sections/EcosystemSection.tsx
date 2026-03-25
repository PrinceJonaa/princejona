import {
  connectedWorkLinks,
  siteConfig,
  socialProfiles,
} from "@/lib/seo";
import SectionTitle from "./SectionTitle";

type EcosystemEntry = {
  id: string;
  name: string;
  url: string;
  alternateUrl?: string;
  description: string;
  handle?: string;
  embedUrl?: string;
  embedHeight?: number;
  identity?: boolean;
  category: "Social" | "Company" | "Project" | "Partner";
};

const socialEntries: EcosystemEntry[] = socialProfiles.map((profile) => ({
  id: profile.id,
  name: profile.name,
  url: profile.url,
  description: profile.description,
  handle: profile.handle,
  embedUrl: profile.embedUrl,
  identity: true,
  embedHeight:
    profile.id === "spotify"
      ? 352
      : profile.id === "soundcloud"
        ? 450
        : profile.id === "tiktok"
          ? 560
          : 520,
  category: "Social",
}));

const workEntries: EcosystemEntry[] = [
  {
    id: "intervised",
    name: "Intervised LLC",
    url: "https://www.intervised.com",
    description:
      "Creative and technology studio founded by Prince Jona. Core hub for services and execution.",
    identity: true,
    category: "Company",
  },
  ...connectedWorkLinks.map((work) => ({
    id: work.id,
    name: work.name,
    url: work.url,
    alternateUrl: work.alternateUrl,
    description: work.description,
    category: "Project" as const,
  })),
  {
    id: "reina-hondo",
    name: "Reina Hondo",
    url: siteConfig.spouseProfileUrl,
    description:
      "Founder profile at Hondo School of Sounds. Connected family and creative ecosystem relation.",
    category: "Partner",
  },
];

const ecosystemEntries: EcosystemEntry[] = [...workEntries, ...socialEntries];

export default function EcosystemSection() {
  return (
    <section className="portfolio-section" id="ecosystem">
      <div className="portfolio-container">
        <SectionTitle title="connected ecosystem" />
        <p className="portfolio-section-intro mt-4 text-base md:text-lg">
          Every profile and project below is linked as an official node in the site graph to
          strengthen discoverability, ownership clarity, and backlink consistency.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {ecosystemEntries.map((entry) => (
            <article key={entry.id} className="portfolio-card flex h-full flex-col p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="portfolio-kicker">
                    {entry.category}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold leading-tight text-white">
                    {entry.name}
                  </h3>
                  {entry.handle ? (
                    <p className="portfolio-muted mt-1 text-sm">{entry.handle}</p>
                  ) : null}
                </div>
              </div>

              <p className="portfolio-muted text-base leading-relaxed">{entry.description}</p>

              {entry.embedUrl ? (
                <div className="portfolio-embed-shell mt-5">
                  <iframe
                    title={`${entry.name} embed`}
                    src={entry.embedUrl}
                    className="portfolio-embed-frame"
                    style={{ height: `${entry.embedHeight ?? 420}px` }}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : (
                <div className="portfolio-embed-shell mt-5">
                  <p className="portfolio-muted px-4 py-5 text-sm">
                    Embedded view is not available for this provider. The direct backlink below is
                    the canonical source.
                  </p>
                </div>
              )}

              <div className="mt-5">
                <a
                  href={entry.url}
                  target="_blank"
                  rel={entry.identity ? "me noopener noreferrer" : "noopener noreferrer"}
                  className="portfolio-btn"
                >
                  Open Link
                </a>
                {entry.alternateUrl ? (
                  <a
                    href={entry.alternateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn portfolio-btn-secondary mt-3"
                  >
                    Open Mirror
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
