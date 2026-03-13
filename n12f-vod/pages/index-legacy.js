// [Migration Challenge 3 - Update dynamic import with SSR off to client/server component split]
import dynamic from 'next/dynamic';

const VideoGrid = dynamic(() => import('../components/VideoGrid'), { ssr: false });

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Cage VOD</title>
        <meta name="description" content="Nicolas Cage Video On Demand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Banner */}
      <div style={{ width: '100%', height: '400px', background: '#fb42b2', paddingBottom: '2rem', marginBottom: '0' }}>
        <nav style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem 0', borderBottom: 'none', background: 'transparent' }}>
          <a href="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none', color: '#fff', marginLeft: '1rem' }}>Home</a>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
          <img src="/assets/logo.png" alt="Logo" style={{ width: '150%', height: '120%', objectFit: 'contain', marginBottom: '0' }} />
        </div>
      </div>

      <main className={styles.main}>
        <p className={styles.description}>
          Enjoy a curated selection of Nicolas Cage facts and videos. Click any card to watch!
        </p>
        <VideoGrid />
      </main>
    </div>
  );
}
