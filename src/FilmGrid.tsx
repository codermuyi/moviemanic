import styled from 'styled-components'
import FilmCard from './Cards/FilmCard'

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
      {data?.[0] && <Divv centerTitle={centerTitle}>
        {title && <h2>{title}</h2>}
        <div className='film-list'>
          {
            data.map((film: any, i: number) => {
              if (isGenre && i > 4) return
              return <div key={i} className='box'>
                <FilmCard
                  isTrending={false}
                  type={film.media_type || mediaType}
                  data={film}
                />
              </div>
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
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1em;

    .box {
      width: 100%;
      max-width: 350px;

      .card-image {
        max-height: 150px;
      }
    }
  }
`

export default FilmGrid
