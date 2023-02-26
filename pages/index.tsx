import Meta from '@/src/Meta'
import PageLayout from '@/src/global/PageLayout'
import Category from '@/src/home/Category'
import { filmCategories } from '@/assets/film_info'

export default function Home() {

  return (
    <>
      <Meta />
      <PageLayout>
        {
          filmCategories.map(c =>
            <Category
              key={c.id}
              categoryName={c.name}
              showType={c.type}
              isTrending={c.isTrending}
              fetch_path={c.fetch_path}
            />
          )
        }
      </PageLayout>
    </>
  )
}

