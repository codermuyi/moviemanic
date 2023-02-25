import Head from 'next/head'
import PageLayout from '@/src/global/PageLayout'
import Category from '@/src/home/Category'
import { filmCategories } from '@/assets/film_info'

export default function Home() {

  return (
    <>
      <Head>
        <title>Moviemanic</title>
        <meta name="description" content="Search for any movie and tv series" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

