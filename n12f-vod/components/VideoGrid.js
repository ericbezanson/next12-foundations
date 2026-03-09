// [Migration Challenge 9 - Update old Link and Router APIs to new navigation APIs]

import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Legacy next/link
import Router from 'next/router'; // Legacy next/router

export default function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/related-videos?id=0')
      .then(res => res.json())
      .then(data => {
        setVideos(data.relatedVideos || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fb42b2', textAlign: 'center', fontSize: '1.5rem' }}>Loading videos...</div>;

  const handleWatchNow = (id) => {
    Router.push(`/fullscreen-player?id=${id}`); // Legacy navigation API to fullscreen player
  };

  return (
    <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
      {videos.map(card => (
        <div key={card.id} className={styles.card} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <h2 style={{ width: '100%', color: '#fff', fontSize: '2.25rem', margin: '0 0 0.5rem 0', textAlign: 'left', fontWeight: 'bold', background: 'transparent', paddingLeft: '4px', letterSpacing: '1px' }}>Course: {card.title}</h2>
          {/* [Migration Challenge 4 - Update legacy next/image usage to new Image component and config] */}
          {/* Legacy next/image */}
          <Image src="https://placecage.lucidinternets.com/800/450" alt="Nicolas Cage" width={800} height={450} style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
          <p style={{ marginTop: '1rem' }}>{card.fact}</p>
          {/* Legacy next/link usage */}
          <Link href={`/player?id=${card.id}`}>
            <div
              style={{ background: '#fb42b2', borderRadius: 16, padding: 16, marginTop: 16, width: '100%', textAlign: 'center', cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              onClick={e => { e.preventDefault(); window.location.href = `/player?id=${card.id}`; }}
              onKeyPress={e => { if (e.key === 'Enter') { window.location.href = `/player?id=${card.id}`; } }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>Go to Movie</div>
              <div style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 8 }}>Uses legacy next/link for navigation</div>
            </div>
          </Link>
          {/* Legacy Router.push usage */}
          <div
            style={{ background: '#fb42b2', borderRadius: 16, padding: 16, marginTop: 16, width: '100%', textAlign: 'center', cursor: 'pointer' }}
            tabIndex={0}
            role="button"
            onClick={() => handleWatchNow(card.id)}
            onKeyPress={e => { if (e.key === 'Enter') handleWatchNow(card.id); }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>Watch Now</div>
            <div style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 8 }}>Uses legacy next/router Router.push for navigation to fullscreen player</div>
          </div>
        </div>
      ))}
    </div>
  );
}
