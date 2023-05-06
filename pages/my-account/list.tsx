/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSidePropsContext } from 'next'

import Meta from '@atoms/Meta'
import UserFilmList from '@layouts/AccountPage/UserFilmList'
import Loader from '@atoms/Loader'
import Layout from '@layouts/AccountPage/Layout'
import CheckForUsername from '@atoms/CheckForUsername'
import { routeGuard } from '@/src/routeGuard'
import { Profile } from '@/src/types'

const MyListPage = ({ profile }: { profile: Profile }) => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [filmList, setFilmList] = useState(null)
  // Random number to refetch data whenever a film is deleted from the list
  const [randomNum, setRandomNum] = useState(Math.random())

  useEffect(() => {
    const getData = async () => {
      if (session) {
        const { data } = await supabase.from('film_list').select()
        // @ts-ignore
        setFilmList(data)
      }
    }
    getData()
  }, [session, supabase, randomNum])

  return (
    <>
      <Meta title="My Watchlist | Moviemanic" />
      <CheckForUsername profile={profile}>
        <Layout>
          {filmList ? (
            <UserFilmList filmList={filmList} setRandomNum={setRandomNum} />
          ) : (
            <Loader paddingBlock="10rem" />
          )}
        </Layout>
      </CheckForUsername>
    </>
  )
}

export default MyListPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
