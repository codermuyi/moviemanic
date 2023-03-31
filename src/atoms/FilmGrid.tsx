import styled, { css } from 'styled-components'
import breakpoints from '@/assets/breakpoints'
import FilmCard2 from '../Cards/FilmCard2'
import FilmCard3 from '../Cards/FilmCard3'
import ListStyleCard from '../Cards/ListStyleCard'

interface GridProps {
  title?: string
  data: any
  centerTitle?: boolean
  mediaType?: string
  isGenre?: boolean
  isListStyle?: boolean
}

const FilmGrid = ({
  title,
  data,
  centerTitle,
  mediaType,
  isGenre,
  isListStyle
}: GridProps) => {

  return (
    <>
      {data?.[0] && <Divv centerTitle={centerTitle} isGenre={isGenre} isListStyle={isListStyle}>
        {title && <h2>{title}</h2>}
        <div className='film-list'>
          {
            data.map((film: any, i: number) => {
              if (isGenre) {
                if (i > 4) return
                return <FilmCard3
                  key={i}
                  isTrending={false}
                  type={film.media_type || mediaType}
                  data={film}
                />
              }
              if (isListStyle) {
                if (i > 2) return
                return <ListStyleCard
                  key={i}
                  isTrending={false}
                  type={film.media_type || mediaType}
                  data={film}
                />
              }
              return <FilmCard2
                key={i}
                isTrending={false}
                type={film.media_type || mediaType}
                data={film}
              />
            })
          }
        </div>
      </Divv>}
    </>
  )
}

const Divv = styled.div.attrs((props) => {
})`
  padding: 1rem;
  grid-column: 1 / -1;

  h2 {
    text-align: ${props => props.centerTitle ? 'center' : 'left'};
    margin-block: 0 2rem;
    text-transform: capitalize;
  }

  .film-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    
    ${p => p.isGenre && css`
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));

      .film-card {
        @media ${breakpoints.md} {
          &:first-child {
            grid-row: 1 / 3;
            grid-column: 1 / 3;
            height: 90%;
            font-size: 1.25rem;
          }
        }
      }
    `}

    ${p => p.isListStyle && css`
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    `}

    @media ${breakpoints.xl} {

    }
  }
`

export default FilmGrid
