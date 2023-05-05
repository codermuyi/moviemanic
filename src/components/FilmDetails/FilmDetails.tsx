import styled from 'styled-components'

import { formatDate } from '@helpers'
import { FilmDetailsType } from '@/src/types'

const FilmDetails = ({
  runtime,
  spoken_languages,
  release_date,
  status,
  genres,
  overview,
  first_air_date,
  last_air_date,
  number_of_seasons,
  number_of_episodes,
}: FilmDetailsType) => {
  return (
    <Details>
      <div className="series-detail">
        {number_of_seasons ? (
          <div>
            <p className="heading">Seasons</p>
            <p> {number_of_seasons}</p>
          </div>
        ) : null}
        {number_of_episodes ? (
          <div>
            <p className="heading">Episodes</p>
            <p> {number_of_episodes}</p>
          </div>
        ) : null}
      </div>

      <Details1>
        {runtime ? (
          <div>
            <span className="heading">Duration</span>
            <span>{runtime} min.</span>
          </div>
        ) : null}
        <div>
          <span className="heading">Language</span>
          <span>{spoken_languages?.[0]?.english_name || 'N/A'}</span>
        </div>
        <div>
          <span className="heading">Status</span>
          <span>{status || 'N/A'}</span>
        </div>
        {release_date ? (
          <div>
            <span className="heading">Release Date</span>
            <span>{formatDate(release_date)}</span>
          </div>
        ) : null}
        {first_air_date ? (
          <>
            <div>
              <span className="heading">Pilot</span>
              <span>{formatDate(first_air_date)}</span>
            </div>
            <div>
              <span className="heading">Last Air</span>
              <span>{formatDate(last_air_date || '') || 'N/A'}</span>
            </div>
          </>
        ) : null}
      </Details1>

      <Details2>
        <div className="synopsis">
          <h2 className="heading">Overview</h2>
          <p>{overview ? overview : 'No info.'}</p>
        </div>
        <div className="genres">
          <h2 className="heading">Genres</h2>
          <ul>
            {genres === undefined && <p>No info</p>}
            {genres?.map((genre, i) => (
              <li key={i}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </Details2>
    </Details>
  )
}

const Details = styled.div`
  .series-detail {
    display: flex;
    max-width: 700px;
    justify-content: center;
    gap: 2rem;

    div {
      text-align: center;
      padding-bottom: 1rem;
    }
  }
`

const Details1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  margin-bottom: 2rem;
  max-width: 700px;

  @media (max-width: 300px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    gap: 0.2em;

    .heading {
      opacity: 0.7;
    }
    span:not(.heading) {
      font-size: 0.8em;
    }
  }
`

const Details2 = styled.div`
  .heading {
    margin-top: 0.5em;
  }

  .genres {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4em;
      font-size: 0.8em;
      padding-block: 1rem;
      font-family: 'Lexend', sans-serif;

      li {
        background-color: rgb(var(--main-text-color));
        color: rgb(var(--sec-text-color));
        border-radius: 8px;
        padding: 0.2em 0.3em;
      }
    }
  }

  .synopsis p {
    padding-block: 1rem;
    max-width: 70ch;
  }
`

export default FilmDetails
