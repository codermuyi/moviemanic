import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const FilmCardImage = ({
  isTrending,
  data,
  linkHref,
  path = '',
  errorPath = ''
}: any) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path || data.backdrop_path}`)
  const [style, setStyle] = useState({})
  const height = isTrending ? 170 : 130
  const width = isTrending ? 300 : 170
  const filmName = data.title || data.name

  useEffect(() => {
    setSrc(`https://image.tmdb.org/t/p/w1280${path || data.backdrop_path}`)
  }, [path, data])

  return (
    <Link href={linkHref} className={`film-card-${!isTrending ? 'normal' : 'trending'}-link`}>
      <Image
        src={src}
        alt={filmName || 'Film image'}
        width={width}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
        placeholder='blur'
        blurDataURL='/white-placeholder.png'
        onError={() => {
          setSrc(errorPath || '/no-image.svg')
          setStyle({ objectPosition: 'center' })
        }}
        style={style}
      />
    </Link>
  )
}

export default FilmCardImage