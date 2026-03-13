// [Migration Challenge 10 - Update class component with legacy lifecycle to function component with hooks]
// [Migration Challenge 8 - Update global CSS import in page to global CSS import in layout.js/_app.js only]
// [Migration Challenge 1 - Update getInitialProps to getServerSideProps/getStaticProps/React Server Components]

'use client'; // this directive is mandatory for interactivity in NextJS 15

import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import styles from '../styles/Player.module.css';
import dynamic from 'next/dynamic';

// Dynamically import RelatedVideos with SSR off
const RelatedVideos = dynamic(() => import('../components/RelatedVideos'), { ssr: false });

// Modern apparoach 
const Player = ({videoUrl, videoTitle, fact, relatedVideos, id}) => {
  const videoRef = React.useRef(null);
  const handleChapterClick = (chapterIdx) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const percent = (chapterIdx + 1) * 0.1;
      video.currentTime = video.duration * percent;
    }
  }
  // Line 3: The 'render()' method is gone. We just 'return' the JSX.
  return (
    <div style={{ padding: '2rem' }}>
      
      <h1 style={{ textAlign: 'center', color: '#fb42b2', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        {videoTitle}
      </h1>

      <div className={styles.playerContainer}>
        <div className={styles.descriptionBox}>
          <div className={styles.descriptionHeader} style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2' }}>
            Video Description
          </div>
          <div>{fact}</div>
        </div>

        <div className={styles.videoBox}>
          <div className={styles.videoPlayerBorder}>
            {/* Pass the hook ref instead of this.videoRef */}
            <VideoPlayer src={videoUrl} videoRef={videoRef} />
          </div>
        </div>

        <div className={styles.chaptersBox}>
          <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2', textAlign: 'center' }}>
            Chapters
          </div>
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className={styles.chapter}
              tabIndex={0}
              // Simplified: No 'this' needed for the click handler
              onClick={() => handleChapterClick(idx)}
              onKeyPress={e => { if (e.key === 'Enter') handleChapterClick(idx); }}
            >
              {`Chapter ${idx + 1}`}
            </div>
          ))}
        </div>
      </div>

      <RelatedVideos currentId={id} />

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold', fontSize: '2rem' }}>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Player;
