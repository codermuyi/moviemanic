// import Category from '@components/Category'
import BlockTopLink from '@_atoms/BlockTopLink'
import BlockBottomLink from '@_atoms/BlockBottomLink'
// import { FilmListResponse } from '@/src/types'
// import { filmCategories } from 'assets/film_info'
// import { myFetch } from '@/assets/utilities'

export default async function HomePage() {
  // const data: FilmListResponse[] = await myFetch('/api/categories')

  return (
    <main>
      <BlockTopLink />
      {/* {filmCategories.map((c, i) => (
        <Category
          key={c.id}
          categoryName={c.name}
          showType={c.type}
          isTrending={c.isTrending}
          data={data[i]}
        />
      ))} */}
      <BlockBottomLink />
    </main>
  )
}
