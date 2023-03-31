import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared'
import { AuthChangeEvent } from '@supabase/gotrue-js'
// import { server } from 'config'

import routes from 'src/variables/routes'

const CustomAuth = ({ view }: {
  view: ViewType
}) => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const session = useSession()
  const [authView, setAuthView] = useState<ViewType>(view)

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent) => {
        if (event === 'SIGNED_IN') {
          if (router.query.returnUrl)
            router.push(`${router?.query?.returnUrl}`)
          else
            router.push(routes.ACCOUNT)
        }
        if (event === 'PASSWORD_RECOVERY')
          setAuthView('forgotten_password')
        if (event === 'USER_UPDATED')
          setTimeout(() => setAuthView('sign_in'), 1000);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase.auth]);

  return (
    <Parent>
      <h1>{authView.replace('_', ' ')}</h1>
      {!session && <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]}
        view={authView}
        showLinks={false}
        // redirectTo={`${server}/my-account`}
      />}
      <div className='auth-links grid-center'>
        {
          authView === 'sign_in' && <>
            <p onClick={() => setAuthView('forgotten_password')}>Forgot your password?</p>
            <p onClick={() => setAuthView('sign_up')}>Don&apos;t have an account? Sign up</p>
          </>
        }
        {
          (authView === 'sign_up' || authView === 'forgotten_password') &&
          <p onClick={() => setAuthView('sign_in')}>Already have an account? Sign in</p>
        }
      </div>
    </Parent>
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
    transition: .3s;
    border-color: rgb(var(--main-theme-color));
    
    :hover {
      background-color: rgb(var(--f-bg-color)) !important;
    }
  }

  .auth-links {
    text-align: center;
    font-size: .8rem;
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
