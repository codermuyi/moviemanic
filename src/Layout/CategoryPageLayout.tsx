import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import FilmGrid from "@/src/FilmGrid"
import styled from 'styled-components'
import _ from 'lodash'
import BlockBottomLink from "../BlockBottomLink"

const CategoryPageLayout = ({ data, type, mediaType }: any) => {
  return (
    <>
      <Meta 
        title={`${_.capitalize(type)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'} | Moviemanic`}
      />
      <PageLayout>
        <Cat>
          <FilmGrid
            title={type}
            data={data?.results}
            mediaType={mediaType}
          />
        </Cat>
        <BlockBottomLink />
      </PageLayout>
    </>
  )
}

const Cat = styled.div`
  h2 {
    font-size: 2rem;
    padding: 1rem;
  }
`

export default CategoryPageLayout