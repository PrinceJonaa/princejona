import SectionTitle from "./SectionTitle";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/princejonaa/",
    identity: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@princejonaofficial",
    identity: true,
  },
  { label: "SoundCloud", href: "https://soundcloud.com/princejona", identity: true },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/4oLxy1WTGaWi2D5bCwRkzP",
    identity: true,
  },
  { label: "GitHub", href: "https://github.com/PrinceJonaa", identity: true },
  { label: "Intervised Team", href: "https://www.intervised.com/team" },
  { label: "Intervised", href: "https://www.intervised.com", identity: true },
  { label: "heartz4sale", href: "https://heartz4sale.vercel.app/" },
  { label: "heartz4sale (Domain)", href: "https://heartz4sale.com" },
  { label: "Reina Hondo", href: "https://hondoschoolofsounds.vercel.app/bio" },
  { label: "Email", href: "mailto:jona@intervised.com" },
];

export default function ConnectSection() {
  return (
    <footer className="portfolio-section pb-14 pt-8" id="connect">
      <div className="portfolio-container border-t border-white/10 pt-10">
        <SectionTitle title="find me" />
        <p className="portfolio-section-intro mt-4 text-base">
          Official profile links, company pages, and direct contact.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : link.identity
                    ? "me noopener noreferrer"
                    : "noopener noreferrer"
              }
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
