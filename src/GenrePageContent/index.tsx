import FilmGrid from '@/src/atoms/FilmGrid'
import BlockBottomLink from '@/src/atoms/BlockBottomLink'
import Pagination from '../atoms/Pagination'
import RouteGuard from '../RouteGuard'

const GenrePageContent = ({ data, name, mediaType, id }: any) => {
  return (
    <RouteGuard>
      <h1 style={{ padding: '2rem' }}>{name}</h1>
      <FilmGrid
        data={data.results}
        mediaType={mediaType}
      />
      <Pagination 
        currentPage={data.page}
        totalPages={data.total_pages}
        query={id}
        pageType='genre'
      />
      <BlockBottomLink />
    </RouteGuard>
  )
}

export default GenrePageContent
