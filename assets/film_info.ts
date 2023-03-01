import { v4 as uuid } from 'uuid'

const filmCategories: {
  id: string
  name: string
  type: 'Movie' | 'movie' | 'TV Series' | 'tv series'
  isTrending: boolean
  fetch_path: string
}[] = [
    {
      id: uuid(),
      name: 'Trending',
      type: 'Movie',
      isTrending: true,
      fetch_path: 'trending/movie/day'
    },
    {
      id: uuid(),
      name: 'Popular',
      type: 'Movie',
      isTrending: false,
      fetch_path: 'movie/popular'
    },
    {
      id: uuid(),
      name: 'Now Playing',
      type: 'Movie',
      isTrending: false,
      fetch_path: 'movie/now_playing'
    },
    {
      id: uuid(),
      name: 'Upcoming',
      type: 'Movie',
      isTrending: false,
      fetch_path: 'movie/upcoming'
    },
    {
      id: uuid(),
      name: 'Top Rated',
      type: 'Movie',
      isTrending: false,
      fetch_path: 'movie/top_rated'
    },
    {
      id: uuid(),
      name: 'Trending',
      type: 'TV Series',
      isTrending: true,
      fetch_path: 'trending/tv/day'
    },
    {
      id: uuid(),
      name: 'Popular',
      type: 'TV Series',
      isTrending: false,
      fetch_path: 'tv/popular'
    },
    {
      id: uuid(),
      name: 'Airing today',
      type: 'TV Series',
      isTrending: false,
      fetch_path: 'tv/airing_today'
    },
    {
      id: uuid(),
      name: 'On Air',
      type: 'TV Series',
      isTrending: false,
      fetch_path: 'tv/on_the_air'
    },
    {
      id: uuid(),
      name: 'Top Rated',
      type: 'TV Series',
      isTrending: false,
      fetch_path: 'tv/top_rated'
    }
  ]

export { filmCategories }