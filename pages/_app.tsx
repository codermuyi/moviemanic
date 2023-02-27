import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'simplebar-react/dist/simplebar.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
