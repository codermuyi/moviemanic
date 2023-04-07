import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import CheckForUsername from '@atoms/CheckForUsername';
import { routeGuard } from '@/src/routeGuard';

const DetailsPage = ({ profile }: any) => {
  return (
    <>
      <Meta title='Details | Moviemanic' />
      <CheckForUsername profile={profile}>
        <div>
          <h1>Details</h1>
        </div>
      </CheckForUsername>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}

export default DetailsPage
