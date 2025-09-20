
import React from 'react';

export const SURFACE_NAV_LINKS = [
  { name: 'Works', href: '/works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const DEEP_NAV_LINKS = [
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Codex Library', href: '/library' },
];

export const GlyphIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
