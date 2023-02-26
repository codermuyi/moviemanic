import Image from 'next/image'
import styled from 'styled-components'
import breakpoints from '@/assets/breakpoints'

const FilmPoster = ({ path }: { path: string }) => {
  return (
    <Poster>
      <div className='sticky'>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${path}`}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
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
