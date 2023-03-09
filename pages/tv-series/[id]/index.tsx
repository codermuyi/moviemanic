import FilmPageContent from "@/src/FilmPageContent"
import { server } from 'config'
import { SWRConfig } from "swr"

export async function getServerSideProps(ctx: any) {
  const apiPath = `/api/film-page/tv/${ctx.params.id}`
  const res = await fetch(`${server}${apiPath}`)
  const data = await res.json()

  return {
    props: {
      fallback: {
        [apiPath]: data
      }
    }
  }
}

const moviePage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FilmPageContent media_type='tv' />
    </SWRConfig>
  )
}

export default moviePage
