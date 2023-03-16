import { server } from 'config'
import CategoryPageLayout from '@/src/CategoryPageContent/CategoryPageLayout'

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/categories/movie/${ctx.query.category}?page=${ctx.query.page}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      type: ctx.query.category
    },
  }
}

const MovieCategoryPage = (props: any) => {
  return <CategoryPageLayout {...props} mediaType='movie' />
}

export default MovieCategoryPage