import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Login from "@/src/auth/Login"
import Meta from "@/src/atoms/Meta"
import PageLayout from "@/src/Layout/PageLayout"
import BlockBottomLink from "@/src/atoms/BlockBottomLink"
import RouteGuard from '@/src/RouteGuard'

const LoginPage = () => {
  const router = useRouter()
  const session = useSession()
  const supabase = useSupabaseClient()

  console.log(session)

  return (
    <>
      <Meta
        title='Login | Moviemanic'
      />
      <RouteGuard>
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
          <Login />
        </div>
        <BlockBottomLink />
      </RouteGuard>
    </>
  )
}

export default LoginPage
