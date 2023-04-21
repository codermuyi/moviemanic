import type { NextApiRequest, NextApiResponse } from 'next'
import { myFetch, searchPath } from 'assets/utilities'
import { filmCategories } from '@/assets/film_info';
import type { FilmListResponse } from '@/src/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const category: string | string[] | undefined = req.query.category;
  const page_no = req.query.page

  const newCat = filmCategories.filter(cat => {
    return (
      cat.name.toLowerCase() === category?.[1] &&
      cat.type === category[0]
    )
  })[0]

  const data: FilmListResponse = await myFetch(searchPath(`${newCat.fetch_path}?page=${page_no}`))

  res.status(200).json(data)
}
