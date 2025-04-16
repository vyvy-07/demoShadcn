import type { AppProps } from 'next/app';
import './globals.css'; // <-- dòng này là BẮT BUỘC với Pages Router

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
