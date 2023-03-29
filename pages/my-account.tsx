import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Meta from '@/src/atoms/Meta';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import PageLayout from '@/src/Layout/PageLayout';
import Button from '@/src/atoms/Button'
// import Loader from '@/src/atoms/Loader'
import routes from 'src/variables/routes'

import RouteGuard from '@/src/RouteGuard';

export default function Dashboard() {
  const router = useRouter()

  const session = useSession()
  const supabase = useSupabaseClient()

  const signOut = () => {
    supabase.auth.signOut()
    router.push(routes.SIGN_IN)
  }

  useEffect(() => {
    const getData = async () => {
      //   let { data, error, status } = await supabase
      //     .from('profiles')
      //     .select(`username`)
      //   console.log(data)
    }

    getData()
  }, []);

  return (
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        <h1 style={{ padding: '1rem' }}>Bookmarks</h1>
        <p>User email: {session?.user.email}</p>
        <form>
          <Button
            padding='.5rem'
            margin='.5rem'
            onClick={signOut}
          >
            Sign Out
          </Button>
        </form>
      </RouteGuard>
    </>
  )
}

