export function getSeconds(date: string) {
  return (new Date(date)).getTime() / 1000
}

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('en-US', options)
}
