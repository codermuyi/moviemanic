import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

import Button from 'src/atoms/Button'
import breakpoints from '@/assets/breakpoints'
import useAddToList from '../useAddToList'

const FilmPoster = ({ path, info, mediaType }: { path: string, info: any, mediaType: string }) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path}`)
  const [addToList, AddFilmToast, username] = useAddToList(info, mediaType)

  return (
    <Poster className='film-poster'>
      <AddFilmToast />
      <div className='sticky'>
        <Image
          src={src}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
          onError={() => setSrc('/no-image.svg')}
        />
        {username && <Button onClick={addToList}>Add to list</Button>}
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
    padding: .3rem;
    position: absolute;
    top: 20px;
    transform: translate(50%, 100%);
    width: 50px;
    height: 50px;
    border-radius: 100%;
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

const AddToList = styled(Button)`
  padding: 1rem;
  position: absolute;
  top: 0;
`

export default FilmPoster
