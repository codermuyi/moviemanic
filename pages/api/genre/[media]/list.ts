import type { NextApiRequest, NextApiResponse } from 'next'

import { categoryPath, myFetch, searchPath } from '@/assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const path = req.query.media
  const filmList: any = []

  const genreList = await myFetch(categoryPath(`genre/${path}/list`))
  const genreIDs = genreList.genres.map((genre: any) => genre.id)

  for (let i = 0; i < genreIDs.length; i++) {
    const filmByGenre = await myFetch(
      searchPath(`discover/${path}?with_genres=${genreIDs[i]}`),
    )

    filmList.push(filmByGenre)
  }

  res.status(200).json({
    genreList,
    filmList,
  })
}
