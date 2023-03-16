import type { NextApiRequest, NextApiResponse } from 'next'
import { searchPath, myFetch } from 'assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = req.query.query;
  const page_no = req.query.page

  const data = await myFetch(searchPath(`search/multi?query=${q}&page=${page_no}`))

  res.status(200).json(data)
}
