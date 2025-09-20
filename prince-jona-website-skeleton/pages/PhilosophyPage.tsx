
import React from 'react';
import { Link } from 'react-router-dom';
import { GlyphIcon } from '../constants';

const PhilosophyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 max-w-3xl text-center">
      <div className="flex justify-center mb-8">
        <GlyphIcon className="w-16 h-16 text-deep-text" />
      </div>
      <h1 className="text-4xl font-bold mb-6">The Philosophy</h1>
      <div className="prose prose-lg max-w-none text-left mx-auto text-deep-text font-serif space-y-4">
        <p>
            This is an introduction to a worldview. A framework for understanding the interplay of perception, reality, and symbolism. It's a map, not the territory. It's a lens, not the light.
        </p>
        <p>
            What follows is a library of codices—distilled concepts and mental models designed to navigate the complexities of existence. They are tools for thought, offered to those who seek a deeper understanding of the self and the world.
        </p>
        <p>
            Enter with an open mind. Question everything. Find what resonates and discard what does not. The path is your own.
        </p>
      </div>
      <div className="mt-12 flex justify-center gap-6">
        <Link 
            to="/library"
            className="px-8 py-3 bg-deep-text text-deep-bg font-sans font-bold rounded-md hover:bg-gray-800 transition-colors"
        >
            Enter Codex Library
        </Link>
        <a 
            href="#"
            className="px-8 py-3 border border-gray-400 text-deep-text font-sans font-bold rounded-md hover:bg-gray-200 transition-colors"
        >
            YouTube Channel
        </a>
      </div>
    </div>
  );
};

export default PhilosophyPage;
