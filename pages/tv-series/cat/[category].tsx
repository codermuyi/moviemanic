import type { GetServerSidePropsContext } from 'next'

import type { FilmListResponse } from '@/src/types'
import { server } from 'config'
import CategoryPageLayout from '@layouts/CategoryPage'

interface Props {
  data: FilmListResponse
  name: string
}

const TVCategoryPage = (props: Props) => {
  return <CategoryPageLayout {...props} mediaType='tv' />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const page = ctx.query.page || 1

  const res = await fetch(`${server}/api/categories/tv/${ctx.query.category}?page=${page}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      name: ctx.query.category
    },
  }
}

export default TVCategoryPage
