import { server } from 'config'
import CategoryPageLayout from '@/src/CategoryPageContent/CategoryPageLayout'

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/categories/tv/${ctx.query.category}?page=${ctx.query.page}`)
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
