import styled from 'styled-components'

import FilmCardImage from './FilmCardImage'
import CardInfo from './FilmCardInfo'

import { breakpoints } from '@constants'
import { FilmItem, MediaType } from '@/src/types'

interface Props {
  type: MediaType
  data: FilmItem
}

const FilmCard2 = ({ type, data }: Props) => {
  const linkHref =
    type === 'movie' ? `/movies/${data.id}` : `/tv-series/${data.id}`

  return (
    data && (
      <Card className="film-card">
        <FilmCardImage
          data={data}
          path={data.poster_path}
          linkHref={linkHref}
          size={780}
        />
        <CardInfo data={data} type={type} linkHref={linkHref} overflow />
      </Card>
    )
  )
}

const Card = styled.div`
  --border-rad: 10px;
  max-width: 300px;
  border-radius: var(--border-rad);

  * {
    transition: 0.3s;
  }

  display: grid;
  grid-template-rows: 1fr 60px;
  gap: 0.3rem;

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
    border-radius: var(--border-rad);
  }

  .normal-info {
    flex-direction: column;
    position: relative;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: -3px;
      width: 0;
      height: 3px;
      background: linear-gradient(
        to right,
        transparent,
        rgb(var(--sub-theme-color))
      );
      transition: inherit;
      border-radius: var(--border-rad);
    }
  }

  :hover,
  :focus-within {
    .card-image {
      filter: brightness(50%);
      object-position: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);
      transform: scale(0.98);
    }

    .normal-info {
      ::before {
        width: 100%;
      }
    }
  }

  @media ${breakpoints.lg} {
    position: relative;
    height: 230px;

    & > * {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
    }

    .normal-info {
      position: absolute;
      padding-inline: 1rem;
      opacity: 0;

      .name {
        white-space: normal;
      }
    }

    :hover,
    :focus-within {
      .card-image {
        filter: brightness(30%);
        object-position: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);
      }

      .normal-info {
        opacity: 1;
        padding-inline: 1rem;
      }
    }
  }
`

export default FilmCard2
