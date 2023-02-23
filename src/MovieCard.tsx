import styled from 'styled-components'
import Image from 'next/image'

import breakpoints from '@/assets/breakpoints'

// `https://image.tmdb.org/t/p/w1024${imgSrc}`

interface Props {
  imgSrc: string
  movieName: string
  isTrending: boolean
}

const MovieCard = ({
  imgSrc,
  movieName,
  isTrending
}: Props) => {

  const width = isTrending ? 5000 : 170
  const height = isTrending ? 170 : 130

  return (
    <Card>
      <Image
        // src='/last-of-us.jpeg'
        src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
        alt={movieName || 'No image'}
        width={width}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
      />
      <div className='other-info'>

      </div>
    </Card>
  )
}

const Card = styled.div`
  min-height: 150px;

  .card-image {
    object-fit: cover;
    object-position: right top;
    border-radius: 20px;
  }

  .normal {
    width: 100%;
  }

  .trending {
    width: 300px;
  }

  @media ${breakpoints.md} {
    .trending {
      width: 350px;
      height: 200px;
    }
  }

  @media ${breakpoints.lg} {
    .normal {
      height: 180px;
    }
    .trending {
      width: 400px;
      height: 250px;
    }
  }
  @media ${breakpoints.xl} {
    .trending {
      width: 500px;
      height: 300px;
    }
  }
  `

export default MovieCard
