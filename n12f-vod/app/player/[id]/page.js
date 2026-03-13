import Player from './PlayerClient'; // The functional component we just made
import { videos } from '../../data/videos'; // Sample video data

export default async function Page({ params }) {
    const { id } = await params;
    console.log('Received video ID:', id);
    const videoId = parseInt(id, 10) || 1;

    const currentVideo = videos.find((v) => v.id === videoId) || videos[0];
    const relatedVideos = videos.filter((v) => v.id !== videoId);

    // 3. Pass the data as simple props to the 'Client' component
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {/* Next.js 15 Optimization: You'd ideally use <Image /> here */}
                <img src="/assets/logo.png" alt="Logo" style={{ height: '500px' }} />
            </div>
            <Player
                videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                videoTitle={currentVideo.title}
                fact={currentVideo.fact}
                relatedVideos={relatedVideos}
                id={videoId}
            />
        </>
    );
}