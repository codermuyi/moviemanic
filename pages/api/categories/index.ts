import type { NextApiRequest, NextApiResponse } from 'next'

import type { FilmListResponse } from '@/src/types'
import { categoryPath, myFetch } from 'assets/utilities'
import { filmCategories } from '@/assets/film_info'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data_list: Array<FilmListResponse> = []

  for (let i = 0; i < filmCategories.length; i++) {
    const data: FilmListResponse = await myFetch(
      categoryPath(filmCategories[i].fetch_path),
    )
    data_list.push(data)
  }

  res.status(200).json(data_list)
}
