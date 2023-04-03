import useSWR from 'swr'

import Meta from '@/src/atoms/Meta';
import RouteGuard from '@/src/RouteGuard';
import GetStarted from '@/src/AccountPage/GetStarted';
import UserHome from '@/src/AccountPage/UserHome'
import Loader from '@/src/atoms/Loader';
import Layout from '@/src/AccountPage/Layout';
import { myFetch } from '@/assets/utilities';

export default function AccountPage() {
  const { data: profile, isLoading } = useSWR('/api/profile-details', myFetch)

  return (
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        {
          !isLoading ?
            profile?.[0]?.username ?
              <Layout>
                <UserHome username={profile?.[0]?.username} />
              </Layout>
              : <GetStarted />
            : <Loader paddingBlock='10rem' />
        }
      </RouteGuard>
    </>
  )
}
