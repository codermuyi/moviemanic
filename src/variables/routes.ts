const routes = {
  HOME: '/',
  MOVIES: '/movies',
  TV_SERIES: '/tv-series',
  MOVIE: (id: string) => `/movies/${id}`,
  TV: (id: string) => `/tv-series/${id}`,
  ACCOUNT: '/my-account',
  SIGN_IN: '/login',
  SIGN_UP: '/signup',
  MOVIE_GENRE: (id: string) => `/movies/genre/${id}`,
  TV_GENRE: (id: string) => `/tv-series/genre/${id}`,
  MOVIE_CATEGORY: (category: string) => `/movies/cat/${category}`,
  TV_CATEGORY: (category: string) => `/tv-series/cat/${category}`,
  SEARCH: (query: string) => `/search/${query}`,
  WATCHLIST: '/my-account/list',
  DETAILS: '/my-account/details',
  SECURITY: '/my-account/security',
}

export default routes
