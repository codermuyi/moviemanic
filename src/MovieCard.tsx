import styled from 'styled-components'
import Image from 'next/image'

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

  const width = isTrending ? 250 : 160
  const height = isTrending ? 170 : 120

  return (
    <Card>
      <Image
        src='/last-of-us.jpeg'
        alt={movieName}
        width={width}
        height={height}
        className='card-image'
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
`

export default MovieCard
