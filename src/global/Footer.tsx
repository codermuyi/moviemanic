import styled from 'styled-components'
import Image from 'next/image'

const Footer = () => {
  return (
    <Foot>
      <Image src='/tmdb.svg' alt='TMDB attribution' />
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  place-items: center;
  padding-block: 2rem;
`

export default Footer
