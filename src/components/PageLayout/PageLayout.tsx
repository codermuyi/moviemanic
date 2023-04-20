import styles from '@/styles/Page.module.css'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSession } from '@supabase/auth-helpers-react'
import { ReactNode } from 'react'

import Navbar from "@components/Navbar"
import Search from "@components/Search"
import Footer from "@components/Footer"
import ScrollToTopButton from '@atoms/ScrollToTopButton'
import UserIndicator from './UserIndicator'

const PageLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const session = useSession()

  return (
    <>
      <ScrollToTopButton />
      <main className={styles.main}>
        <Navbar />
        <Col2 className={styles.col2} homepage={router.asPath === '/'}>
          <Search />
          <UserIndicator session={session} />
          {children}
        </Col2>
      </main>
      <Footer />
    </>
  )
}

const Col2 = styled.div<{ homepage: boolean }>`
  /* To prevent width distortion and overflow when zooming on homepage */
  overflow-x: ${p => p.homepage && 'hidden'};
`

export default PageLayout
