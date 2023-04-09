import { server } from 'config'
import CategoryPageLayout from '@layouts/CategoryPage'

export const getServerSideProps = async (ctx: any) => {
  const page = ctx.query.page || 1

  const res = await fetch(`${server}/api/categories/movie/${ctx.query.category}?page=${page}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      name: ctx.query.category
    },
  }
}

const MovieCategoryPage = (props: any) => {
  return <CategoryPageLayout {...props} mediaType='movie' />
}

export default MovieCategoryPage