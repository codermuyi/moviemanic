import useSWR from 'swr'
import Link from 'next/link'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import GetStarted from '@layouts/AccountPage/GetStarted';
import Loader from '@atoms/Loader';
import { myFetch } from '@/assets/utilities';

export default function AccountPage() {
  const { data: profile, isLoading } = useSWR('/api/profile-details', myFetch)

  if (isLoading)
    return <Loader paddingBlock='10rem' />

  return !profile?.[0]?.username ? <>
    <Meta title='Get Started | Moviemanic' />
    <RouteGuard>
      <GetStarted />
    </RouteGuard>
  </>
    : <div className='grid-center' style={{ gap: '1rem', paddingBlock: '5rem' }}>
      <p>You already have a username</p>
      <Link className='button' href='/' style={{ padding: '1rem' }}>Go to Home</Link>
    </div>
}
