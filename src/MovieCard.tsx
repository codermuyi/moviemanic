import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  imgSrc: string
  movieName: string
}

const MovieCard = ({
  imgSrc,
  movieName
}: Props) => {


  return (
    <Card>
      <Image src={`https://image.tmdb.org/t/p/w200${imgSrc}`} alt={movieName} width={100} height={150} />
      <div className='other-info'>

      </div>
    </Card>
  )
}

const Card = styled.div`
  min-height: 150px;
  width: 150px;

`

export default MovieCard
