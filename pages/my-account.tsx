import styled from 'styled-components';
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Meta from '@/src/atoms/Meta';
import Button from '@/src/atoms/Button'
import RouteGuard from '@/src/RouteGuard';
import FirstScreen from '@/src/AccountPage/FirstScreen';
import UserInfo from 'src/AccountPage/UserInfo'

import routes from 'src/variables/routes'
import { myFetch } from '@/assets/utilities';

export default function Dashboard() {
  const router = useRouter()
  const session = useSession()
  const supabase = useSupabaseClient()
  const [filmList, setFilmList] = useState<any>([])
  const { data: profile } = useSWR('/api/profile-details', myFetch)
  const { data: categories } = useSWR('/api/categories', myFetch)
  console.log(categories)

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

  console.log('Film list: ', filmList)

  return (
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        <FirstScreen
          profile={profile}
        />
        {
          session && <UserInfo
            user={session.user}
            profile={profile}
            filmList={filmList}
            categories={categories}
          />
        }
        
        <Button
          padding='.5rem'
          margin='.5rem'
          onClick={signOut}
        >
          Sign Out
        </Button>
      </RouteGuard>
    </>
  )
}
