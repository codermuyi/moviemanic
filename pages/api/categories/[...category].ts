import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryPath, myFetch } from 'assets/utilities'
import { filmCategories } from '@/assets/film_info';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const category: string | string[] | undefined = req.query.category;

  const newCat = filmCategories.filter(cat => {
    return (
      cat.name.toLowerCase() === category?.[1] &&
      cat.type === category[0]
    )
  })[0]

  const data = await myFetch(categoryPath(newCat.fetch_path))

  res.status(200).json(data)
}
