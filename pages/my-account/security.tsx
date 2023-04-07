import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSidePropsContext } from 'next';

import Meta from '@atoms/Meta';
import Loader from '@atoms/Loader';
import { routeGuard } from '@/src/routeGuard';

const SecurityPage = () => {
  return (
    <>
      <Meta title='Security | Moviemanic' />
      <div>
        <h1>Security</h1>
      </div>
    </>
  )
}

export default SecurityPage
