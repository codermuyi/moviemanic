import PageLayout from "@/src/global/PageLayout"
import Meta from '@/src/Meta'
import { server } from 'config'
import SimilarFilms from "@/src/SimilarFilms"
import styled from 'styled-components'

const categoryPage = ({ data, type }: any) => {
  console.log(data.results)

  return (
    <>
      <Meta />
      <PageLayout>
        <Cat>
          <MediaType>Movies</MediaType>
          <SimilarFilms
            title={type}
            data={data.results}
            mediaType='movie'
          />
        </Cat>
      </PageLayout>
    </>
  )
}

const Cat = styled.div`
  position: relative;

  h2 {
    font-size: 2.3rem;
  }
`

const MediaType = styled.div`
  position: absolute;
  top: 300px;
  right: 50px;
  /* inset: 0; */
  /* z-index: 20; */
  /* background-color: black; */
`

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`${server}/api/categories/movie/${ctx.query.category}`)
  const data = await res.json()

  return {
    props: {
      data: data,
      type: ctx.query.category
    },
  }
}

export default categoryPage
