import styled from 'styled-components'

import FilmCardImage from './FilmCardImage'
import CardInfo from './FilmCardInfo'
import { breakpoints } from '@constants'

interface Props {
  type: string
  data: any
}

const FilmCard3 = ({
  type,
  data
}: Props) => {
  const linkHref = type === 'movie' ? `/movies/${data.id}` : `/tv-series/${data.id}`

  return data && (
    <Card className='film-card'>
      <FilmCardImage
        data={data}
        linkHref={linkHref}
        size={780}
      />
      <CardInfo
        data={data}
        type={type}
        linkHref={linkHref}
      />
    </Card>
  )
}

const Card = styled.div`
  --border-rad: 10px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: var(--border-rad);
  
  * {
    transition: .3s;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
    border-radius: var(--border-rad);
  }
  
  :hover,
  :focus-within {
    .card-image {
      transform: scale(1.03);
      filter: brightness(60%);
    }
  }

  @media ${breakpoints.lg} {
    margin: 0;

    position: relative;
  
    & > * {
      position: absolute;
      inset: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .normal-info .name {
      white-space: normal;
    }

    :hover,
    :focus-within {
      border-right: 5px solid rgb(var(--main-theme-color));

      .card-image {
        object-position: center;
        filter: brightness(30%);
        box-shadow: 0 5px 15px rgba(0,0,0,0.38);
        transform: scale(1.01);
      }

      .normal-info {
        opacity: 1;

        .name {
          white-space: normal;
        }
      }
    }
  }

  @media ${breakpoints.mdMax} {
    .card-image {
      height: 80%;
    }
  }
  
  .normal-info {
    @media ${breakpoints.lg} {
      padding-inline: 1rem;
      opacity: 0;
    }
  }
`

export default FilmCard3
