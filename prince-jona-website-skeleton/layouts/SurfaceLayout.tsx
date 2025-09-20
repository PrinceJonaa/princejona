
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SURFACE_NAV_LINKS } from '../constants';

const SurfaceLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface-bg text-surface-text font-sans selection:bg-accent-emerald selection:text-surface-bg">
      <Navbar navLinks={SURFACE_NAV_LINKS} isSurface={true} />
      <main className="pt-20 px-4 md:px-8">
        {children}
      </main>
      <Footer isSurface={true} />
    </div>
  );
};

export default SurfaceLayout;
