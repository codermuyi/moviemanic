import styled from 'styled-components'


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
`

export default Trailer
