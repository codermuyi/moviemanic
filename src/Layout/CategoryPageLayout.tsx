import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import { server } from 'config'
import FilmGrid from "@/src/FilmGrid"
import styled from 'styled-components'

const CategoryPageLayout = ({ data, type, mediaType }: any) => {
  return (
    <>
      <Meta />
      <PageLayout>
        <Cat>
          <FilmGrid
            title={type}
            data={data?.results}
            mediaType={mediaType}
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

export default CategoryPageLayout