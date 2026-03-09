// Custom _app.js
import '../styles/globals.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('Global app mounted');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp
