import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'simplebar-react/dist/simplebar.min.css';
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <Component key={router.asPath} {...pageProps} />
}
