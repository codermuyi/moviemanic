import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const FilmCardImage = ({ isTrending, data, linkHref, path = ''}: any) => {

  const height = isTrending ? 170 : 130
  const width = isTrending ? 300 : 170
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path || data.backdrop_path}`)
  const filmName = data.title || data.name

  return (
    <Link href={linkHref} aria-label={filmName || 'film image'}>
      <Image
        src={src}
        alt={filmName || 'Film image'}
        width={width}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
        placeholder='blur'
        blurDataURL='/white-placeholder.png'
        onError={() => setSrc('/no-image-icon-2.png')}
      />
    </Link>
  )
}

export default FilmCardImage
