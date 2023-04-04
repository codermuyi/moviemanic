import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

import Button from 'src/atoms/Button'
import PlusIcon from '../icons/Plus'
import MinusIcon from '../icons/Minus'
import breakpoints from '@/assets/breakpoints'
import useAddToList from '../hooks/useAddToList'
import useRemoveFromList from '../hooks/useRemoveFromList';
import useGetUsername from '../hooks/useGetUsername'

const FilmPoster = ({ path, info, mediaType }: { path: string, info: any, mediaType: string }) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path}`)
  const addToList = useAddToList(info, mediaType)
  const removeFromList = useRemoveFromList(info.id, mediaType)
  const username = useGetUsername()

  return (
    <Poster className='film-poster'>
      <div className='sticky'>
        <Image
          src={src}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
          onError={() => setSrc('/no-image.svg')}
        />
        {username && <Button onClick={addToList} className='flex-center'>
          <PlusIcon width='25px' height='25px' />
        </Button>}
        {username && <Button onClick={removeFromList} className='minus flex-center'>
          <MinusIcon width='25px' height='25px' />
        </Button>}
      </div>
    </Poster>
  )
}

const Poster = styled.div`
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
    /* transform: translate(50%, 100%); */
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0 3px 4px rgb(0 0 0 / .5);

    &.minus {
      transform: translateY(120%);
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
`

export default FilmPoster
