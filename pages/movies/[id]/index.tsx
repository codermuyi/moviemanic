import { SWRConfig } from 'swr'

import FilmPageContent from '@layouts/FilmPage'
import { server } from 'config'

export async function getServerSideProps(ctx: any) {
  const apiPath = `/api/film-page/movie/${ctx.params.id}`
  const res = await fetch(`${server}${apiPath}`)
  const data = await res.json()

  return {
    props: {
      fallback: {
        [apiPath]: data,
      },
    },
  }
}

const moviePage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FilmPageContent media_type="movie" />
    </SWRConfig>
  )
}

export default moviePage
