import styled from 'styled-components'
import { ReactNode } from 'react';

import breakpoints from '@/assets/breakpoints'
import MiniCategories from './MiniCategories';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <UserLayout>
      {children}
      <MiniCategories />
    </UserLayout>
  )
}

const UserLayout = styled.div`
  @media ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 1rem;
  }
`

export default Layout
