import useSWR from 'swr'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import GetStarted from '@layouts/AccountPage/GetStarted';
import UserHome from '@layouts/AccountPage/UserHome'
import Loader from '@atoms/Loader';
import Layout from '@layouts/AccountPage/Layout';
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
