import SectionTitle from "./SectionTitle";
import type { SkillRowData } from "./types";

const skillRows: SkillRowData[] = [
  {
    label: "iOS · Mobile",
    iconIds: "swift,xcode,dart,flutter",
    iconUrl: "https://skillicons.dev/icons?i=swift,xcode,dart,flutter&theme=dark",
    iconWidth: 304,
    iconHeight: 48,
  },
  {
    label: "Web · Frontend",
    iconIds: "ts,js,react,nextjs,html,css,tailwind",
    iconUrl: "https://skillicons.dev/icons?i=ts,js,react,nextjs,html,css,tailwind&theme=dark",
    iconWidth: 528,
    iconHeight: 48,
  },
  {
    label: "Backend · AI · Infra",
    iconIds: "py,nodejs,cpp,docker,aws,gcp,vercel,git,github,vscode",
    iconUrl:
      "https://skillicons.dev/icons?i=py,nodejs,cpp,docker,aws,gcp,vercel,git,github,vscode&theme=dark",
    iconWidth: 752,
    iconHeight: 48,
  },
];

export default function StackSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="stack" />
        <div className="mt-6 grid gap-4">
          {skillRows.map((row) => (
            <article key={row.label} className="portfolio-stack-row">
              <h3 className="portfolio-stack-label">{row.label}</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={row.iconUrl}
                alt={`${row.label} skill icons`}
                className="portfolio-stack-icons"
                loading="lazy"
                decoding="async"
                width={row.iconWidth}
                height={row.iconHeight}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
