import FilmGrid from '@components/FilmGrid'
import BlockBottomLink from '@atoms/BlockBottomLink'
import Pagination from '@atoms/Pagination'
import Heading from '@components/TypeHeading'
import { FilmListResponse, MediaType } from '@/src/types'

export interface GenrePageProps {
  data: FilmListResponse
  name: string
  mediaType: MediaType
  id: string
}

const GenrePageContent = ({ data, name, mediaType, id }: GenrePageProps) => {
  return (
    <>
      <Heading name={name} mediaType={mediaType} />
      <FilmGrid data={data.results} mediaType={mediaType} />
      <Pagination
        currentPage={data.page}
        totalPages={data.total_pages}
        query={id}
        pageType="genre"
      />
      <BlockBottomLink />
    </>
  )
}

export default GenrePageContent
