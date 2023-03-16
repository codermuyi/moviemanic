import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import FilmGrid from "@/src/FilmGrid"
import styled from 'styled-components'
import _ from 'lodash'
import BlockBottomLink from "../BlockBottomLink"
import Pagination from "../Pagination"

const CategoryPageLayout = ({ data, type, mediaType, page }: any) => {
  console.log(page)
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
        <Pagination
          currentPage={data.page}
          totalPages={data.total_pages}
          query={type}
          pageType='category'
        />
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