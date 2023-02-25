import Image from 'next/image'
import styled from 'styled-components'

const FilmPoster = ({path}: {path: string}) => {
  return (
    <Poster>
      <Image
          src={`https://image.tmdb.org/t/p/w1280${path}`}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
        />
    </Poster>
  )
}

const Poster = styled.div`
  padding-block: 1rem;

  .poster-img {
    object-fit: cover;
    display: block;
    margin-inline: auto;
    border-radius: 20px;
  }
`

export default FilmPoster
