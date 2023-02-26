import styled from 'styled-components'
import Casts from './Casts'
import breakpoints from '@/assets/breakpoints'
import Trailer from './Trailer'

interface Info {
  title: string
  original_title: string
  tagline: string
  runtime: string
  spoken_languages: Array<{ english_name: string }>
  release_date: string
  status: string
  genres: Array<{ name: string }>
  overview: string
  credits: any
  trailerID: string
}

const FilmInfo = ({
  title,
  original_title,
  tagline,
  runtime,
  spoken_languages,
  release_date,
  status,
  genres,
  overview,
  credits,
  trailerID,
}: Info) => {
  return (
    <Info>
      <Trailer id={trailerID} />
      <Name>
        <h1>{title || original_title}</h1>
        <p className='tagline'>{tagline}</p>
        <div className='ratings'>

        </div>
      </Name>
      <Details1>
        <div>
          <span className='heading'>Duration</span>
          <span>{runtime} min.</span>
        </div>
        <div>
          <span className='heading'>Language</span>
          <span>{spoken_languages[0].english_name}</span>
        </div>
        <div>
          <span className='heading'>Year</span>
          <span>{parseInt(release_date)}</span>
        </div>
        <div>
          <span className='heading'>Status</span>
          <span>{status}</span>
        </div>
      </Details1>
      <Details2>
        <div className='genres'>
          <h2 className='heading'>Genres</h2>
          <ul>
            {genres.map((genre, i) => (
              <li key={i}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div className='synopsis'>
          <h2 className='heading'>Synopsis</h2>
          <p>{overview}</p>
        </div>
        <Casts credits={credits} />
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
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 300px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    font-size: .9em;
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
