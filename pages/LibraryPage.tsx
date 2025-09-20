
import React from 'react';
import { codices } from '../content/codices';
import CodexCard from '../components/CodexCard';

const LibraryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Codex Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {codices.map((codex) => (
          <CodexCard key={codex.slug} codex={codex} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
