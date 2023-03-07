import type { NextApiRequest, NextApiResponse } from 'next'
import { searchPath, myFetch } from 'assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = req.query.query;

  const data = await myFetch(searchPath(`search/multi?query=${q}`))

  res.status(200).json(data)
}
