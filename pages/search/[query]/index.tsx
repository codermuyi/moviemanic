import { SWRConfig } from 'swr'

import { server } from 'config'
import SearchPageLayout from '@layouts/SearchPage'

const SearchResults = ({ searchQuery, fallback, ctxQuery }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <SearchPageLayout searchQuery={searchQuery} contextQuery={ctxQuery} />
    </SWRConfig>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const q = ctx.params.query
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
