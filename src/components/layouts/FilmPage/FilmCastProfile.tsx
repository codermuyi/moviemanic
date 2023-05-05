import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

import MovieWithCastDialog from './MovieWithCastDialog'

import { ProfileIcon } from '@atoms/SVGIcons'
import { FilmCast } from '@/src/types'

const CastProfile = ({ cast }: { cast: FilmCast }) => {
  const [src, setSrc] = useState('')

  return (
    <Cast className="cast">
      {cast.profile_path ? (
        <Image
          src={
            src === ''
              ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
              : src
          }
          alt={cast.name}
          width={150}
          height={150}
          style={{ objectFit: 'cover' }}
          className="cast-profile"
          onError={() => setSrc('/error-image.png')}
        />
      ) : (
        <ProfileIcon fill="gray" className="no-img-icon" />
      )}
      <div className="cast-info">
        <p>{cast.name}</p>
        <p className="role">{cast.character}</p>
      </div>
      <MovieWithCastDialog cast={cast} />
    </Cast>
  )
}

const Cast = styled.div`
  position: relative;

  .cast-profile {
    border-radius: 50%;
  }

  .no-img-icon {
    width: 160px;
    height: 160px;
  }

  .cast-info {
    font-size: 0.7em;
    text-align: center;

    .role {
      opacity: 0.6;
    }
  }
`

export default CastProfile
