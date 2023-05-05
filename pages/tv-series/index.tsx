import Meta from '@atoms/Meta'
import MainFilmPageContent from '@layouts/MainFilmPage'
import { server } from 'config'

const index = ({ data }: any) => {
  return (
    <>
      <Meta title="TV Series | Moviemanic" />
      <MainFilmPageContent mediaType="tv" data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/genre/tv/list`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

export default index
