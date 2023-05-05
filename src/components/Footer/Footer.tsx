import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { breakpoints } from '@constants'

const Footer = () => {
  return (
    <Foot>
      <p>
        Created by{' '}
        <a href="https://samuel-adepoju.vercel.app">Samuel Adepoju </a>
      </p>
      <p>With data from</p>
      <Link href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <Image src="/tmdb.svg" alt="TMDB attribution" width={150} height={10} />
      </Link>
      <br />
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  place-items: center;
  padding-block: 2rem;
  flex-direction: column;
  font-size: 0.8em;
  gap: 0.6em;
  background-color: rgb(var(--dark-theme-color));
  color: rgb(var(--main-text-color));
  /* border-inline: 1rem solid rgb(var(--main-theme-color)); */

  a {
    color: rgb(var(--main-theme-color));
  }

  @media ${breakpoints.lg} {
    padding-block: 6rem;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      right: 100px;
      top: 0;
      bottom: 0;
      width: 200px;
      background-color: rgb(var(--main-theme-color));
      clip-path: polygon(
        3% 100%,
        8% 35%,
        21% 34%,
        35% 44%,
        51% 26%,
        100% 16%,
        100% 29%,
        64% 38%,
        99% 54%,
        74% 100%,
        59% 100%,
        84% 60%,
        56% 47%,
        37% 63%,
        20% 48%,
        18% 76%,
        25% 100%
      );
    }
  }
`

export default Footer
