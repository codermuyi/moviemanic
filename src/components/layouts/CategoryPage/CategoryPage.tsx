import styled from 'styled-components'
import { capitalize } from 'lodash'

import Meta from '@atoms/Meta'
import FilmGrid from "@components/FilmGrid"
import BlockBottomLink from "@atoms/BlockBottomLink"
import Pagination from "@atoms/Pagination"
import Heading from '@components/TypeHeading'

const CategoryPageLayout = ({ data, name, mediaType }: any) => {
  return (
    <>
      <Meta
        title={`${capitalize(name)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'} | Moviemanic`}
      />
      <Heading name={name} mediaType={mediaType} />
      <FilmGrid
        data={data?.results}
        mediaType={mediaType}
      />
      <Pagination
        currentPage={data.page}
        totalPages={data.total_pages}
        query={name}
        pageType='category'
      />
      <BlockBottomLink />
    </>
  )
}

export default CategoryPageLayout
