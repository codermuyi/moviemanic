import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import MainFilmPageContent from "@/src/MainFilmPageContent"
import { server } from 'config'

const index = ({ data }: any) => {
  return (
    <>
      <Meta
        title='Movies | Moviemanic'
      />

      <PageLayout>
        <MainFilmPageContent
          mediaType='movie'
          data={data}
        />
      </PageLayout>
    </>
  )
}


export async function getServerSideProps(ctx: any) {
  const res = await fetch(`${server}/api/genre/movie/list`)
  const data = await res.json()

  return {
    props: {
      data: data
    }
  }
}

export default index
