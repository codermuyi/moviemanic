import Link from 'next/link'
import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import GetStarted from '@layouts/AccountPage/GetStarted';
import { routeGuard } from '@/src/routeGuard';

export default function AccountPage({ profile }: any) {
  return !profile?.[0]?.username ?
    <>
      <Meta title='Get Started | Moviemanic' />
      <GetStarted />
    </>
    : <div className='grid-center' style={{ gap: '1rem', paddingBlock: '5rem' }}>
      <p>You already have a username</p>
      <Link className='button' href='/' style={{ padding: '1rem' }}>Go to Home</Link>
    </div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}
