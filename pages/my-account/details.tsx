import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import CheckForUsername from '@atoms/CheckForUsername';
import { routeGuard } from '@/src/routeGuard';
import { formatDate } from '@/src/helpers';
import { Profile, User } from '@/src/types';

const DetailsPage = ({ profile, user }: { profile: Profile, user: User }) => {
  return (
    <>
      <Meta title='Details | Moviemanic' />
      <CheckForUsername profile={profile}>
        <div style={{ paddingInline: '1rem', textAlign: 'center' }}>
          <h1 style={{ paddingBlock: '1rem' }}>Details</h1>
          <p>Username: {profile?.username}</p>
          <br />
          <p>Email: {user.email}</p>
          <br />
          <p>User ID: {user.id}</p>
          <br />
          <p>Date Created: {formatDate(profile?.created_at)}</p>
          <br />
        </div>
      </CheckForUsername>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}

export default DetailsPage
