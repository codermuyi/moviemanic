import { GetServerSidePropsContext } from 'next'

import { server } from 'config'
import Meta from '@atoms/Meta'
import GenrePageContent, { GenrePageProps } from '@layouts/GenrePage'

const genrePage = ({ data, name, id }: GenrePageProps) => {
  return (
    <>
      <Meta title={`${name} - TV Series | Moviemanic`} />
      <GenrePageContent name={name} data={data} mediaType="tv" id={id} />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const res = await fetch(
    `${server}/api/genre/tv/id/${ctx.params && ctx.params.id}?page=${
      ctx.query.page
    }`,
  )
  const data = await res.json()

  return {
    props: data,
  }
}

export default genrePage
