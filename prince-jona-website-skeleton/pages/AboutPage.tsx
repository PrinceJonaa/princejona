
import React from 'react';
import { GlyphLink } from '../components/GlyphLink';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12">About</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <img 
            src="https://picsum.photos/400/600" 
            alt="Prince Jona" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-2/3">
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              This is a placeholder bio for Prince Jona. It describes the artistic and philosophical journey, touching on themes of symbolism, reality, and human connection.
            </p>
            <div>
              <h3 className="text-2xl font-bold text-accent-emerald mb-2">Prince Jona</h3>
              <p>The artistic vessel. Through music, video, and writing, Prince Jona explores the symbolic landscape of our shared reality.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent-gold mb-2">Intervised</h3>
              <p>The professional entity. Intervised is the vehicle for client work, consulting, and building practical applications from abstract ideas. For business inquiries, visit intervised.com.</p>
            </div>
            <p>
              These two streams flow from the same source, one exploring the inner world, the other engaging with the outer.
            </p>
             <div className="pt-4 flex items-center gap-6">
                <Link to="/contact" className="px-6 py-2 border border-gray-600 text-surface-text font-bold rounded-md hover:bg-gray-800 transition-colors">
                    Get In Touch
                </Link>
                <GlyphLink isSurface={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
