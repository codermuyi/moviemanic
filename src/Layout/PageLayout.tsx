import styles from '@/styles/Page.module.css'
import styled from 'styled-components'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useSession } from '@supabase/auth-helpers-react'

import Navbar from "./Navbar"
import Search from "../Search"
import Footer from "./Footer"
import ScrollToTopButton from '../atoms/ScrollToTopButton'

import { myFetch } from '@/assets/utilities';

const PageLayout = (props: any) => {
  const router = useRouter()
  const session = useSession()
  const { data: profile, isLoading } = useSWR('/api/profile-details', myFetch)
  console.log(profile)
  return (
    <>
      <ScrollToTopButton />
      <main className={styles.main}>
        <Navbar />
        <Col2 className={styles.col2} homepage={router.asPath === '/'}>
          <Search />
          {session && router.asPath !== '/my-account' && profile?.username && <p
            style={{
              paddingInline: '1rem',
              // color: 'rgb(var(--sub-theme-color))',
              color: 'rgb(var(--f-text-color))',
              backgroundColor: 'rgb(var(--sub-theme-color)',
              width: '12rem',
              padding: '.7rem',
              position: 'sticky',
              top: '3.3rem',
              zIndex: 200,
              borderRadius: 20,
              marginLeft: 'auto',
              textAlign: 'center',
            }}>Signed in as: {profile?.[0]?.username}
            {/* }}>Signed in as: {session.user.email} */}
          </p>}
          {props.children}
        </Col2>
      </main>
      <Footer />
    </>
  )
}

const Col2 = styled.div.attrs(p => { })`
  overflow-x: ${p => p.homepage && 'hidden'};
`

export default PageLayout
