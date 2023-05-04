import styled from 'styled-components'

import Trailer from './FilmYoutubeVideo'
import MoreVideosModal from './FilmVideosModal';
import { FilmVideo } from '@/src/types';

const FilmVideos = ({ videoData }: { videoData: FilmVideo[] | undefined }) => {
  const trailers = videoData?.filter(video => video.type === 'Trailer')
  const trailerIDs = trailers?.map(trailer => trailer.key)

  return (
    <Content>
      <div style={{ maxWidth: '700px' }}>
        <Trailer id={trailerIDs?.[0]} />
        {
          videoData && videoData?.length > 1 &&
          <MoreVideosModal videoData={videoData} />
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
      color: rgb(var(--main-theme-color));

      span.icon {
        width: 20px;
      }
    }
  }
`

export default FilmVideos
