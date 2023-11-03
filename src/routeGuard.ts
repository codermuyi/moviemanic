import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'

import { routesV1 } from './constants'

import { myFetch } from '@/assets/utilities'

export async function routeGuard(
  ctx: GetServerSidePropsContext,
  privateWhenLoggedIn?: boolean,
  dataFetchUrl = '',
  redirect?: string,
) {
  const supabase = createServerSupabaseClient(ctx)
  let data = null

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session && privateWhenLoggedIn) {
    return {
      redirect: {
        destination: redirect ?? routesV1.ACCOUNT,
        permanent: false,
      },
    }
  } else if (!session && privateWhenLoggedIn) {
    // Only fetch data when page is not redirected
    if (dataFetchUrl) data = await myFetch(dataFetchUrl)

    return {
      props: {
        profile: null,
        data: data,
      },
    }
  } else if (!session)
    return {
      redirect: {
        destination: redirect ?? routesV1.SIGN_IN,
        permanent: false,
      },
    }

  const { data: profile } = await supabase.from('profiles').select('*')

  if (dataFetchUrl) data = await myFetch(dataFetchUrl)

  return {
    props: {
      initialSession: session,
      user: session.user,
      profile: profile?.[0] ?? null,
      data: data,
    },
  }
}
