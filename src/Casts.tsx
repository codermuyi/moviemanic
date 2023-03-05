import Image from 'next/image'
import styled from 'styled-components'
import { ProfileIcon } from './global/SVGIcons'
import SimpleBar from 'simplebar-react';
import { useState } from 'react'

const Casts = ({ credits }: { credits: any }) => {
  const [src, setSrc] = useState('')
  
  return (
    <FilmCast>
      <h2 className='heading'>Casts</h2>
      <SimpleBar>
        <div className='cast-list'>
          {credits.cast.map((cast: any, i: number) => (
            <div key={i} className='cast'>
              {cast.profile_path ?
                <Image
                  src={src === '' ? `https://image.tmdb.org/t/p/w1280${cast.profile_path}`: src}
                  alt={cast.name}
                  width={150}
                  height={150}
                  style={{ objectFit: 'cover' }}
                  className='cast-profile'
                  onError={() => setSrc('/error-image.png')}
                /> :
                <ProfileIcon fill='gray' />
              }
              <div className='cast-info'>
                <p>{cast.name}</p>
                <p className='role'>{cast.character && 'Played ' + cast.character}</p>
              </div>
            </div>
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
