
export type FilmItem = {
  id: number
  name: string
  title: string
  original_title: string
  original_language: string
  original_name: string
  release_date: string
  first_air_date: string,
  overview: string
  poster_path: string
  backdrop_path: string
  media_type: 'movie' | 'tv',
  video: false
  genre_ids: Array<number>,
  popularity: number,
  vote_average: number,
  origin_country: Array<string>
}

export type FilmList = Array<FilmItem>
export type MediaType = FilmItem['media_type']

export type FilmListResponse = {
  page: number
  results: FilmList
  total_pages: number
  total_results: number
}

export type FilmDetails = {

}
