import Meta from '@/src/atoms/Meta'
import PageLayout from '@/src/Layout/PageLayout'
import Category from '@/src/Category'
import { filmCategories } from '@/assets/film_info'
import { server } from 'config'
import BlockTopLink from '@/src/BlockTopLink'
import BlockBottomLink from '@/src/BlockBottomLink'

export default function Home({ data }: any) {
  return (
    <>
      <Meta title='Moviemanic' />
      <PageLayout>
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
      </PageLayout>
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
