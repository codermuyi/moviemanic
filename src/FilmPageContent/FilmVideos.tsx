import styled from 'styled-components'
import Trailer from './FilmYoutubeVideo'
import MoreVideosModal from './FilmVideosModal';

const FilmVideos = ({ videoData }: any) => {
  const trailers = videoData?.results?.filter((videoData: any) => videoData.type === 'Trailer')
  const trailerIDs = trailers?.map((v: any) => v.key)

  return (
    <Content>
      <div style={{ maxWidth: '700px' }}>
        <Trailer id={trailerIDs?.[0]} />
        {
          videoData.results?.length > 1 &&
          <MoreVideosModal videoData={videoData.results} />
        }
      </div>
    </Content>
  )
}

const Content = styled.div`
  margin-block: 2rem;

  .button {
    margin-block: 1.1rem;
    margin-inline: auto;
    width: 40%;
    display: flex;
    justify-content: center;
    
    span {
      transition-duration: inherit;

      &.icon {
        display: inline-block;
        overflow: hidden;
        width: 0;
      }
    }

    :hover {
      background-color: white;
      color: rgb(var(--theme-main-color));

      span.icon {
        width: 20px;
      }
    }
  }
`

export default FilmVideos
