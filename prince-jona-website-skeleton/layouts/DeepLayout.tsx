
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEEP_NAV_LINKS } from '../constants';

const DeepLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-deep-bg text-deep-text font-serif selection:bg-accent-gold selection:text-deep-bg">
      <Navbar navLinks={DEEP_NAV_LINKS} isSurface={false} />
      <main className="pt-20 px-4 md:px-8">
        {children}
      </main>
      <Footer isSurface={false} />
    </div>
  );
};

export default DeepLayout;
