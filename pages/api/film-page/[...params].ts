import type { NextApiRequest, NextApiResponse } from 'next'

import { filmPagePath, myFetch } from 'assets/utilities'
import {
  FilmListResponse,
  FilmCreditsResponse,
  FilmVideoResponse,
} from '@/src/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const params: string | string[] | undefined = req.query.params

  const info: FilmListResponse = await myFetch(filmPagePath(params))
  const credits: FilmCreditsResponse = await myFetch(
    filmPagePath(params, '/credits'),
  )
  const similar: FilmListResponse = await myFetch(
    filmPagePath(params, '/recommendations'),
  )
  const videoData: FilmVideoResponse = await myFetch(
    filmPagePath(params, '/videos'),
  )

  res.status(200).json({
    info,
    credits,
    similar,
    videoData,
  })
}
