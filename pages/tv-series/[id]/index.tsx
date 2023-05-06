import { SWRConfig } from 'swr'
import { GetServerSidePropsContext } from 'next'

import FilmPageContent from '@layouts/FilmPage'
import { server } from 'config'
import { FilmPageData } from '@/src/types'

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apiPath = `/api/film-page/tv/${ctx.params?.id}`
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

const moviePage = ({
  fallback,
}: {
  fallback: { [key: string]: FilmPageData }
}) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FilmPageContent media_type="tv" />
    </SWRConfig>
  )
}

export default moviePage
