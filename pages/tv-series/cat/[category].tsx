import PageLayout from "@/src/global/PageLayout"
import Meta from '@/src/Meta'
import { server } from 'config'
import SimilarFilms from "@/src/SimilarFilms"
import styled from 'styled-components'

const categoryPage = ({ data, type }: any) => {
  console.log(data)

  return (
    <>
      <Meta />
      <PageLayout>
        <Cat>
          <SimilarFilms
            title={`${type} tv shows`}
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
