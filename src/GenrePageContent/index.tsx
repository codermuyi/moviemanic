import FilmGrid from '@/src/FilmGrid'
import BlockBottomLink from '@/src/BlockBottomLink'

const GenrePageContent = ({ data, name, mediaType }: any) => {
  return (
    <>
      <h1 style={{ padding: '2rem' }}>{name}</h1>
      <FilmGrid
        data={data}
        mediaType={mediaType}
      />
      <BlockBottomLink />
    </>
  )
}

export default GenrePageContent
