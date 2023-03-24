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
            <span>Videos</span>
            <span className='icon'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </span>
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
    margin-block: 1.1rem;
    margin-inline: auto;
    width: 50%;
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
