import { SWRConfig } from 'swr'
import { GetServerSidePropsContext } from 'next'

import { server } from 'config'
import SearchPageLayout from '@layouts/SearchPage'
import { FilmListResponse } from '@/src/types'

interface Props {
  searchQuery: string
  fallback: { [key: string]: FilmListResponse }
  ctxQuery: { page: string }
}

const SearchResults = ({ searchQuery, fallback, ctxQuery }: Props) => {
  return (
    <SWRConfig value={{ fallback }}>
      <SearchPageLayout searchQuery={searchQuery} contextQuery={ctxQuery} />
    </SWRConfig>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const q = ctx.params?.query
  const apiPath = `/api/search/${q}?page=${ctx.query.page}`
  const res = await fetch(`${server}${apiPath}`)
  const data = await res.json()

  return {
    props: {
      searchQuery: q,
      fallback: {
        [apiPath]: data,
      },
      ctxQuery: ctx.query,
    },
  }
}

export default SearchResults
