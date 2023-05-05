import Meta from '@atoms/Meta'
import MainFilmPageContent from '@layouts/MainFilmPage'
import { server } from 'config'

const index = ({ data }: any) => {
  return (
    <>
      <Meta title="Movies | Moviemanic" />
      <MainFilmPageContent mediaType="movie" data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/genre/movie/list`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

export default index
