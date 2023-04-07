import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import UserHome from '@layouts/AccountPage/UserHome'
// import Loader from '@atoms/Loader';
import Layout from '@layouts/AccountPage/Layout';
// import { routes } from '@constants';
import CheckForUsername from '@atoms/CheckForUsername';
import { routeGuard } from '@/src/routeGuard';

export default function AccountPage({ profile }: { profile: any }) {
  // const router = useRouter()

  // useEffect(() => {
  //   if (!profile[0]?.username) {
  //     router.push(routes.GET_STARTED)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [profile])

  // return profile?.[0]?.username ?
  return <>
    <Meta title='My Account | Moviemanic' />
    <CheckForUsername profile={profile}>
      <Layout>
        <UserHome username={profile[0]?.username} />
      </Layout>
    </CheckForUsername>
  </>
  // : <Loader paddingBlock='10rem' />
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
