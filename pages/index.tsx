import Meta from '@/src/Meta'
import PageLayout from '@/src/global/PageLayout'
import Category from '@/src/home/Category'
import { filmCategories } from '@/assets/film_info'
import { server } from 'config'

export default function Home({ data }: any) {
  return (
    <>
      <Meta />
      <PageLayout>
        {
          filmCategories.map((c, i) =>
            <Category
              key={c.id}
              categoryName={c.name}
              showType={c.type === 'tv' ? 'TV Series' : 'Movie'}
              isTrending={c.isTrending}
              data={data[i]}
            />
          )
        }
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

