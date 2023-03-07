import Image from 'next/image'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react';
import CastProfile from './CastProfile'

const Casts = ({ credits }: { credits: any }) => {  
  return (
    <FilmCast>
      <h2 className='heading'>Casts</h2>
      <SimpleBar>
        <div className='cast-list'>
          {credits.cast.map((cast: any, i: number) => (
            <CastProfile key={i} cast={cast} />
          ))}
        </div>
      </SimpleBar>
    </FilmCast>
  )
}

const FilmCast = styled.div`
  .simplebar-scrollbar {
    height: .8rem;
  }

  .simplebar-scrollbar::before {
    background-color: rgb(var(--theme-main-color));
  }
  
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
      opacity: .7;
    }
  }
`

export default Casts
