import SectionTitle from "./SectionTitle";

const links = [
  { label: "GitHub", href: "https://github.com/PrinceJonaa" },
  { label: "Twitter/X", href: "https://twitter.com/PrinceJonaa" },
  { label: "Intervised", href: "https://intervised.com" },
  { label: "Email", href: "mailto:jona@intervised.com" },
];

export default function ConnectSection() {
  return (
    <footer className="portfolio-section pb-14 pt-8">
      <div className="portfolio-container border-t border-white/10 pt-10">
        <SectionTitle title="find me" />
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link-pill"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="portfolio-muted mt-8 text-sm">
          © 2026 Prince Jona · Intervised LLC · Brooklyn, NY
        </p>
      </div>
    </footer>
  );
}
