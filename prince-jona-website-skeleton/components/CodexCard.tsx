
import React from 'react';
import { Link } from 'react-router-dom';
import type { Codex } from '../types';

interface CodexCardProps {
  codex: Codex;
}

const CodexCard: React.FC<CodexCardProps> = ({ codex }) => {
  return (
    <Link 
        to={`/library/${codex.slug}`} 
        className="block p-6 bg-deep-bg border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:border-accent-gold transition-all duration-300 ease-in-out group"
    >
      <h3 className="text-xl font-bold text-deep-text group-hover:text-accent-gold transition-colors">
        {codex.title}
      </h3>
      <p className="mt-2 text-gray-600 font-sans">
        {codex.description}
      </p>
    </Link>
  );
};

export default CodexCard;
