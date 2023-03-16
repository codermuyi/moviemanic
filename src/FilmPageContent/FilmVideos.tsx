import styled from 'styled-components'
import Trailer from './FilmYoutubeVideo'
import Button from '../atoms/Button'
import { useState } from 'react';
import MoreVideosModal from './FilmVideosModal';
import rightIcon from '@/assets/icons/arrow-right-2.svg'
import Image from 'next/image'

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
              <Image src={rightIcon} alt='right' width={20} height={20} />
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
    align-items: center;
    
    span {
      transition-duration: inherit;

      &.icon {

        display: inline-block;
        /* width: 0; */
        overflow: hidden;
        transform: scale(0) translateX(0);
      }
    }

    :hover {
      background-color: white;
      color: rgb(var(--theme-main-color));

      span.icon {
        transform: scale(1) translateX(5px);
      }
    }
  }
`

export default FilmVideos
