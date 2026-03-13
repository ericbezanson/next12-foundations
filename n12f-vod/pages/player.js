// [Migration Challenge 10 - Update class component with legacy lifecycle to function component with hooks]
// [Migration Challenge 8 - Update global CSS import in page to global CSS import in layout.js/_app.js only]
// [Migration Challenge 1 - Update getInitialProps to getServerSideProps/getStaticProps/React Server Components]

import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import styles from '../styles/Player.module.css';
import dynamic from 'next/dynamic';

// Dynamically import RelatedVideos with SSR off
const RelatedVideos = dynamic(() => import('../components/RelatedVideos'), { ssr: false });

// Legacy getInitialProps for SSR/data hydration

class Player extends React.Component {
  static async getInitialProps(ctx) {
    const { id } = ctx.query;
    const videoId = parseInt(id, 10) || 1;
    // Fetch all videos from the API route
    const baseUrl = ctx.req
      ? `${ctx.req.headers['x-forwarded-proto'] || 'http'}://${ctx.req.headers.host}`
      : '';
    const res = await fetch(baseUrl + '/api/related-videos?id=0');
    const data = await res.json();
    const allVideos = [{
      id: 1,
      title: 'National Treasure',
      fact: 'Nicolas Cage once bought a castle in Germany, showing his love for unique real estate. He has owned several eccentric properties, including haunted mansions and private islands. Cage is known for his extravagant spending habits, which have become legendary in Hollywood. Despite financial troubles, he continues to pursue bold investments. His passion for architecture is matched only by his passion for acting.',
    }, ...data.relatedVideos];
    const currentVideo = allVideos.find(v => v.id === videoId) || allVideos[0];
    const relatedVideos = allVideos.filter(v => v.id !== videoId);
    return {
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      videoTitle: currentVideo.title,
      fact: currentVideo.fact,
      relatedVideos,
      id: videoId,
    };
  }

  videoRef = React.createRef();

  handleChapterClick = (chapterIdx) => {
    const video = this.videoRef.current;
    if (video && video.duration) {
      const percent = (chapterIdx + 1) * 0.1;
      video.currentTime = video.duration * percent;
    }
  };

  render() {
    const { videoUrl, videoTitle, fact, id } = this.props;
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src="/assets/logo.png" alt="Nicolas Cage Logo" style={{ height: '500px' }} />
        </div>
        <h1 style={{ textAlign: 'center', color: '#fb42b2', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{videoTitle}</h1>
        <div className={styles.playerContainer}>
          <div className={styles.descriptionBox}>
            <div className={styles.descriptionHeader} style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2' }}>Video Description</div>
            <div>{fact}</div>
          </div>
          <div className={styles.videoBox}>
            <div className={styles.videoPlayerBorder}>
              <VideoPlayer src={videoUrl} videoRef={this.videoRef} />
            </div>
          </div>
          <div className={styles.chaptersBox}>
            <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2', textAlign: 'center' }}>Chapters</div>
            {Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                className={styles.chapter}
                tabIndex={0}
                onClick={() => this.handleChapterClick(idx)}
                onKeyPress={e => { if (e.key === 'Enter') this.handleChapterClick(idx); }}
              >
                {`Chapter ${idx + 1}`}
              </div>
            ))}
          </div>
        </div>
        <RelatedVideos currentId={id} />
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'underline',
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
}

export default Player;
