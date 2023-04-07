import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import CheckForUsername from '@atoms/CheckForUsername';
import { routeGuard } from '@/src/routeGuard';

const SecurityPage = ({ profile }: any) => {
  return (
    <>
      <Meta title='Security | Moviemanic' />
      <CheckForUsername profile={profile}>
        <div>
          <h1>Security</h1>
        </div>
      </CheckForUsername>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}

export default SecurityPage
