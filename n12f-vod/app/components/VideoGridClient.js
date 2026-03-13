'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const VideoGrid = ({ videos }) => {
    return (
        <>
            <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', marginTop: '2rem' }}>
                {videos.map(card => (
                    <div key={card.id} className={styles.card} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

                        {/* Legacy next/link usage */}
                        <Link href={`/player?id=${card.id}`} style={{ width: 300 }}>
                            <h2
                                style={{
                                    width: '300px',
                                    height: '3.2em', // fixed height for two lines
                                    color: '#fff',
                                    fontSize: '1.5rem',
                                    margin: '0 0 0.5rem 0',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    background: 'transparent',
                                    paddingLeft: '4px',
                                    letterSpacing: '1px',
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                    whiteSpace: 'normal',
                                    textOverflow: 'ellipsis',
                                    wordBreak: 'break-word',
                                    lineHeight: '1.6em',
                                }}
                                title={card.title}
                            >
                                {card.title}
                            </h2>
                            {/* [Migration Challenge 4 - Update legacy next/image usage to new Image component and config] */}
                            {/* Legacy next/image */}
                            <Image src={card.poster} alt="Nicolas Cage" width={300} height={450} style={{ borderRadius: '8px' }} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default VideoGrid;