import styled from 'styled-components'
import MovieCard from './Cards/FilmCard'

const FilmGrid = ({ title, data, centerTitle, mediaType }: { title?: string, data: any, centerTitle?: boolean, mediaType?: string }) => {

  return (
    <>
      {data?.[0] && <Divv centerTitle={centerTitle}>
        <h2>{title}</h2>
        <div className='film-list'>
          {
            data.map((film: any, i: number) => (
              <div key={i} className='box'>
                <MovieCard
                  imgSrc={film.backdrop_path}
                  movieName={film.title || film.name}
                  isTrending={false}
                  date={film.release_date || film.first_air_date}
                  type={film.media_type || mediaType}
                  id={film.id}
                />
              </div>
            ))
          }
        </div>
      </Divv>}
    </>
  )
}

const Divv = styled.div.attrs((props) => {
})`
  padding: 1rem 1rem;
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
