import { FilmDetailsType } from './types'

export function getSeconds(date: string) {
  return new Date(date).getTime() / 1000
}

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('en-US', options)
}

export function generatePageTitle(
  info: FilmDetailsType,
  media_type: string,
): string {
  const filmTitle = info.name || info.title
  const filmMedia = media_type === 'tv' ? 'TV Series' : 'Movies'
  const date = info.release_date || info.first_air_date || ''
  const year = parseInt(date)
  const checkDate = !isNaN(year) ? `(${year})` : ''

  if (info) {
    if (info.success === false) {
      return 'Error 404 | Moviemanic'
    } else {
      return `${filmTitle} ${checkDate} - ${filmMedia} | Moviemanic`
    }
  }
  return 'Moviemanic'
}

export const isMobile = {
  android: () => navigator.userAgent.match(/Android/i),
  blackberry: () => navigator.userAgent.match(/BlackBerry|BB/i),
  ios: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  opera: () => navigator.userAgent.match(/Opera Mini/i),
  windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.android() ||
    isMobile.blackberry() ||
    isMobile.ios() ||
    isMobile.opera() ||
    isMobile.windows(),
}
