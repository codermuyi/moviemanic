import { v4 as uuid } from 'uuid'

const filmCategories: {
  id: string
  name: string
  type: 'Movie' | 'movie' | 'TV Series' | 'tv'
  isTrending: boolean
  fetch_path: string
}[] = [
    {
      id: uuid(),
      name: 'Trending',
      type: 'movie',
      isTrending: true,
      fetch_path: 'trending/movie/day'
    },
    {
      id: uuid(),
      name: 'Popular',
      type: 'movie',
      isTrending: false,
      fetch_path: 'movie/popular'
    },
    {
      id: uuid(),
      name: 'Now Playing',
      type: 'movie',
      isTrending: false,
      fetch_path: 'movie/now_playing'
    },
    {
      id: uuid(),
      name: 'Upcoming',
      type: 'movie',
      isTrending: false,
      fetch_path: 'movie/upcoming'
    },
    {
      id: uuid(),
      name: 'Top Rated',
      type: 'movie',
      isTrending: false,
      fetch_path: 'movie/top_rated'
    },
    {
      id: uuid(),
      name: 'Trending',
      type: 'tv',
      isTrending: true,
      fetch_path: 'trending/tv/day'
    },
    {
      id: uuid(),
      name: 'Popular',
      type: 'tv',
      isTrending: false,
      fetch_path: 'tv/popular'
    },
    {
      id: uuid(),
      name: 'Airing today',
      type: 'tv',
      isTrending: false,
      fetch_path: 'tv/airing_today'
    },
    {
      id: uuid(),
      name: 'On Air',
      type: 'tv',
      isTrending: false,
      fetch_path: 'tv/on_the_air'
    },
    {
      id: uuid(),
      name: 'Top Rated',
      type: 'tv',
      isTrending: false,
      fetch_path: 'tv/top_rated'
    }
  ]

export { filmCategories }