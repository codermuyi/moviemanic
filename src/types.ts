export type FilmItem = {
  id: number
  name?: string
  title?: string
  original_title: string
  original_language: string
  original_name: string
  release_date?: string
  first_air_date?: string
  overview: string
  poster_path: string
  backdrop_path: string
  media_type: MediaType
  video: false
  genre_ids: number[]
  popularity: number
  vote_average: number
  origin_country: string[]
}

export type FilmList = Array<FilmItem>
export type MediaType = 'movie' | 'tv'

export type FilmListResponse = {
  page: number
  results: FilmList
  total_pages: number
  total_results: number
}

export type SearchResultItem = Omit<FilmItem, 'media_type'> & {
  media_type: MediaType | 'person'
}

export type SearchResponse = {
  page: number
  results: SearchResultItem[]
  total_pages: number
  total_results: number
}

export type Genre = {
  id: number
  name: string
}

export type Company = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type FilmDetailsType = {
  id: number
  name?: string
  title?: string
  poster_path: string
  backdrop_path: string
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  original_language: string
  original_title?: string
  original_name?: string
  overview: string
  popularity: number
  production_companies: Company[]
  release_date?: string
  first_air_date?: string
  last_air_date?: string
  runtime?: string
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string
  vote_average: number
  vote_count: number
  in_production?: boolean
  number_of_episodes?: number
  number_of_seasons?: number
  networks?: Company[]
  languages?: string[]
  last_episode_to_air?: {
    id: number
    name: string
    overview: string
    air_date: string
    episode_number: number
    season_number: number
    runtime: number
    show_id: number
    still_path: string
  }
  seasons?: Array<{
    id: number
    air_date: string
    name: string
    episode_count: number
    season_number: number
    overview: string
    poster_path: string
  }>
  success?: boolean
}

export type FilmCast = {
  cast_id: number
  character: string
  credit_id: string
  gender: number // 2
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export type FilmCreditsResponse = {
  id: number
  cast: FilmCast[]
  success?: boolean
}

export type FilmVideo = {
  id: number
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}

export type FilmVideoResponse = {
  id: number
  results: FilmVideo[]
}

export type FilmPageData = {
  info: FilmDetailsType
  credits: FilmCreditsResponse
  similar: FilmListResponse
  videoData: FilmVideoResponse
}

export type SupabaseData = {
  media_type: MediaType
  film_id: string
  user_id: string
  title: string
  created_at: string
}

export type Profile = {
  username: string
  created_at: string
}

export type User = {
  email: string
  id: string
}

export type MainFilmPageResopnse = {
  genreList: Genre[]
  filmList: FilmListResponse[]
}
