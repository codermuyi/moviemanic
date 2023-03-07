import type { NextApiRequest, NextApiResponse } from 'next'
import { filmPagePath, myFetch } from 'assets/utilities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params: string | string[] | undefined = req.query.params;

  console.log(req.query.params)

  const pathArray = ['', '/credits', '/recommendations', '/videos']

  let data_list = []
  for (let i = 0; i < pathArray.length; i++) {
    let data = await myFetch(filmPagePath(params, pathArray[i]))
    data_list.push(data)
  }

  res.status(200).json(data_list)
}
