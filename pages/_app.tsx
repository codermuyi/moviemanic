import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import '@/styles/nprogress.css'
import NProgress from 'nprogress';
import { ToastContainer } from 'react-toastify'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import PageLayout from '@components/PageLayout';

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [supabase] = useState(() => createBrowserSupabaseClient())

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', () => NProgress.start());
      router.events.off('routeChangeComplete', () => NProgress.done());
      router.events.off('routeChangeError', () => NProgress.done());
    }
  }, [router]);

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <PageLayout key={router.asPath}>
        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          hideProgressBar={true}
        />
        <Component {...pageProps} />
      </PageLayout>
    </SessionContextProvider>
  )
}
