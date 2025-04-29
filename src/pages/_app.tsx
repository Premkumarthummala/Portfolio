import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });
  }, []);
  return <Component {...pageProps} />;
}
