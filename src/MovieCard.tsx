import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
import breakpoints from '@/assets/breakpoints'

interface Props {
  imgSrc: string
  movieName: string
  isTrending: boolean
  date: string,
  type: string
}

const MovieCard = ({
  imgSrc,
  movieName,
  isTrending,
  date,
  type
}: Props) => {

  const height = isTrending ? 170 : 130

  return (
    <Card>
      <span></span>
      <Image
        // src='/last-of-us.jpeg'
        src={`https://image.tmdb.org/t/p/w1280${imgSrc}`}
        alt={movieName || 'No image'}
        width={5000}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
      />
      <CardInfo>
        <div className={`${!isTrending ? 'normal-info' : 'trending-info'}`}>
          <div className='date-and-type'>
            <span className='date'>{parseInt(date)}</span>
            <span className='type'>{type}</span>
          </div>
          <div className='name'>
            <span>{movieName}</span>
          </div>
        </div>
      </CardInfo>
    </Card>
  )
}

const animate = keyframes`
  0%, 100% {
    transform: translateY(10px);
  }
  
  50% {
    transform: translate(-10px);
  }
`

const Card = styled.div`
  min-height: 150px;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 200px;

  :hover {
    .card-image.normal {
      /* transform: translateY(-20px) rotateX(7deg); */
      transform: translateY(-8%) rotateX(7deg);
      box-shadow: 0 5px 15px rgba(0,0,0,0.28);
    }
    .card-image.trending {
      transform: scale(.95);
    }
    .trending-info {
      transform: translate(10px, -10px);
    }

    span:after {
      width: 50px;
      height: 50px;
      opacity: 1;
    }
  }

  span::after {
    content:'';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: 0.5s;
    animation: ${animate} 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    animation-delay: -1s;
  }

  .card-image {
    object-fit: cover;
    object-position: left top;
    border-radius: 20px;
    width: auto;
    height: auto;
    transition: 0.3s;
  }
  
  .normal {
    width: 100%;
  }
  
  .trending {
    width: 300px;
    filter: brightness(60%);
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

const CardInfo = styled.div`
  .trending-info {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    transition: 0.3s;
  }

  .normal-info {
    font-size: .8em;
  }

  .date-and-type {
    display: flex;
    gap: 1.2em;
    color: rgb(var(--main-text-color), .7);
    font-size: .7em;

    .type {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -1em;
        top: 50%;
        transform: translate(50%, -50%);
        display: inline-block;
        background: rgb(var(--theme-main-color));
        padding: .2em;
        border-radius: 50%;
      }
    }
  }
`

export default MovieCard
