import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryPath, myFetch } from '@/assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const media = req.query.media

  const genreList = await myFetch(categoryPath(`genre/${media}/list`))

  res.status(200).json(genreList.genres)
}
