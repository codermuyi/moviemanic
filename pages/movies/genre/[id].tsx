import { server } from 'config'
import PageLayout from '@/src/Layout/PageLayout'
import Meta from '@/src/atoms/Meta'
import GenrePageContent from '@/src/GenrePageContent'

const genrePage = ({ data, name, id }: any) => {
  return (
    <>
      <Meta
        title={`${name} - Movies | Moviemanic`}
      />
      <PageLayout>
        <GenrePageContent
          name={name}
          data={data}
          mediaType='movie'
          id={id}
        />
      </PageLayout>
    </>
  )
}

export async function getServerSideProps(ctx: any) {
  const res = await fetch(`${server}/api/genre/movie/id/${ctx.params.id}?page=${ctx.query.page}`)
  const data = await res.json()

  return {
    props: data
  }
}

export default genrePage
