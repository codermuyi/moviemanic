import styled from 'styled-components'
import Image from 'next/image'
import breakpoints from '@/assets/breakpoints'

const Footer = () => {
  return (
    <Foot>
      <p>Created by <a href='https://samuel-adepoju.vercel.app'>Samuel Adepoju </a></p>
      <p>With data from</p>
      <a href="https://www.themoviedb.org/" target='_blank' rel='noreferrer'>

      <Image
        src='/tmdb.svg'
        alt='TMDB attribution'
        width={150}
        height={10}
      />
      </a>
      <br />
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  place-items: center;
  padding-block: 2rem;
  flex-direction: column;
  font-size: .8em;
  gap: .6em;
  background-color: rgb(var(--f-bg-color));
  color: rgb(var(--f-text-color));
  /* border-inline: 1rem solid rgb(var(--sub-color)); */

  a {
    color: rgb(var(--theme-main-color));
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
      background-color: rgb(var(--sub-color));
      clip-path: polygon(3% 100%, 8% 35%, 21% 34%, 35% 44%, 51% 26%, 100% 16%, 100% 29%, 64% 38%, 99% 54%, 74% 100%, 59% 100%, 84% 60%, 56% 47%, 37% 63%, 20% 48%, 18% 76%, 25% 100%);
      }
  }
`

export default Footer