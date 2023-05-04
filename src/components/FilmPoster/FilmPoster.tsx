import Image from 'next/image'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Button from '@atoms/Button'
import PlusIcon from '@icons/Plus'
import MinusIcon from '@icons/Minus'
import useAddToList from '@hooks/useAddToList'
import useRemoveFromList from '@hooks/useRemoveFromList';
import useGetUsername from '@hooks/useGetUsername'
import { breakpoints } from '@constants'
import { FilmDetailsType } from '@/src/types'

const FilmPoster = ({
  path,
  info,
  mediaType,
  hideButtons, 
  height,
  width,
}: {
    path?: string,
    info: FilmDetailsType,
    mediaType: string,
    hideButtons?: boolean
    height?: string,
    width?: string,
  }) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path}`)
  const addToList = useAddToList(info, mediaType)
  const removeFromList = useRemoveFromList(info.id, mediaType)
  const username = useGetUsername()

  useEffect(() => {
    setSrc(`https://image.tmdb.org/t/p/w1280${path}`)
  }, [path])

  return (
    <Poster className='film-poster' height={height} width={width}>
      <div className='sticky'>
        <Image
          src={src}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
          onError={() => setSrc('/no-image.svg')}
        />
        {
          !hideButtons && username && <>
            <Button onClick={addToList} className='action flex-center'>
              <PlusIcon width='25px' height='25px' />
            </Button>
            <Button onClick={removeFromList} className='action minus flex-center'>
              <MinusIcon width='25px' height='25px' />
            </Button>
          </>
        }
      </div>
    </Poster>
  )
}

const Poster = styled.div<{ height: string | undefined, width: string | undefined }>`
  padding-block: 1rem;

  .poster-img {
    object-fit: cover;
    display: block;
    margin-inline: auto;
    border-radius: 10px;
  }

  .sticky .button {
    position: absolute;
    top: 20px;
    left: 1rem;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    box-shadow: 0 3px 4px rgb(0 0 0 / .5);

    &.minus {
      transform: translateY(120%);
    }

    @media (pointer: coarse) {
      width: 50px;
      height: 50px;
    }
  }
  
  @media ${breakpoints.md} {
    .sticky {
      position: sticky;
      top: 100px;
    }

    .poster-img {
      width: 300px;
      height: 400px;
    }
  }
  
  @media ${breakpoints.lg} {
    .sticky {
      top: 30px;
    }
  }
  
  .poster-img {
    height: ${p => p.height};
    width: ${p => p.width};
  }
`

export default FilmPoster
