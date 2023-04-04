
const APIURL = 'https://api.themoviedb.org/3/'
const key = process.env.TMDB_API_KEY

export const searchPath = (q: string) => `${APIURL}${q}&api_key=${key}`

export const categoryPath = (path: string) => `${APIURL}${path}?api_key=${key}`

export const filmPagePath = (params: string | string[] | undefined, path = '') =>  {
  return `${APIURL}${params?.[0]}/${params?.[1]}${path}?api_key=${key}`
}

export async function myFetch(path: string) {
  const response = await fetch(path)

  return response.json()
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
