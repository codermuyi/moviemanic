import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import {
  MainIcon,
  ProfileIcon,
  MenuIcon,
  MovieIcon,
  TVIcon
} from '../atoms/SVGIcons'
import breakpoints from '@/assets/breakpoints'
import Sidebar from '../Sidebar'
import Button from '../atoms/Button'
import NavLink from '../atoms/NavLink'

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
        <div className='bar-item'>
          <Button
            onClick={toggle}
            bgColor='transparent'
            color='inherit'
          >
            <MenuIcon
              width={iconWidth}
              height={iconHeight}
              fill={iconFill}
            />
          </Button>
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

        <div className='bar-item'>
          <NavLink href='/movies'>
            <MovieIcon
              width={iconWidth}
              height={iconHeight}
              fill='currentColor'
            />
          </NavLink>
          <NavLink href='/tv-series'>
            <TVIcon
              width={iconWidth}
              height={iconHeight}
              fill='currentColor'
            />
          </NavLink>
        </div>

        <div className='bar-item'>
          <ProfileIcon
            width={iconWidth}
            height={iconHeight}
            fill="rgb(var(--f-text-color))"
          />
        </div>
      </Bar>
    </>
  )
}

const Bar = styled.nav`
  display: flex;
  align-items: center;
  padding: .7rem 1rem;
  background: linear-gradient(70deg, rgb(var(--theme-main-color)), rgb(var(--f-bg-color)));

  .bar-item {
    display: flex;
    align-items: center;
    gap: .5em;
    flex: 1;

    :nth-child(2) {
      justify-content: center;
    }
    
    :nth-child(3) {
      justify-content: end;
    }

    div {
      width: 40px;
      height: 30px;
    }
  }

  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media ${breakpoints.lg} {
    border-radius: 10px;
    flex-direction: column;
    height: 85vh;
    top: 2rem;
    width: 60px;
    margin: 3rem auto;
    padding: 2rem;
    left: 30px;
    right: initial;
    background: linear-gradient(rgb(var(--theme-main-color)), rgb(var(--f-bg-color)));

    .bar-item {
      flex-direction: column;
    }
  }
`

export default Navbar;