"use client";
/**
 * SectionNav - Vertical, collapsible sidebar navigation (Anime.js + Vanilla CSS)
 * Responsive/collapsible, no Tailwind. Improved collapsed state.
 */
import React, { useState, useMemo } from "react"; // Added useMemo
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from 'next/script'; // Import Script component for JSON-LD

const sections = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/story", label: "The Myth", icon: "🌀" },
  { path: "/truths", label: "Truths", icon: "🌌" },
  { path: "/fractal-vision", label: "Fractal Vision", icon: "🧬" },
  { path: "/mission-log", label: "Mission Log", icon: "📝" },
  { path: "/offerings", label: "Offerings", icon: "🌱" },
  { path: "/downloads", label: "Downloads", icon: "🎥" },
  { path: "/tech-beliefs", label: "Tech Beliefs", icon: "🤖" },
  { path: "/identity/prince-jona", label: "Avatars", icon: "🌞" },
];

const sidebarWidth = 200;
const collapsedWidth = 60;

// Helper function to generate breadcrumbs
// Define the type for breadcrumb items, allowing 'item' to be optional
type BreadcrumbItem = {
  "@type": "ListItem";
  position: number;
  name: string;
  item?: string; // Make item optional
};

// Helper function to generate breadcrumbs
const generateBreadcrumbs = (pathname: string, sections: { path: string; label: string }[]): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbItems: BreadcrumbItem[] = [{ // Use the defined type
    "@type": "ListItem",
    "position": 1,
    "name": "Home", // Always start with Home
    "item": "https://princejona.com/"
  }];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    // Find a matching label from sections or generate one
    // More robust matching might be needed for dynamic routes like /identity/[slug]
    const sectionMatch = sections.find(s => s.path === currentPath);
    // Simple capitalization for segment name if no match found
    const name = sectionMatch ? sectionMatch.label : segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');

    // Don't add the current page itself as a link in breadcrumbs
    const item = (index === pathSegments.length - 1) ? undefined : `https://princejona.com${currentPath}`;

    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2, // Start from position 2
      "name": name,
      ...(item && { "item": item }) // Only add item URL if it's not the last segment
    });
  });

  // Handle cases where the root path '/' is accessed directly
  if (breadcrumbItems.length === 1 && pathname === '/') {
     // Optionally remove the item property for the root if it shouldn't be linked
     // delete breadcrumbItems[0].item;
  }

  return breadcrumbItems;
};

const SectionNav: React.FC = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  // Generate breadcrumb schema using useMemo
  const breadcrumbSchema = useMemo(() => {
    // Exclude root path from breadcrumbs if it's the only item
    if (pathname === '/') return null;

    const itemListElement = generateBreadcrumbs(pathname, sections);
    // Only generate schema if there's more than just the 'Home' link
    if (itemListElement.length <= 1) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement,
    };
  }, [pathname]); // Recalculate when pathname changes

  return (
    <> {/* Wrap in fragment to include Script tag */}
      {/* Inject Breadcrumb Schema */}
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <nav
        aria-label="Section Navigation"
        style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: open ? sidebarWidth : collapsedWidth,
        background: "linear-gradient(180deg,#21142c 75%,#19152b 100%)",
        boxShadow: "2px 0 16px #0004",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 24,
        transition: "width 0.25s cubic-bezier(.77,0,.18,1)",
        overflowX: "hidden",
      }}
    >
      <button
        aria-label={open ? "Collapse navigation" : "Expand navigation"}
        onClick={() => setOpen((v) => !v)}
        style={{
          marginLeft: 0,
          marginBottom: 28,
          background: "none",
          border: "none",
          color: "#ccc",
          fontSize: 26,
          width: 40,
          height: 40,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        tabIndex={0}
      >
        {open ? "❮" : "❯"}
      </button>
      <div style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {sections.map(({ path, label, icon }) => {
          const selected =
            pathname === path ||
            (path.startsWith("/identity") && pathname.startsWith("/identity"));
          return (
            <Link key={path} href={path} style={{ textDecoration: "none", width: "100%" }}>
              <div
                tabIndex={0}
                aria-current={selected ? "page" : undefined}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: open ? "flex-start" : "center",
                  gap: open ? 14 : 0,
                  padding: open ? "12px 18px" : "12px 0",
                  borderRadius: open ? "1rem 0 0 1rem" : "50%",
                  margin: open ? "0 0 2px 0" : "0 auto 2px auto",
                  background: selected
                    ? open
                      ? "rgba(255,255,255,0.10)"
                      : "rgba(255,255,255,0.13)"
                    : "transparent",
                  color: selected ? "#fff" : "#c7b8e0",
                  fontWeight: selected ? 700 : 500,
                  fontSize: open ? 18 : 0,
                  minHeight: 48,
                  minWidth: open ? "unset" : 48,
                  width: open ? "100%" : 48,
                  boxShadow: selected && !open ? "0 0 0 2px #a78bfa" : undefined,
                  cursor: "pointer",
                  transition:
                    "background 0.2s, color 0.2s, box-shadow 0.2s, border-radius 0.2s",
                  outline: "none",
                }}
              >
                {/* Active indicator: bar (open) or dot (collapsed) */}
                {selected && (
                  open ? (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: 4,
                        background: "#a78bfa",
                        borderRadius: "0 6px 6px 0",
                        transition: "all 0.3s",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        position: "absolute",
                        left: "50%", // Center horizontally
                        top: "50%",
                        transform: "translate(-50%, -50%)", // Adjust for centering
                        width: 8,
                        height: 8,
                        background: "#a78bfa",
                        borderRadius: "50%",
                        transition: "all 0.3s",
                      }}
                    />
                  )
                )}
                <span
                  style={{
                    fontSize: open ? 23 : 28,
                    zIndex: 1,
                    marginLeft: open ? 0 : 0,
                    marginRight: open ? 0 : 0,
                    transition: "font-size 0.2s",
                  }}
                >
                  {icon}
                </span>
                {open && (
                  <span
                    style={{
                      zIndex: 1,
                      marginLeft: 2,
                      fontSize: 16,
                      whiteSpace: "nowrap",
                      opacity: 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
   </> // Add closing fragment tag
  );
};

export default SectionNav;
