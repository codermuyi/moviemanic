import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import { server } from 'config'
import FilmGrid from "@/src/FilmGrid"
import styled from 'styled-components'

const categoryPage = ({ data, type }: any) => {
  return (
    <>
      <Meta />
      <PageLayout>
        <Cat>
          <FilmGrid
            title={type}
            data={data?.results}
            mediaType='tv'
          />
        </Cat>
      </PageLayout>
    </>
  )
}

const Cat = styled.div`
  h2 {
    font-size: 2.2rem;
  }
`

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/categories/tv/${ctx.query.category}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      type: ctx.query.category
    },
  }
}

export default categoryPage
