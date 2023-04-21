import type { GetServerSidePropsContext } from 'next'
import Meta from '@components/atoms/Meta'
import Category from '@components/Category'
import BlockTopLink from '@atoms/BlockTopLink'
import BlockBottomLink from '@atoms/BlockBottomLink'

import type { FilmListResponse } from '@/src/types'
import { filmCategories } from 'assets/film_info'
import { server } from 'config'
import { routeGuard } from '@/src/routeGuard'

export default function Home({ data }: {data: Array<FilmListResponse>}) {
  return (
    <>
      <Meta title='Moviemanic' />
      <BlockTopLink />
      {
        filmCategories.map((c, i) =>
          <Category
            key={c.id}
            categoryName={c.name}
            showType={c.type}
            isTrending={c.isTrending}
            data={data[i]}
          />
        )
      }
      <BlockBottomLink />
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return await routeGuard(ctx, true, `${server}/api/categories`)
}
