import FilmPageContent from "@/src/FilmPageContent"

const moviePage = ({
  data,
  credits,
  similar,
  videoData
}: { [key: string]: any }) => {
  return (
    <FilmPageContent
      data={data}
      credits={credits}
      similar={similar}
      videoData={videoData}
    />
  )
}

export const getServerSideProps = async (ctx: any) => {
  const api_path = `https://api.themoviedb.org/3/movie/${ctx.params.id}`
  const key = `?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`

  const res = await fetch(`${api_path}${key}`)
  const data = await res.json()
  const res2 = await fetch(`${api_path}/credits${key}`)
  const credits = await res2.json()
  const res3 = await fetch(`${api_path}/recommendations${key}`)
  const similar = await res3.json()
  const res4 = await fetch(`${api_path}/videos${key}`)
  const videoData = await res4.json()

  return {
    props: {
      data,
      credits,
      similar,
      videoData
    },
  }
}

export default moviePage