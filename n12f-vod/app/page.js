import Head from 'next/head';
import styles from '../styles/Home.module.css';
import VideoGridClient from './components/VideoGridClient';
import { Suspense } from 'react';

export default async function Home() {
    const res = await fetch(`https://api.themoviedb.org/3/person/2963/movie_credits?api_key=${process.env.TMDB_API_KEY}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    });

    const credits = await res.json();
    const withPoster = credits.cast.map(movie => ({
        ...movie,
        poster: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '/fallback-image.jpg', // fallback if no poster
    }));
    const popularCageFilms = withPoster.sort((a, b) => b.vote_count - a.vote_count);
    return (
        <>
            <div style={{ width: '100%', height: 300, background: '#fb42b2', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <img src="/assets/logo.png" alt="Logo" style={{ height: 300 }} />
            </div>
            <div className={styles.container}>
                <Head>
                    <title>Nicolas Cage VOD</title>
                    <meta name="description" content="Nicolas Cage Video On Demand" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <Suspense fallback={<div>Loading videos...</div>}>
                        <VideoGridClient videos={popularCageFilms} />
                    </Suspense>
                </div>
            </div>
        </>

    )
}