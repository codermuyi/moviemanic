import Head from 'next/head'
import styled from 'styled-components'
import PageLayout from '@/src/global/PageLayout'
import breakpoints from '@/assets/breakpoints'
import FilmPoster from '@/src/FilmPoster'
import FilmInfo from '@/src/FilmInfo'
import SimilarFilms from '@/src/SimilarFilms'

const moviePage = ({ data, credits, similar, videoData }: { [key: string]: any }) => {
  const trailerID = videoData.results.filter((videoData: any, i: number) => videoData.type === 'Trailer')[0]?.key

  return (
    <>
      <Head>
        <title>Moviemanic</title>
        <meta name="description" content="Search for any movie and tv series" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <PageBody>
          <FilmPoster
            path={data.poster_path}
          />
          <FilmInfo
            {...data}
            credits={credits}
            trailerID={trailerID}
          />
          <SimilarFilms data={similar.results} />
        </PageBody>
      </PageLayout>
    </>
  )
}

const PageBody = styled.div`
  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 350px minmax(10px, 1fr);
    grid-template-rows: 2;
    max-width: 2000px;
  }
`

export const getServerSideProps = async (ctx: any) => {
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const api_path = `https://api.themoviedb.org/3/movie/${ctx.params.id}`

  const res = await fetch(`${api_path}?api_key=${key}`)
  const data = await res.json()

  const res2 = await fetch(`${api_path}/credits?api_key=${key}`)
  const credits = await res2.json()

  const res3 = await fetch(`${api_path}/recommendations?api_key=${key}`)
  const similar = await res3.json()

  const res4 = await fetch(`${api_path}/videos?api_key=${key}`)
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
