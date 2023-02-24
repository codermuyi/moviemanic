import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '@/src/global/PageLayout'

const moviePage = ({ data }: { data: any }) => {
  console.log(data)

  return (
    <>
      <Head>
        <title>Moviemanic</title>
        <meta name="description" content="Search for any movie and tv series" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/movie-projector.ico" />
      </Head>
      
      <PageLayout>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
          alt='image'
          width={300}
          height={400}
          style={{ objectFit: 'cover' }}
        />
      </PageLayout>
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${ctx.params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  const data = await res.json()

  return {
    props: {
      data: data
    },
  }
}

export default moviePage
