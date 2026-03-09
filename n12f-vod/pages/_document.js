// [Migration Challenge 2 - Update custom _document.js to app directory layouts/template.js]
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Legacy: Preload a font or add a meta tag */}
          <link rel="preload" href="/fonts/legacy-font.woff2" as="font" crossOrigin="" />
          <meta name="theme-color" content="#fb42b2" />
        </Head>
        <body style={{ background: '#222', color: '#fff' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
