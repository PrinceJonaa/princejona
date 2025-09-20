
import React from 'react';
import VideoEmbed from '../components/VideoEmbed';

const SocialCard: React.FC<{ platform: string }> = ({ platform }) => (
    <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">{platform} Post</p>
    </div>
);


const WorksPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Works</h1>
      
      {/* Music Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-accent-emerald pl-4">Music</h2>
        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="text-center text-gray-400">Spotify / Apple Music Playlist Embed Placeholder</p>
          <div className="mt-4 h-64 bg-gray-800 rounded"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-accent-gold pl-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoEmbed videoId="dQw4w9WgXcQ" />
            <VideoEmbed videoId="xvFZjo5PgG0" />
        </div>
      </section>

      {/* Social Feed Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Socials</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <SocialCard platform="TikTok" />
            <SocialCard platform="Instagram" />
            <SocialCard platform="Twitter" />
            <SocialCard platform="YouTube" />
            <SocialCard platform="Threads" />
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
