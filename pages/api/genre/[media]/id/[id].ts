import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryPath, myFetch, searchPath } from '@/assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.query.media
  const id = req.query.id

  const data = await myFetch(searchPath(`discover/${path}?with_genre=${id}`))

  res.status(200).json(data)
}
