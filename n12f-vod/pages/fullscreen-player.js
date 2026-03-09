import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function FullscreenPlayer({ videoUrl }) {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 1920, height: 1080, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #fb42b2' }}>
        <VideoPlayer src={videoUrl} />
      </div>
    </div>
  );
}

FullscreenPlayer.getInitialProps = async (ctx) => {
  // For demo, use the same video as player.js
  return {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
};
