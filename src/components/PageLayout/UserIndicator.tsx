import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Session } from '@supabase/supabase-js'

import useGetUsername from '@hooks/useGetUsername'
import { breakpoints } from '@constants'

const UserIndicator = ({ session }: { session: Session | null }) => {
  const router = useRouter()
  const username = useGetUsername()

  return (
    <>
      {session && router.asPath !== '/my-account' && username && (
        <UserIndicatorStyle>Signed in as {username}</UserIndicatorStyle>
      )}
    </>
  )
}

const UserIndicatorStyle = styled.p`
  padding-inline: 1rem;
  color: rgb(var(--main-theme-color));
  background-color: rgb(var(--dark-theme-color));
  width: 14rem;
  padding: 0.7rem 0;
  position: sticky;
  top: 3.3rem;
  right: 5px;
  z-index: 200;
  border-radius: 20px;
  margin-left: auto;
  margin-bottom: 5px;
  text-align: center;

  @media ${breakpoints.lg} {
    position: fixed;
    top: 5px;
  }
`

export default UserIndicator
