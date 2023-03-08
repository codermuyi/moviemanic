import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'simplebar-react/dist/simplebar.min.css';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress';
import '@/styles/nprogress.css'

// NProgress.configure({ showSpinner: false }); 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, [router]);

  return <Component key={router.asPath} {...pageProps} />
}
