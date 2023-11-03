import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared'
import { AuthChangeEvent } from '@supabase/gotrue-js'

import Loader from '@atoms/Loader'
import { server } from 'config'
import { routesV1 } from '@constants'

const CustomAuth = ({ view }: { view: ViewType }) => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const session = useSession()
  const [authView, setAuthView] = useState<ViewType>(view)

  const generateRedirectPath = (view: ViewType) => {
    if (view === 'sign_in') return `${server}${routesV1.ACCOUNT}`
    else if (view === 'forgotten_password')
      return `${server}${routesV1.RESET_PASSWORD}`
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
      if (event === 'SIGNED_IN') {
        router.push(routesV1.ACCOUNT)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase.auth])

  return !session ? (
    <Parent>
      <h1>{authView.replace('_', ' ')}</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]}
        view={authView}
        showLinks={false}
        redirectTo={generateRedirectPath(authView)}
      />
      <div className="auth-links grid-center">
        {authView === 'sign_in' && (
          <>
            <p onClick={() => setAuthView('forgotten_password')}>
              Forgot your password?
            </p>
            <p onClick={() => setAuthView('sign_up')}>
              Don&apos;t have an account? Sign up
            </p>
          </>
        )}
        {(authView === 'sign_up' || authView === 'forgotten_password') && (
          <p onClick={() => setAuthView('sign_in')}>
            Already have an account? Sign in
          </p>
        )}
      </div>
    </Parent>
  ) : (
    <Loader paddingBlock="10rem" />
  )
}

const Parent = styled.div`
  max-width: 500px;
  margin-inline: auto;
  padding-inline: 2rem;

  h1 {
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  .supabase-auth-ui_ui-button {
    max-width: 12rem;
    margin-inline: auto;
    background-color: rgb(var(--main-theme-color));
    transition: 0.3s;
    border-color: rgb(var(--main-theme-color));

    :hover {
      background-color: rgb(var(--dark-theme-color)) !important;
    }
  }

  .auth-links {
    text-align: center;
    font-size: 0.8rem;
    gap: 5px;
    margin-top: 1rem;

    p {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

export default CustomAuth
