import type { AppProps } from 'next/app';
import './globals.css';
import TanstackProviders from './providers';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TanstackProviders>
      <Component {...pageProps} />
    </TanstackProviders>
  );
}
