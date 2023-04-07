import useSWR from 'swr'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import UserHome from '@layouts/AccountPage/UserHome'
import Loader from '@atoms/Loader';
import Layout from '@layouts/AccountPage/Layout';
import { myFetch } from '@/assets/utilities';
import { routes } from '@constants';

export default function AccountPage() {
  const { data: profile, isLoading } = useSWR('/api/profile-details', myFetch)
  const router = useRouter()

  useEffect(() => {
    if (!profile?.[0]?.username && !isLoading)
      router.push('/get-started')

    console.log('shit')
  }, [profile, isLoading])

  return profile?.[0]?.username ?
    <>
      <Meta title='My Account | Moviemanic' />
      <RouteGuard>
        <Layout>
          <UserHome username={profile?.[0]?.username} />
        </Layout>
      </RouteGuard>
    </>
    : <Loader paddingBlock='10rem' />
}
