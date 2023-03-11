import styled from 'styled-components'
import MovieCard from './MovieCard'

const SimilarFilms = ({ title, data, centerTitle, mediaType }: { title?: string, data: any, centerTitle?: boolean, mediaType?: string }) => {

  function determineMediaType(type: string): string {
    if (type)
      if (type === 'tv')
        return 'TV Series'
      else
        return 'Movie'
    else
      if (mediaType === 'tv')
        return 'TV Series'
      else
        return 'Movie'
  }

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
                  type={determineMediaType(film.media_type)}
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
  // centerTitle: props.centerTitle
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

      .card-image {
        max-height: 150px;
      }
    }
  }
`

export default SimilarFilms
