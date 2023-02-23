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
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  place-items: center;
  padding-block: 2rem;
  flex-direction: column;
`

export default Footer
