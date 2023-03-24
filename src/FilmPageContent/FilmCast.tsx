import styled from 'styled-components'
import ScrollBar from '../atoms/ScrollBar';
import CastProfile from './FilmCastProfile'

const Casts = ({ credits }: { credits: any }) => { 
  return (
    <FilmCast>
      <h2 className='heading'>Casts</h2>
      {(credits.success === false || credits.cast.length === 0) && <p>No info.</p>}
      <ScrollBar>
        <div className='cast-list'>
          {credits.cast?.map((cast: any, i: number) => (
            <CastProfile key={i} cast={cast} />
          ))}
        </div>
      </ScrollBar>
    </FilmCast>
  )
}

const FilmCast = styled.div`
  .cast-list {
    display: flex;
    flex-grow: 0;
    gap: 1em;
    margin-top: 1rem;

    .cast {
      .cast-profile {
        border-radius: 50%;
      }

      svg {
        width: 160px;
        height: 160px;
      }
    }
  }

  .cast-info {
    font-size: .7em;
    text-align: center;

    .role {
      opacity: .6;
    }
  }
`

export default Casts
