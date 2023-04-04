import Meta from '@components/atoms/Meta'
import Category from '@components/Category'
import BlockTopLink from '@atoms/BlockTopLink'
import BlockBottomLink from '@atoms/BlockBottomLink'
import RouteGuard from '@atoms/RouteGuard'

import { filmCategories } from 'assets/film_info'
import { server } from 'config'

export default function Home({ data }: any) {
  return (
    <>
      <Meta title='Moviemanic' />
      <RouteGuard>
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
      </RouteGuard>
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/categories`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
