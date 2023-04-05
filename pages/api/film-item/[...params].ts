import type { NextApiRequest, NextApiResponse } from 'next'
import { filmPagePath, myFetch } from 'assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params: string | string[] | undefined = req.query.params;

  let data = await myFetch(filmPagePath(params))

  res.status(200).json(data)
}
