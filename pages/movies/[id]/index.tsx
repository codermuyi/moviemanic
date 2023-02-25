import Head from 'next/head'
import styled from 'styled-components'
import PageLayout from '@/src/global/PageLayout'
import breakpoints from '@/assets/breakpoints'
import FilmPoster from '@/src/FilmPoster'
import FilmInfo from '@/src/FilmInfo'

const moviePage = ({ data, credits }: { data: any; credits: any }) => {

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
          />
        </PageBody>
      </PageLayout>
    </>
  )
}

const PageBody = styled.div`
  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 350px minmax(10px, 1fr);
    max-width: 2000px;
  }
`

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${ctx.params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  const data = await res.json()

  const res2 = await fetch(`https://api.themoviedb.org/3/movie/${ctx.params.id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  const credits = await res2.json()

  return {
    props: {
      data: data,
      credits: credits
    },
  }
}

export default moviePage
