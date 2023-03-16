import FilmGrid from '@/src/FilmGrid'
import BlockBottomLink from '@/src/BlockBottomLink'
import Pagination from '../Pagination'

const GenrePageContent = ({ data, name, mediaType, id }: any) => {
  console.log(data)
  return (
    <>
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
    </>
  )
}

export default GenrePageContent
