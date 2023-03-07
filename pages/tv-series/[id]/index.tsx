import FilmPageContent from "@/src/FilmPageContent"
import { server } from 'config'

const seriesPage = ({ data }: { [key: string]: any }) => {
  return (
    <FilmPageContent
      data={data[0]}
      credits={data[1]}
      similar={data[2]}
      videoData={data[3]}
    />
  )
}

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/film-page/tv/${ctx.query.id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default seriesPage