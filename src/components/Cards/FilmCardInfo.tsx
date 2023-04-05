import styled, { css } from 'styled-components'
import Link from 'next/link'

interface Props {
  isTrending: boolean
  type: string
  data: any
  linkHref: string
  overflow?: boolean
}

const FilmCardInfo = ({
  isTrending,
  type,
  data,
  linkHref,
  overflow
}: Props) => {
  const filmType = type === 'tv' ? 'TV Series' : 'Movie'
  const date = parseInt(data.release_date || data.first_air_date) || 'N/A'
  const filmName = data.title || data.name
  const className = !isTrending ? 'normal-info' : 'trending-info'

  return (
    <CardInfo className={className} o={overflow}>
      <div className='name'>
        <Link href={linkHref} tabIndex={-1}>
          <span>{filmName}</span>
        </Link>
      </div>
      <div className='date-and-type'>
        <span className='date'>{date}</span>
        <span className='type'>{filmType}</span>
      </div>
    </CardInfo>
  )
}

const CardInfo = styled.div.attrs(p => { })`
  a:hover {
    text-decoration: underline;
  }

  &.trending-info {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    transition: 0.3s;
  }

  &.normal-info {
    font-size: .8em;
  }

  ${p => !p.o && css`
    .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `}

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
        background: rgb(var(--main-theme-color));
        padding: .2em;
        border-radius: 50%;
      }
    }
  }
`

export default FilmCardInfo
