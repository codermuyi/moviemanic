import { server } from 'config'
import CategoryPageLayout from '@layouts/CategoryPage'

export const getServerSideProps = async (ctx: any) => {
  const page = ctx.query.page || 1

  const res = await fetch(`${server}/api/categories/tv/${ctx.query.category}?page=${page}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      type: ctx.query.category
    },
  }
}

const TVCategoryPage = (props: any) => {
  return <CategoryPageLayout {...props} mediaType='tv' />
}


export default TVCategoryPage
