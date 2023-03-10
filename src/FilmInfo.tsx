import styled from 'styled-components'
import Casts from './Casts'
import Trailer from './Trailer'
import FilmExternalSource from './FilmExternalSource'
import StarRating from './FilmRating'

interface Info {
  title: string
  name: string
  tagline: string
  runtime: string
  spoken_languages: Array<{ english_name: string }>
  release_date: string
  status: string
  genres: Array<{ name: string }>
  overview: string
  credits: any
  trailerID: string
  first_air_date: string
  last_air_date: string
  vote_average: number
  imdb_id: string
  homepage: string
}

const FilmInfo = ({
  title,
  name,
  tagline,
  runtime,
  spoken_languages,
  release_date,
  status,
  genres,
  overview,
  credits,
  trailerID,
  first_air_date,
  last_air_date,
  vote_average,
  imdb_id,
  homepage
}: Info) => {

  function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('en-US', options)
  }

  return (
    <Info>
      <Trailer id={trailerID} />
      <Name>
        <h1>
          {title || name}
          {(!title && !name) && '404: this page is invalid'}
        </h1>
        <p className='tagline'>{tagline}</p>
        <StarRating vote_average={vote_average} />
      </Name>
      <Details1>
        {
          runtime ? <div>
            <span className='heading'>Duration</span>
            <span>{runtime} min.</span>
          </div> : null
        }
        <div>
          <span className='heading'>Language</span>
          <span>{spoken_languages?.[0]?.english_name || 'N/A'}</span>
        </div>
        <div>
          <span className='heading'>Status</span>
          <span>{status || 'N/A'}</span>
        </div>
        {
          release_date ? <div>
            <span className='heading'>Release Date</span>
            <span>{formatDate(release_date)}</span>
          </div> : null
        }
        {
          first_air_date ? <>
            <div>
              <span className='heading'>Pilot</span>
              <span>{first_air_date}</span>
            </div>
            <div>
              <span className='heading'>Last Air</span>
              <span>{last_air_date}</span>
            </div>
          </> : null
        }
      </Details1>
      <Details2>
        <div className='synopsis'>
          <h2 className='heading'>Overview</h2>
          <p>{overview ? overview : 'No info.'}</p>
        </div>
        <div className='genres'>
          <h2 className='heading'>Genres</h2>
          <ul>
          {genres === undefined && <p>No info</p>}
            {genres?.map((genre, i) => (
              <li key={i}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <Casts credits={credits} />
        <FilmExternalSource imdb={imdb_id} website={homepage} />
      </Details2>
    </Info>
  )
}

const Info = styled.div`
  padding-inline: 1rem;
`

const Name = styled.div`
  text-align: center;
  padding-block: 2rem;

  .tagline {
    font-size: .8em;
    opacity: .8;
  }
`

const Details1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 300px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    font-size: .8em;
    gap: .2em;

    .heading {
      opacity: .7;
    }
    span:not(.heading) {
      font-size: .8em;
    }
  }
`

const Details2 = styled.div`
  .heading {
    margin-top: .5em;
  }

  .genres {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: .4em;
      font-size: .8em;
      padding-block: 1rem;
      font-family: 'Lexend', sans-serif;

      li {
        background-color: white;
        color: rgb(var(--sec-text-color));
        border-radius: 8px;
        padding: .2em .3em;
      }
    }
  }

  .synopsis p {
    padding-block: 1rem;
  }
`

export default FilmInfo
