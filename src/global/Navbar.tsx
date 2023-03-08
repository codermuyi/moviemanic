import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import {
  MainIcon,
  ProfileIcon,
  MenuIcon,
} from './SVGIcons'
import breakpoints from '@/assets/breakpoints'
import Sidebar from './Sidebar'

const Navbar = () => {
  const iconWidth = 40
  const iconHeight = 30
  const iconFill = 'currentColor'
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <>
      <Sidebar
        iconFill={iconFill}
        isOpen={isOpen}
        toggle={toggle}
      />

      <Bar>
        <div className='nav'>
          <div onClick={toggle} style={{cursor: 'pointer'}}>
            <MenuIcon
              width={iconWidth}
              height={iconHeight}
              fill={iconFill}
            />
          </div>
          <div>
            <Link href='/'>
              <MainIcon
                width={iconWidth}
                height={iconHeight}
                fill='black'
              />
            </Link>
          </div>
        </div>
        <div>
          <ProfileIcon
            width={iconWidth}
            height={iconHeight}
            fill={iconFill}
          />
        </div>
      </Bar>
    </>
  )
}

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem 1rem;
  background-color: rgb(var(--theme-main-color));

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    div {
      width: 40px;
      height: 30px;
    }
  }

  @media ${breakpoints.md} {
    margin: 1rem;
    border-radius: 10px;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media ${breakpoints.lg} {
    flex-direction: column;
    height: 85%;
    width: 60px;
    margin: 3rem auto;
    padding: 2rem;
    left: 30px;
    right: initial;

    .nav {
      flex-direction: column;
    }
  }
`

export default Navbar;