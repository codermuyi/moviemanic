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

  const width = isTrending ? 250 : 170
  const height = isTrending ? 170 : 130

  return (
    <Card>
      <Image
        src='/last-of-us.jpeg'
        alt={movieName}
        width={width}
        height={height}
        className={`card-image ${!isTrending ? 'normal': 'trending'}`}
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
    width: 250px;
  }

  @media ${breakpoints.lg} {
    .trending {
      width: 320px;
      height: 200px;
    }
  }
`

export default MovieCard
