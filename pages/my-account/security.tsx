import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Meta from '@/src/atoms/Meta';
import RouteGuard from '@/src/RouteGuard';
import Loader from '@/src/atoms/Loader';

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
