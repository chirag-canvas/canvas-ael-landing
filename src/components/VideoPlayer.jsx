import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/lion-king.mp4"
        poster="/images/video-poster.jpg"
        controls
        autoPlay
        playsInline
      />
    </div>
  );
};

export default VideoPlayer; 