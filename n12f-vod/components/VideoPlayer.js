import React from 'react';

export default function VideoPlayer({ src, videoRef }) {
  return (
    <video
      ref={videoRef}
      width="1280"
      height="720"
      controls
      autoPlay
      style={{ borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
