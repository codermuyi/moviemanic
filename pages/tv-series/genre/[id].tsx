import { server } from 'config'
import PageLayout from '@/src/Layout/PageLayout'
import Meta from '@/src/atoms/Meta'
import GenrePageContent from '@/src/GenrePageContent'

const genrePage = ({ data, name, id }: any) => {
  return (
    <>
      <Meta
        title={`${name} - TV Series | Moviemanic`}
      />
      <GenrePageContent
        name={name}
        data={data}
        mediaType='tv'
        id={id}
      />
    </>
  )
}

export async function getServerSideProps(ctx: any) {
  const res = await fetch(`${server}/api/genre/tv/id/${ctx.params.id}?page=${ctx.query.page}`)
  const data = await res.json()

  return {
    props: data
  }
}

export default genrePage