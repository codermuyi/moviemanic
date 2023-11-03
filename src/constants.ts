export const routesV1 = {
  HOME: '/v1',
  MOVIES: '/v1/movies',
  TV_SERIES: '/v1/tv-series',
  MOVIE: (id: string | number) => `/v1/movies/${id}`,
  TV: (id: string | number) => `/v1/tv-series/${id}`,
  ACCOUNT: '/v1/my-account',
  SIGN_IN: '/v1/login',
  SIGN_UP: '/v1/signup',
  MOVIE_GENRE: (id: string | number) => `/v1/movies/genre/${id}`,
  TV_GENRE: (id: string | number) => `/v1/tv-series/genre/${id}`,
  MOVIE_CATEGORY: (category: string) =>
    `/v1/movies/cat/${category.toLowerCase()}`,
  TV_CATEGORY: (category: string) =>
    `/v1/tv-series/cat/${category.toLowerCase()}`,
  SEARCH: (query: string) => `/v1/search/${query}`,
  WATCHLIST: '/v1/my-account/list',
  DETAILS: '/v1/my-account/details',
  SECURITY: '/v1/my-account/security',
  GET_STARTED: '/v1/get-started',
  RESET_PASSWORD: '/v1/reset-password',
}

export const routes = {
  HOME: '/',
  MOVIES: '/movies',
  TV_SERIES: '/tv-series',
  MOVIE: (id: string | number) => `/movies/${id}`,
  TV: (id: string | number) => `/tv-series/${id}`,
  ACCOUNT: '/my-account',
  SIGN_IN: '/login',
  SIGN_UP: '/signup',
  MOVIE_GENRE: (id: string | number) => `/movies/genre/${id}`,
  TV_GENRE: (id: string | number) => `/tv-series/genre/${id}`,
  MOVIE_CATEGORY: (category: string) => `/movies/cat/${category.toLowerCase()}`,
  TV_CATEGORY: (category: string) => `/tv-series/cat/${category.toLowerCase()}`,
  SEARCH: (query: string) => `/search/${query}`,
  WATCHLIST: '/my-account/list',
  DETAILS: '/my-account/details',
  SECURITY: '/my-account/security',
  GET_STARTED: '/get-started',
  RESET_PASSWORD: '/reset-password',
}

export const breakpoints = {
  xs: '(max-width: 600px)',
  sm: '(min-width: 600px)',
  smMax: '(max-width: 599px)',
  md: '(min-width: 768px)',
  mdMax: '(max-width: 767px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1440px)',
  xxxl: '(min-width: 2560px)',
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
