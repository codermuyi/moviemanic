import styled from 'styled-components'
import { SetStateAction, Dispatch } from 'react'

import UserFilmCard from '@/src/components/Cards/UserFilmCard'
import { getSeconds } from '@helpers'
import { SupabaseData } from '@/src/types'

const FilmList = ({
  filmList,
  setRandomNum,
}: {
  filmList: SupabaseData[]
  setRandomNum: Dispatch<SetStateAction<number>>
}) => {
  const newFilmList = filmList.sort((a, b) => {
    return getSeconds(b.created_at) - getSeconds(a.created_at)
  })

  const movies = newFilmList.filter((film) => film.media_type === 'movie')
  const tv_series = newFilmList.filter((film) => film.media_type === 'tv')

  const formatNum = (arr: SupabaseData[]) => arr.length > 0 && `(${arr.length})`

  return (
    <UserInfo>
      <div className="film-list">
        <div className="movie-list">
          <h2 className="title">Movies {formatNum(movies)}</h2>
          {movies?.[0] ? (
            <div className="film-grid">
              {movies.map((film, i) => (
                <UserFilmCard
                  key={i}
                  supabaseData={film}
                  setRandomNum={setRandomNum}
                />
              ))}
            </div>
          ) : (
            <p>Movies added to your list will show up here</p>
          )}
          <br />
        </div>
        <div className="tv-list">
          <h2 className="title">TV Series {formatNum(tv_series)}</h2>
          {tv_series?.[0] ? (
            <div className="film-grid">
              {tv_series.map((film, i) => (
                <UserFilmCard
                  key={i}
                  supabaseData={film}
                  setRandomNum={setRandomNum}
                />
              ))}
            </div>
          ) : (
            <p>TV Series added to your list will show up here</p>
          )}
          <br />
        </div>
      </div>
      {filmList.length === 0 && (
        <p style={{ marginBottom: '3rem' }}>
          *To add films to your list, click on the + icon on film poster
        </p>
      )}
    </UserInfo>
  )
}

const UserInfo = styled.div`
  padding: 1rem;

  .film-list {
    padding: 1rem;

    .movie-list,
    .tv-list {
      padding-bottom: 2rem;
    }

    .title {
      position: relative;
      font-size: 200%;

      ::before {
        content: '';
        position: absolute;
        left: -15px;
        height: 100%;
        width: 4px;
        background-color: rgb(var(--main-theme-color));
      }
    }

    p {
      padding: 1rem;
    }

    .film-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
      gap: 1rem;
      padding-block: 1rem;
    }
  }
`

export default FilmList
