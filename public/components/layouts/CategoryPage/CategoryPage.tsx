import { capitalize } from 'lodash'

import type { FilmListResponse, MediaType } from '@/src/types'
import Meta from '@atoms/Meta'
import FilmGrid from '@components/FilmGrid'
import BlockBottomLink from '@atoms/BlockBottomLink'
import Pagination from '@atoms/Pagination'
import Heading from '@components/TypeHeading'

interface Props {
  data: FilmListResponse
  name: string
  mediaType: MediaType
}

const CategoryPageLayout = ({ data, name, mediaType }: Props) => {
  return (
    <>
      <Meta
        title={`
          ${capitalize(name)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'}
           | Moviemanic
        `}
      />
      <Heading name={name} mediaType={mediaType} />
      <FilmGrid data={data?.results} />
      <Pagination
        currentPage={data.page}
        totalPages={data.total_pages}
        query={name}
        pageType="category"
      />
      <BlockBottomLink />
    </>
  )
}

export default CategoryPageLayout
