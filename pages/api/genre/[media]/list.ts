import type { NextApiRequest, NextApiResponse } from 'next'

import { categoryPath, myFetch, searchPath } from '@/assets/utilities'
import { FilmItem, Genre } from '@/src/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const path = req.query.media
  const filmList: FilmItem[] = []

  const genreList = await myFetch(categoryPath(`genre/${path}/list`))
  const genreIDs = genreList.genres.map((genre: Genre) => genre.id)

  for (let i = 0; i < genreIDs.length; i++) {
    const filmByGenre: FilmItem = await myFetch(
      searchPath(`discover/${path}?with_genres=${genreIDs[i]}`),
    )

    filmList.push(filmByGenre)
  }

  res.status(200).json({
    genreList: genreList.genres,
    filmList,
  })
}
