import type { NextApiRequest, NextApiResponse } from 'next'
import { filmPagePath, myFetch } from 'assets/utilities'
import { FilmListResponse, FilmCreditsResponse, FilmVideoResponse } from '@/src/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params: string | string[] | undefined = req.query.params;
  
  let info: FilmListResponse = await myFetch(filmPagePath(params))
  let credits: FilmCreditsResponse = await myFetch(filmPagePath(params, '/credits'))
  let similar: FilmListResponse = await myFetch(filmPagePath(params, '/recommendations'))
  let videoData: FilmVideoResponse = await myFetch(filmPagePath(params, '/videos'))

  res.status(200).json({
    info,
    credits,
    similar,
    videoData
  })
}
