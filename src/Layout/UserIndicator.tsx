import styled from 'styled-components'
import { useRouter } from 'next/router'

import breakpoints from 'assets/breakpoints'
import useGetUsername from '../hooks/useGetUsername'

const UserIndicator = ({ session }: any) => {
  const router = useRouter()
  const username = useGetUsername()

  return (
    <>
      {
        session && 
        (router.asPath !== '/my-account') && 
        username && <UserIndicatorStyle>
          Signed in as {username}
        </UserIndicatorStyle>
      }
    </>
  )
}

const UserIndicatorStyle = styled.p`
  padding-inline: 1rem;
  color: rgb(var(--main-theme-color));
  background-color: rgb(var(--f-bg-color));
  width: 14rem;
  padding: .7rem 0;
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
