import type { NextApiRequest, NextApiResponse } from 'next'

import { categoryPath, myFetch, searchPath } from '@/assets/utilities'
import { Genre } from '@/src/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const media = req.query.media
  const id = Number(req.query.id)
  const page = req.query.page || 1

  const data = await myFetch(
    searchPath(`discover/${media}?with_genres=${id}&page=${page}`),
  )

  const genreList = await myFetch(categoryPath(`genre/${media}/list`))
  const genre: Genre[] = genreList.genres.filter(
    (genre: Genre) => genre.id == id,
  )

  res.status(200).json({
    name: genre[0].name,
    data,
    id,
  })
}
