import styled from 'styled-components'
import Trailer from './FilmYoutubeVideo'
import Button from '../atoms/Button'
import { useState } from 'react';
import MoreVideosModal from './FilmVideosModal';

const FilmVideos = ({ videoData }: any) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const trailers = videoData?.results?.filter((videoData: any) => videoData.type === 'Trailer')
  const trailerIDs = trailers?.map((v: any) => v.key)

  return (
    <Content>
      <div style={{ maxWidth: '700px' }}>
        <Trailer id={trailerIDs?.[0]} />
        {
          videoData.results?.length > 1 &&
          <Button
            padding='.7rem'
            onClick={() => setIsOpen(true)}
          >
            Videos <span>&lt;_&gt;</span>
          </Button>
        }
      </div>
      <MoreVideosModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        videoData={videoData.results}
      />
    </Content>
  )
}

const Content = styled.div`
  margin-block: 2rem;

  .button {
    margin-block: 1rem;
    margin-inline: auto;
    display: block;
    width: 50%;
    
    span {
      display: inline-block;
      width: 0;
      overflow: hidden;
      transition-duration: inherit;
    }

    :hover {
      background-color: white;
      color: rgb(var(--theme-main-color));

      span {
        width: 25px;
      }
    }
  }
`

export default FilmVideos
