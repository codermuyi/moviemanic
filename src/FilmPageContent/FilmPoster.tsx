import Image from 'next/image'
import styled from 'styled-components'
import breakpoints from '@/assets/breakpoints'
import { useState } from 'react'

const FilmPoster = ({ path }: { path: string }) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path}`)
  
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
