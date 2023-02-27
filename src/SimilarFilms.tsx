import styled from 'styled-components'
import MovieCard from './MovieCard'

const SimilarFilms = ({ data }: { data: any }) => {
  return (
    <>
      {data[0] && <Divv>
        <h2>More Like This</h2>
        <div className='film-list'>
          {
            data.map((film: any, i: number) => (
              <div key={i} className='box'>
                <MovieCard
                  imgSrc={film.backdrop_path}
                  movieName={film.title || film.name}
                  isTrending={false}
                  date={film.release_date || film.first_air_date}
                  type={film.media_type === 'tv' ? 'TV Series' : 'Movie'}
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

const Divv = styled.div`
  padding: 2rem 1rem;
  grid-column: 1 / -1;

  h2 {
    text-align: center;
    margin-block: 1rem 3rem;
  }

  .film-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;

    .box {
      width: 240px;
      .card-image {
        height: 150px;
      }
    }
  }
`

export default SimilarFilms
