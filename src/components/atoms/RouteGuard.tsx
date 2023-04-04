import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@supabase/auth-helpers-react';

import Loader from '@atoms/Loader'
import { routes } from '@constants'

export default function RouteGuard({ children }: any) {
  const router = useRouter()
  const session = useSession()
  const [authorized, setAuthorized] = useState(false)

  const hideContent = () => setAuthorized(false)
  const showContent = () => setAuthorized(true)

  useEffect(() => {
    authCheck(router.asPath);
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeComplete', authCheck);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  function authCheck(url: string) {
    const privatePaths = [routes.ACCOUNT, routes.WATCHLIST, routes.DETAILS, routes.SECURITY];
    const privateWhenLoggedIn = [routes.SIGN_IN, routes.SIGN_UP, routes.HOME]
    const path = url.split('?')[0];

    if (privatePaths.includes(path)) {
      // If user is signed in
      if (session) {
        showContent()
      } else {
        hideContent()
        router.push({
          pathname: routes.SIGN_IN,
          query: { returnUrl: router.asPath }
        })
      }
    } else if (privateWhenLoggedIn.includes(path)) {
      if (session) {
        hideContent()
        router.push(routes.ACCOUNT)
      } else {
        showContent()
      }
    } else {
      showContent()
    }
  }

  return authorized ? children : <Loader paddingBlock='10rem' />
}
