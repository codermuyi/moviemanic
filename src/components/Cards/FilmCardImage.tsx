import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { FilmItem, FilmDetailsType, SearchResultItem } from '@/src/types'

interface ImageProps {
  isTrending?: boolean
  data: FilmItem | FilmDetailsType | SearchResultItem
  linkHref: string
  path?: string
  errorPath?: string
  size?: 185 | 300 | 500 | 780 | 1280
}

const FilmCardImage = ({
  isTrending,
  data,
  linkHref,
  path = '',
  errorPath = '',
  size = 1280,
}: ImageProps) => {
  const imagePath = `
    https://image.tmdb.org/t/p/w${size}${path || data.backdrop_path}
  `
  const [src, setSrc] = useState(imagePath)
  const [style, setStyle] = useState({})
  const height = isTrending ? 170 : 130
  const width = isTrending ? 300 : 170
  const filmName = data.title || data.name

  useEffect(() => {
    setSrc(imagePath)
  }, [imagePath])

  return (
    <Link
      href={linkHref}
      className={`film-card-${!isTrending ? 'normal' : 'trending'}-link`}
    >
      <Image
        src={src}
        alt={filmName || 'Film image'}
        width={width}
        height={height}
        className={`card-image ${!isTrending ? 'normal' : 'trending'}`}
        placeholder="blur"
        blurDataURL="/white-placeholder.png"
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
