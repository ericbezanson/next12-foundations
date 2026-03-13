import Player from './PlayerClient'; // The functional component we just made

export default async function Page({ params }) {
    const { id } = await params;
    console.log('Received video ID:', id);
    const videoId = parseInt(id, 10) || 1;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${videoId}?api_key=${process.env.TMDB_API_KEY}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    });

    const movieDetails = await res.json();
    console.log('Fetched movie details:', movieDetails);

    // 3. Pass the data as simple props to the 'Client' component
    return (
        <>
           <div style={{ width: '100%', height: 150, background: '#fb42b2', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <img src="/assets/logo.png" alt="Logo" style={{ height: 150 }} />
            </div>
            <Player
                videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                videoTitle={movieDetails.original_title || 'Unknown Title'}
                fact={movieDetails.overview || 'No description available.'}
                id={videoId}
            />
        </>
    );
}``