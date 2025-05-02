import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });
  }, []);
  return (
    <>
      <Head>
        <title>Prem Kumar Thummala | BI & Analytics Portfolio</title>
        <meta name="description" content="Portfolio of Prem Kumar Thummala - Business Intelligence & Analytics. Showcasing Power BI, Python, SQL, Data Visualization, and more." />
        <meta property="og:title" content="Prem Kumar Thummala Portfolio" />
        <meta property="og:description" content="Business Intelligence & Analytics Portfolio" />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
