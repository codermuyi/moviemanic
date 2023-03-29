import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared'

import routes from 'src/variables/routes'
import { server } from 'config'

const Parent = styled.div`
  max-width: 500px;
  margin-inline: auto;
  
  .supabase-auth-ui_ui-button {
    width: 50%;
    margin-inline: auto;
    background-color: rgb(var(--main-theme-color));
    transition: .3s;
    border-color: rgb(var(--main-theme-color));
    
    :hover {
      background-color: rgb(var(--f-bg-color)) !important;
    }
  }
`

// type AuthChangeEvent = "INITIAL_SESSION" | "PASSWORD_RECOVERY" | "SIGNED_IN" | "SIGNED_OUT" | "TOKEN_REFRESHED" | "USER_UPDATED" | "USER_DELETED" | "MFA_CHALLENGE_VERIFIED"

const Login = () => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const session = useSession()
  const [authView, setAuthView] = useState<ViewType>('sign_in')
  // "sign_in" | "sign_up" | "magic_link" | "forgotten_password" | "update_password"

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
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
      authListener.subscription.unsubscribe();
      console.log('successfully unsubscribed')
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase.auth]);

  console.log(router.query)

  return (
    <Parent>
      {!session && <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]}
        view={authView}
        // redirectTo={`${server}/${router.query.returnUrl ?? '/my-account'}`}
      />}
    </Parent>
  )
}

export default Login