import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@/src/atoms/Meta';
import RouteGuard from '@/src/RouteGuard';
import Loader from '@/src/atoms/Loader';

const DetailsPage = () => {
  return (
    <>
      <Meta title='Details | Moviemanic' />
      <RouteGuard>
        <h1>Details</h1>
      </RouteGuard>
    </>
  )
}

export default DetailsPage
