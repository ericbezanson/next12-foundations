export default function Head() {
    // TODO: Setup a dynamic Title on the player page (Ex: "Playing: [Video Title] - CAGE Video")
    return (
        <>
            {/* Legacy: Preload a font or add a meta tag */}
            <title>CAGE Video</title>
            <link rel="preload" href="/fonts/legacy-font.woff2" as="font" crossOrigin="" />
            <meta name="theme-color" content="#fb42b2" />
        </>
    )
}