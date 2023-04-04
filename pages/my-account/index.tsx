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

  if (isLoading) 
    return <Loader paddingBlock='10rem' />

  return profile?.[0]?.username ?
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        <Layout>
          <UserHome username={profile?.[0]?.username} />
        </Layout>
      </RouteGuard>
    </>
    : <>
      <Meta title='Get Started | Moviemanic' />
      <RouteGuard>
        <GetStarted />
      </RouteGuard>
    </>
}
