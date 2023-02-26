import styled from 'styled-components'
import Image from 'next/image'

const Footer = () => {
  return (
    <Foot>
      <p>Powered by</p>
      <Image
        src='/tmdb.svg'
        alt='TMDB attribution'
        width={200}
        height={50}
      />
      <br />
      <p>Created by <a href='https://samuel-adepoju.vercel.app'>Samuel Adepoju </a>(Ongoing)</p>
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  place-items: center;
  padding-block: 2rem;
  flex-direction: column;

  a {
    color: rgb(var(--theme-main-color));
  }
`

export default Footer
