'use client'

import styled from 'styled-components'
import Link from 'next/link'

import { breakpoints, routesV1 } from '@constants'

const BlockTopLink = () => {
  return (
    <Something>
      <Link href={routesV1.MOVIES}>
        <div>
          <p>Movies</p>
        </div>
      </Link>
      <Link href={routesV1.TV_SERIES}>
        <div>
          <p>TV Series</p>
        </div>
      </Link>
    </Something>
  )
}

const Something = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  justify-content: center;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 3rem;
    height: 300px;
    background-color: rgb(var(--dark-theme-color));
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: 0.4s;

    div {
      position: relative;
      z-index: 2;
    }

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: rgb(var(--main-theme-color));
      clip-path: circle(7.2% at 50% 50%);
      transition: clip-path 0.4s;
    }

    :hover,
    :focus {
      box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    }
  }

  a:first-child {
    justify-content: end;

    :hover,
    :focus {
      padding-right: 6rem;
      ::before {
        clip-path: circle(10% at 50% 50%);
      }
    }
  }

  a:last-child {
    ::before {
      clip-path: circle(70.7% at 50% 50%);
    }

    :hover,
    :focus {
      padding-left: 6rem;
      ::before {
        clip-path: circle(40% at 50% 50%);
      }
    }
  }

  @media ${breakpoints.smMax} {
    flex-direction: column;
    a {
      padding-block: 4rem;
    }
  }
`

export default BlockTopLink
