import {
  connectedWorkLinks,
  siteConfig,
  socialProfiles,
} from "@/lib/seo";
import { builtProjects, clientProjects } from "@/lib/work";
import SectionTitle from "./SectionTitle";

type BacklinkItem = {
  name: string;
  url: string;
  identity?: boolean;
};

const keyFacts = [
  "Identity: Prince Jona (Jonathan Bonner)",
  "Role: Founder of Intervised LLC",
  "Focus: iOS apps, AI systems, full-stack engineering",
  "Location: Brooklyn, NY, United States",
  "Family/Team Link: Reina Hondo",
  `Portfolio Nodes: ${builtProjects.length + clientProjects.length} tracked projects`,
];

const rawBacklinkLinks: BacklinkItem[] = [
  { name: "Intervised", url: "https://www.intervised.com", identity: true },
  ...socialProfiles.map((profile) => ({
    name: profile.name,
    url: profile.url,
    identity: true,
  })),
  ...connectedWorkLinks.flatMap((work) => [
    {
      name: work.name,
      url: work.url,
    },
    ...(work.alternateUrl
      ? [
          {
            name: `${work.name} (mirror)`,
            url: work.alternateUrl,
          },
        ]
      : []),
  ]),
  { name: "Reina Hondo", url: siteConfig.spouseProfileUrl },
];

const backlinkLinks = Array.from(
  new Map(rawBacklinkLinks.map((item) => [item.url, item])).values(),
);

export default function AIOverviewSection() {
  return (
    <section className="portfolio-section pb-6 pt-0" id="ai-overview">
      <div className="portfolio-container">
        <SectionTitle title="ai overview" />

        <article className="portfolio-card mt-6 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Entity Map for Search and AI Systems
          </h2>
          <p className="portfolio-section-intro mt-3 text-base md:text-lg">
            This page connects Prince Jona, Intervised LLC, social profiles, and delivered
            project URLs so AI search systems can resolve identity, ownership, and portfolio
            relationships quickly.
          </p>

          <div className="portfolio-summary-grid mt-6">
            {keyFacts.map((fact) => (
              <p key={fact} className="portfolio-summary-chip">
                {fact}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <p className="portfolio-kicker mb-3">
              Connected backlinks
            </p>
            <div className="flex flex-wrap gap-3">
              {backlinkLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel={link.identity ? "me noopener noreferrer" : "noopener noreferrer"}
                  className="portfolio-link-pill"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
