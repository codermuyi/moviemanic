import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import UserFilmList from '@layouts/AccountPage/UserFilmList'
import Loader from '@atoms/Loader';
import Layout from '@layouts/AccountPage/Layout';

const MyListPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [filmList, setFilmList] = useState<{ [x: string]: any } | null>(null)
  // Random number to refetch data whenever a film is deleted from the list
  const [randomNum, setRandomNum] = useState(Math.random())

  useEffect(() => {
    const getData = async () => {
      if (session) {
        let { data } = await supabase
          .from('film_list')
          .select()
        setFilmList(data)
      }
    }
    getData()

  }, [session, supabase, randomNum]);

  return (
    <>
      <Meta title='My Watchlist | Moviemanic' />
      <RouteGuard>
        <Layout>
          {
            filmList ?
              <UserFilmList
                filmList={filmList}
                setRandomNum={setRandomNum}
              />
              : <Loader paddingBlock='10rem' />
          }
        </Layout>
      </RouteGuard>

    </>
  )
}

export default MyListPage
