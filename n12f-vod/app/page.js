import styles from './Home.module.css';
import VideoGridClient from './components/VideoGridClient/VideoGridClient';
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
            ? `${process.env.TMDB_IMAGE_URL}${movie.poster_path}`
            : `${process.env.FALLBACK_IMAGE_URL}`, // fallback if no poster
    }));
    const popularCageFilms = withPoster.sort((a, b) => b.vote_count - a.vote_count);
    return (
        <>
            <div className={styles.banner}>
                <img src="/assets/logo.png" alt="Logo" className={styles.bannerLogo} />
            </div>
            <div className={styles.container}>
                <div>
                    <Suspense fallback={<div>Loading videos...</div>}>
                        <VideoGridClient videos={popularCageFilms} />
                    </Suspense>
                </div>
            </div>
        </>

    )
}