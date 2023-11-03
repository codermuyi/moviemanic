import { GetServerSidePropsContext } from 'next'

import Meta from '@atoms/Meta'
import UserHome from '@layouts/AccountPage/UserHome'
import Layout from '@layouts/AccountPage/Layout'
import CheckForUsername from '@atoms/CheckForUsername'
import { routeGuard } from '@/src/routeGuard'
import { Profile } from '@/src/types'

export default function AccountPage({ profile }: { profile: Profile }) {
  return (
    <>
      <Meta title="My Account | Moviemanic" />
      <CheckForUsername profile={profile}>
        <Layout>
          <UserHome username={profile?.username} />
        </Layout>
      </CheckForUsername>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
