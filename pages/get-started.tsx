import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'

import Meta from '@atoms/Meta'
import GetStarted from '@layouts/AccountPage/GetStarted'
import { routeGuard } from '@/src/routeGuard'
import { routes } from '@/src/constants'
import { Profile } from '@/src/types'

export default function AccountPage({ profile }: { profile: Profile }) {
  return !profile?.username ? (
    <>
      <Meta title="Get Started | Moviemanic" />
      <GetStarted />
    </>
  ) : (
    <div className="grid-center" style={{ gap: '1rem', paddingBlock: '5rem' }}>
      <p>You already have a username</p>
      <Link
        className="button"
        href={routes.ACCOUNT}
        style={{ padding: '1rem', textAlign: 'center' }}
      >
        Go to Account page
      </Link>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
