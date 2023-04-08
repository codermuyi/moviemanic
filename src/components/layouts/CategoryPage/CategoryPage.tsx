import styled from 'styled-components'
import { capitalize } from 'lodash'

import Meta from '@atoms/Meta'
import FilmGrid from "@components/FilmGrid"
import BlockBottomLink from "@atoms/BlockBottomLink"
import Pagination from "@atoms/Pagination"
import Heading from '@components/TypeHeading'

const CategoryPageLayout = ({ data, type, mediaType }: any) => {
  return (
    <>
      <Meta
        title={`${capitalize(type)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'} | Moviemanic`}
      />
      <Heading name={type} mediaType={mediaType} />
      <FilmGrid
        data={data?.results}
        mediaType={mediaType}
      />
      <Pagination
        currentPage={data.page}
        totalPages={data.total_pages}
        query={type}
        pageType='category'
      />
      <BlockBottomLink />
    </>
  )
}

export default CategoryPageLayout
