
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GlyphIcon } from '../constants';

interface NavLinkItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navLinks: NavLinkItem[];
  isSurface: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, isSurface }) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
  const bgClasses = isSurface ? "bg-surface-bg/80 backdrop-blur-sm" : "bg-deep-bg/80 backdrop-blur-sm";
  const textClasses = isSurface ? "text-surface-text" : "text-deep-text";
  const accentClasses = isSurface ? "hover:text-accent-emerald" : "hover:text-accent-gold";
  const activeLinkClass = isSurface ? "text-accent-emerald" : "text-accent-gold";

  return (
    <header className={`${baseClasses} ${bgClasses} ${textClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-xl font-bold tracking-wider ${accentClasses}`}>
              PRINCE JONA
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${accentClasses} ${isActive ? activeLinkClass : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/philosophy" title="Enter the Library">
              <GlyphIcon className={`w-5 h-5 transition-colors duration-200 ${accentClasses}`} />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${accentClasses} ${isActive ? activeLinkClass : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <Link to="/philosophy" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${accentClasses}`}>
              <GlyphIcon className="w-5 h-5" />
              <span>Library</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
