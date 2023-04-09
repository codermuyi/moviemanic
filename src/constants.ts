
export const routes = {
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
  MOVIE_CATEGORY: (category: string) => `/movies/cat/${category.toLowerCase()}`,
  TV_CATEGORY: (category: string) => `/tv-series/cat/${category.toLowerCase()}`,
  SEARCH: (query: string) => `/search/${query}`,
  WATCHLIST: '/my-account/list',
  DETAILS: '/my-account/details',
  SECURITY: '/my-account/security',
  GET_STARTED: '/get-started'
}

export const breakpoints = {
  xs: '(max-width: 600px)',
  sm: '(min-width: 600px)',
  smMax: '(max-width: 599px)',
  md: '(min-width: 768px)',
  mdMax: '(max-width: 767px)',
  lg:'(min-width: 992px)',
  xl:'(min-width: 1200px)',
  xxl:'(min-width: 1440px)',
  xxxl:'(min-width: 2560px)',
}

export const toastOptions = {
  isLoading: false,
  autoClose: null,
  closeButton: null,
  draggable: null,
  draggablePercent: 50,
  draggableDirection: null,
  transition: null,
}
