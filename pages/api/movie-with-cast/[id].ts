import type { NextApiRequest, NextApiResponse } from 'next'
import { myFetch, searchPath } from '@/assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id
  const page = req.query.page || 1

  const data = await myFetch(searchPath(`discover/movie?with_cast=${id}&page=${page}`))

  res.status(200).json(data)
}
