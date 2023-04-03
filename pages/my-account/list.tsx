import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@/src/atoms/Meta';
import RouteGuard from '@/src/RouteGuard';
import UserFilmList from '@/src/AccountPage/UserFilmList'
import Loader from '@/src/atoms/Loader';
import Layout from '@/src/AccountPage/Layout';

const MyListPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [filmList, setFilmList] = useState<{ [x: string]: any } | null>(null)

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

  }, [session, supabase]);


  return (
    <>
      <Meta title='My Watchlist | Moviemanic' />
      <RouteGuard>
        <Layout>
          {
            filmList ?
              <UserFilmList
                filmList={filmList}
              />
              : <Loader paddingBlock='10rem' />
          }
        </Layout>
      </RouteGuard>

    </>
  )
}

export default MyListPage
