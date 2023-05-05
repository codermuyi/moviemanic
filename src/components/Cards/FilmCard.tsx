import styled, { keyframes } from 'styled-components'

import CardImage from './FilmCardImage'
import CardInfo from './FilmCardInfo'

import { breakpoints } from '@constants'
import { FilmItem, MediaType } from '@/src/types'

interface Props {
  isTrending?: boolean
  type: MediaType
  data: FilmItem
}

const FilmCard = ({ isTrending, type, data }: Props) => {
  const linkHref =
    type === 'movie' ? `/movies/${data.id}` : `/tv-series/${data.id}`

  return (
    data && (
      <Card className="film-card">
        <CardImage
          isTrending={isTrending}
          data={data}
          linkHref={linkHref}
          size={1280}
        />
        <CardInfo
          isTrending={isTrending}
          data={data}
          type={type}
          linkHref={linkHref}
          overflow
        />
        <span></span>
      </Card>
    )
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
  transform-style: preserve-3d;
  perspective: 200px;

  .card-image {
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    width: auto;
    height: auto;
    transition: 0.3s;

    &.normal {
      width: 100%;
    }
    &.trending {
      width: 300px;
      filter: brightness(60%);
    }

    @media ${breakpoints.md} {
      &.trending {
        width: 350px;
        height: 200px;
      }
    }

    @media ${breakpoints.lg} {
      &.normal {
        height: 180px;
      }
      &.trending {
        width: 400px;
        height: 250px;
      }
    }

    @media ${breakpoints.xl} {
      &.trending {
        width: 500px;
        height: 300px;
      }
    }
  }

  span::after {
    content: '';
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
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    animation-delay: -1s;
    pointer-events: none;
  }

  .film-card-normal-link {
    display: block;
    transition: inherit;
  }

  :hover,
  :focus-within {
    .film-card-normal-link {
      transform: translateY(-8%) rotateX(7deg);
    }
    .card-image {
      &.normal {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.38);
      }
      &.trending {
        transform: scale(0.95);
      }
    }

    .trending-info {
      transform: translate(10px, -15px);
    }

    span:after {
      width: 50px;
      height: 50px;
      opacity: 1;
    }
  }
`

export default FilmCard
