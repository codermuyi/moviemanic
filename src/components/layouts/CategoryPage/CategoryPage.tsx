import styled from 'styled-components'
import _ from 'lodash'

import Meta from '@atoms/Meta'
import FilmGrid from "@components/FilmGrid"
import BlockBottomLink from "@atoms/BlockBottomLink"
import Pagination from "@atoms/Pagination"
import RouteGuard from "@atoms/RouteGuard"

const CategoryPageLayout = ({ data, type, mediaType }: any) => {
  return (
    <>
      <Meta 
        title={`${_.capitalize(type)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'} | Moviemanic`}
      />
      <RouteGuard>
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
      </RouteGuard>
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