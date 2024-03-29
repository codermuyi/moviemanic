import styled, { css } from 'styled-components'

import FilmCard2 from '@components/Cards/FilmCard2'
import FilmCard3 from '@components/Cards/FilmCard3'
import ListStyleCard from '@components/Cards/ListStyleCard'
import { breakpoints } from '@constants'
import { FilmList, MediaType } from '@/src/types'

interface GridProps {
  title?: string
  data?: FilmList
  centerTitle?: boolean
  mediaType?: MediaType
  isGenre?: boolean
  isListStyle?: boolean
  completeList?: boolean
}

interface GridDivProps {
  isGenre?: boolean
  isListStyle?: boolean
  centerTitle?: boolean
}

const FilmGrid = ({
  title,
  data,
  centerTitle,
  mediaType,
  isGenre,
  isListStyle,
  completeList,
}: GridProps) => {
  return (
    <>
      {data?.[0] && (
        <Grid
          centerTitle={centerTitle}
          isGenre={isGenre}
          isListStyle={isListStyle}
        >
          {title && <h2>{title}</h2>}
          <div className="film-list">
            {data.map((film, i) => {
              if (isGenre) {
                if (i > 4 && !completeList) return
                return (
                  <FilmCard3
                    key={i}
                    type={film.media_type || mediaType}
                    data={film}
                  />
                )
              }
              if (isListStyle) {
                if (i > 2 && !completeList) return
                return (
                  <ListStyleCard
                    key={i}
                    type={film.media_type || mediaType}
                    data={film}
                  />
                )
              }
              return (
                <FilmCard2
                  key={i}
                  type={film.media_type || mediaType}
                  data={film}
                />
              )
            })}
          </div>
        </Grid>
      )}
    </>
  )
}

const Grid = styled.div<GridDivProps>`
  padding: 1rem;
  grid-column: 1 / -1;

  h2 {
    text-align: ${(props) => (props.centerTitle ? 'center' : 'left')};
    margin-block: 0 2rem;
    text-transform: capitalize;
  }

  .film-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;

    ${(p) =>
      p.isGenre &&
      css`
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));

        @media ${breakpoints.md} {
          .film-card {
            &:first-child {
              grid-row: 1 / 3;
              grid-column: 1 / 3;
              height: 90%;
              font-size: 1.25rem;
            }
          }
        }
      `}

    ${(p) =>
      p.isListStyle &&
      css`
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      `}
  }
`

export default FilmGrid
