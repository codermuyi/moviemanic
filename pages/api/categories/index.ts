import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryPath, myFetch } from 'assets/utilities'
import { filmCategories } from '@/assets/film_info';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data_list = []

  for (let i = 0; i < filmCategories.length; i++) {
    const data = await myFetch(categoryPath(filmCategories[i].fetch_path))
    data_list.push(data)
  }

  res.status(200).json(data_list)
}
