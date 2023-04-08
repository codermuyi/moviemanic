import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next';
import { routes } from './constants';

export async function routeGuard(
  ctx: GetServerSidePropsContext,
  privateWhenLoggedIn?: boolean,
  redirect?: string,
  data?: any,
) {
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session && privateWhenLoggedIn) {
    return {
      redirect: {
        destination: redirect ?? routes.ACCOUNT,
        permanent: false,
      },
    }
  }
  else if (!session && privateWhenLoggedIn) {
    return {
      props: {
        profile: {
          message: null
        }
      }
    }
  }
  else if (!session)
    return {
      redirect: {
        destination: redirect ?? routes.SIGN_IN,
        permanent: false,
      },
    }

  const { data: profile } = await supabase
    .from('profiles')
    .select('username')

  return {
    props: {
      initialSession: session,
      user: session.user,
      profile: profile,
      data: data ?? null,
    },
  }
}
