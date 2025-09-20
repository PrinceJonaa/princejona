
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PhilosophyPage from './pages/PhilosophyPage';
import LibraryPage from './pages/LibraryPage';
import CodexPage from './pages/CodexPage';
import SurfaceLayout from './layouts/SurfaceLayout';
import DeepLayout from './layouts/DeepLayout'

const AppContent: React.FC = () => {
  const location = useLocation();
  const isDeepPath = location.pathname.startsWith('/philosophy') || location.pathname.startsWith('/library');

  const Layout = isDeepPath ? DeepLayout : SurfaceLayout;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:slug" element={<CodexPage />} />
      </Routes>
    </Layout>
  );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
