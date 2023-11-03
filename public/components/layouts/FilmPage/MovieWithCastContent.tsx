import useSwr from 'swr'

import FilmGrid from '@components/FilmGrid'
import ScrollBar from '@atoms/ScrollBar'
import Loader from '@atoms/Loader'
import { myFetch } from '@/assets/utilities'

const MovieWithCastContent = ({ id }: { id: number }) => {
  const { data, isLoading } = useSwr(`/api/movie-with-cast/${id}`, myFetch)

  return !isLoading ? (
    <ScrollBar style={{ maxHeight: '75vh' }}>
      <FilmGrid
        data={data?.results}
        mediaType="movie"
        isListStyle
        completeList
      />
    </ScrollBar>
  ) : (
    <Loader />
  )
}

export default MovieWithCastContent
