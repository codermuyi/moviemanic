import styled from 'styled-components'
import Image from 'next/image'

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

  a {
    color: rgb(var(--theme-main-color));
  }
`

export default Footer
