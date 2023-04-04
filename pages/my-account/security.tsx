import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@atoms/Meta';
import RouteGuard from '@atoms/RouteGuard';
import Loader from '@atoms/Loader';

const SecurityPage = () => {
  return (
    <>
      <Meta title='Security | Moviemanic' />
      <RouteGuard>
        <h1>Security</h1>
      </RouteGuard>
    </>
  )
}

export default SecurityPage
