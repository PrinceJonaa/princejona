
import React from 'react';

interface VideoEmbedProps {
  videoId: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 my-6">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
