import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import Loader from '@atoms/Loader';

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
