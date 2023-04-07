import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import UserHome from '@layouts/AccountPage/UserHome'
import Layout from '@layouts/AccountPage/Layout';
import CheckForUsername from '@atoms/CheckForUsername';
import { routeGuard } from '@/src/routeGuard';

export default function AccountPage({ profile }: { profile: any }) {
  return <>
    <Meta title='My Account | Moviemanic' />
    <CheckForUsername profile={profile}>
      <Layout>
        <UserHome username={profile[0]?.username} />
      </Layout>
    </CheckForUsername>
  </>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
