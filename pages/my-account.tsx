import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@/src/atoms/Meta';
import Button from '@/src/atoms/Button'
import RouteGuard from '@/src/RouteGuard';
import GetStarted from '@/src/AccountPage/GetStarted';
import UserInfo from 'src/AccountPage/UserInfo'

import routes from 'src/variables/routes'
import { myFetch } from '@/assets/utilities';

export default function AccountPage() {
  const router = useRouter()
  const session = useSession()
  const supabase = useSupabaseClient()
  const { data: profile } = useSWR('/api/profile-details', myFetch)
  const [filmList, setFilmList] = useState<any>([])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push(routes.SIGN_IN)
  }

  useEffect(() => {
    const getData = async () => {
      if (session) {
        let { data, error, status } = await supabase
          .from('film_list')
          .select()

        setFilmList(data)
      }
    }
    getData()

  }, [session, supabase]);

  return (
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        {
          !profile?.[0]?.username ?
            /* Display if username does not exists */
            <GetStarted
              profile={profile}
              session={session}
            />
            : <>
              <UserInfo
                profile={profile}
                session={session}
                filmList={filmList}
              />
              <Button
                padding='.5rem'
                margin='.5rem'
                onClick={signOut}
              >
                Sign Out
              </Button>
            </>
        }
      </RouteGuard>
    </>
  )
}
