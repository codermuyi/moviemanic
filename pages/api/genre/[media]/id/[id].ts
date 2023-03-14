import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryPath, myFetch, searchPath } from '@/assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const media = req.query.media
  const id = req.query.id

  const data = await myFetch(searchPath(`discover/${media}?with_genres=${id}`))

  const genreList = await myFetch(categoryPath(`genre/${media}/list`))
  const genre = genreList.genres.filter((genre: any) => genre.id == id)

  res.status(200).json({
    name: genre[0].name,
    data: data.results
  })
}
