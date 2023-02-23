import styled, { StyledComponent, css } from 'styled-components'
import Image from 'next/image'

import breakpoints from '@/assets/breakpoints'

// `https://image.tmdb.org/t/p/w1024${imgSrc}`

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
      <Image
        src={`https://image.tmdb.org/t/p/w1280${imgSrc}`}
        alt={movieName || 'No image'}
        width={5000}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
      />
      <CardInfo isTrending={isTrending}>
        <div>
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

const Card = styled.div`
  min-height: 150px;
  position: relative;

  .card-image {
    object-fit: cover;
    object-position: left top;
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

const CardInfo: StyledComponent<
  'div', any, { isTrending: boolean }
> = styled.div`
  .date-and-type {
    display: flex;
    gap: 1.2em;
    color: rgb(var(--main-text-color), .7);
    font-size: .7em;

    ${(props: any) => props.isTrending && css`
      & > div {
        position: absolute;
        /* inset: 0; */
        top: 0;
        right: 0;
        bottom: -50%;
        left: 0
      }
    `}

    .type {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -1em;
        top: 50%;
        transform: translate(50%, -50%);
        display: inline-block;
        /* background: rgb(var(--main-text-color)); */
        background: rgb(var(--theme-main-color));
        padding: .2em;
        border-radius: 50%;
      }
    }
  }
`

export default MovieCard
