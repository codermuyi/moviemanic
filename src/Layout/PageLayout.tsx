import styles from '@/styles/Page.module.css'
import Navbar from "./Navbar"
import Search from "../Search"
import Footer from "./Footer"
import ScrollToTopButton from '../atoms/ScrollToTopButton'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useSession } from '@supabase/auth-helpers-react'

const PageLayout = (props: any) => {
  const router = useRouter()
  const session = useSession()

  return (
    <>
      <ScrollToTopButton />
      <main className={styles.main}>
        <Navbar />
        <Col2 className={styles.col2} homepage={router.asPath === '/'}>
          <Search />
          {session && <p
            style={{
              paddingInline: '1rem', textAlign: 'left', color: 'rgb(var(--sub-theme-color))'
            }}>Signed in as: {session.user.email}
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
