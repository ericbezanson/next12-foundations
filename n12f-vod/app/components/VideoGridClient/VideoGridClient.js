'use client'

import Image from 'next/image';
import styles from './VideoGridClient.module.css';
import Link from 'next/link';
import { Suspense } from 'react';

const VideoGrid = ({ videos }) => {
    return (
        <>
            <div className={styles.grid}>
                {videos.map(card => (
                    <div key={card.id} className={styles.card}>
                        <Link href={`/player/${card.id}`} className={styles.videoLink}>
                            <h2 className={styles.videoTitle} title={card.title}>
                                {card.title}
                            </h2>
                            <Image src={card.poster} alt="Nicolas Cage" width={300} height={450} className={styles.videoImage} />
                        </Link>
                    </div>
                ))}
            </div>

        </>
    )
}

export default VideoGrid;