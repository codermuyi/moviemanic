import styled from 'styled-components'
import breakpoints from '@/assets/breakpoints'

const Trailer = ({ id }: { id: string }) => {
  return (
    <>
      {id && <IFrame
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className='trailer'
      >
      </IFrame>}
    </>
  )
}

const IFrame = styled.iframe`
  min-width: 200px;
  width: 100%;
  max-width: 700px;
  display: block;
  margin-inline: auto;
  height: 250px;

  @media ${breakpoints.sm} {
    height: 315px;
  }
  @media ${breakpoints.md} {
    height: 250px;
  }
  @media ${breakpoints.lg} {
    height: 315px;
  }
`

export default Trailer
