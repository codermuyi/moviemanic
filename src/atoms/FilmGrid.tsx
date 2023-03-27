import styled, { css } from 'styled-components'
import breakpoints from '@/assets/breakpoints'
import FilmCard2 from '../Cards/FilmCard2'
import FilmCard3 from '../Cards/FilmCard3'

interface GridProps {
  title?: string
  data: any
  centerTitle?: boolean
  mediaType?: string
  isGenre?: boolean
}

const FilmGrid = ({
  title,
  data,
  centerTitle,
  mediaType,
  isGenre
}: GridProps) => {

  return (
    <>
      {data?.[0] && <Divv centerTitle={centerTitle} isGenre={isGenre}>
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
          }
        }
      }
    `}

    @media ${breakpoints.xl} {

    }
  }
`

export default FilmGrid
