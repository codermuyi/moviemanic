import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useSession } from '@supabase/auth-helpers-react'

import {
  MainIcon,
  ProfileIcon,
  MenuIcon,
  MovieIcon,
  TVIcon,
} from '@atoms/SVGIcons'
import Button from '@atoms/Button'
import NavLink from '@atoms/NavLink'
import Sidebar from '@components/Sidebar'
import Login from '@components/Auth/Login'
import MyDialog from '@components/Dialog'
import useSignOut from '@hooks/useSignOut'
import { breakpoints } from '@constants'
import { routes } from '@constants'

const Navbar = () => {
  const iconWidth = 40
  const iconHeight = 30
  const iconFill = 'currentColor'
  const [isOpen, setIsOpen] = useState(false)
  const session = useSession()
  const signOut = useSignOut()

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <>
      <Sidebar iconFill={iconFill} isOpen={isOpen} toggle={toggle} />
      <Bar>
        <div className="bar-item">
          <Button
            onClick={toggle}
            bgColor="transparent"
            color="inherit"
            name="Sidebar toggle"
            noShadow
          >
            <MenuIcon width={iconWidth} height={iconHeight} fill={iconFill} />
          </Button>
          <div>
            <Link href="/">
              <MainIcon width={iconWidth} height={iconHeight} fill="black" />
            </Link>
          </div>
        </div>

        <div className="bar-item">
          <NavLink href="/movies">
            <MovieIcon
              width={iconWidth}
              height={iconHeight}
              fill="currentColor"
            />
          </NavLink>
          <NavLink href="/tv-series">
            <TVIcon width={iconWidth} height={iconHeight} fill="currentColor" />
          </NavLink>
        </div>

        <div className="bar-item">
          <Link href={routes.ACCOUNT}>
            <ProfileIcon
              width={iconWidth}
              height={iconHeight}
              fill="rgb(var(--main-text-color))"
            />
          </Link>
          {session ? (
            <Button padding=".5rem" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <MyDialog
              noButton
              name={<Button padding=".5rem">Sign in</Button>}
              title=""
              contentStyle={{
                paddingBlock: '2rem',
              }}
            >
              <Login />
            </MyDialog>
          )}
        </div>
      </Bar>
    </>
  )
}

const Bar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    70deg,
    rgb(var(--main-theme-color), 0.6),
    rgb(var(--dark-theme-color), 0.8) 50%
  );

  .bar-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
    flex: 1;

    :nth-child(2) {
      justify-content: center;
    }

    :nth-child(3) {
      justify-content: end;

      .button {
        color: white;
        background-color: rgb(var(--main-theme-color));
        padding: 0.3rem;
      }
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
    background: linear-gradient(
      rgb(var(--main-theme-color)),
      rgb(var(--dark-theme-color)) 70%
    );

    .bar-item {
      flex-direction: column;
    }
  }
`

export default Navbar
