import Image from 'next/image'
import { useState } from 'react'
import { ProfileIcon } from '../atoms/SVGIcons';

const CastProfile = (props: any) => {
  const { cast } = props;
  const [src, setSrc] = useState('')

  return (
    <div className='cast'>
      {cast.profile_path ?
        <Image
          src={src === '' ? `https://image.tmdb.org/t/p/w1280${cast.profile_path}` : src}
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
        <p className='role'>{cast.character && cast.character}</p>
      </div>
    </div>
  )
}

export default CastProfile
