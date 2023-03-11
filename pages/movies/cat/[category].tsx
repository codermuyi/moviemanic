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
          {/* <MediaType>Movies</MediaType> */}
          <FilmGrid
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

// const MediaType = styled.div`
//   position: absolute;
//   top: 300px;
//   right: 50px;
// `

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
