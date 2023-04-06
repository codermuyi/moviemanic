export function getSeconds(date: string) {
  return (new Date(date)).getTime() / 1000
}

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('en-US', options)
}

export function generatePageTitle(info: any, media_type: string): string {
  const filmTitle = info.name || info.title
  const filmMedia = media_type === 'tv' ? 'TV Series' : 'Movies'
  const filmDate = parseInt(info.release_date || info.first_air_date)
  const checkDate = !isNaN(filmDate) ? `(${filmDate})` : ''

  if (info) {
    if (info.success === false) {
      return 'Error 404 | Moviemanic'
    } else {
      return `${filmTitle} ${checkDate} - ${filmMedia} | Moviemanic`
    }
  }
  return 'Moviemanic'
}
