import { server } from 'config'
import { SWRConfig } from 'swr'

import SearchPageContent from '@/src/Search/SearchPageContent'

const SearchResults = ({
  searchQuery,
  fallback,
  ctxQuery
}: { [key: string]: any }) => {

  return (
    <SWRConfig value={{ fallback }}>
      <SearchPageContent
        searchQuery={searchQuery}
        contextQuery={ctxQuery}
      />
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
        [apiPath]: data
      },
      ctxQuery: ctx.query
    }
  }
}

export default SearchResults
