import styled from 'styled-components'
import breakpoints from '@/assets/breakpoints'
import CardImage from './FilmCardImage'
import CardInfo from './FilmCardInfo'

interface Props {
  isTrending: boolean
  type: string
  data: any
}

const ListStyleCard = ({
  isTrending,
  type,
  data
}: Props) => {
  const linkHref = type === 'movie' ? `/movies/${data.id}` : `/tv-series/${data.id}`

  return data && (
    <Card className='film-card'>
      <CardImage
        isTrending={isTrending}
        data={data}
        path={data.poster_path}
        linkHref={linkHref}
      />
      <CardInfo
        isTrending={isTrending}
        data={data}
        type={type}
        linkHref={linkHref}
        overflow
      />
    </Card>
  )
}

const Card = styled.div`
  /* grid-column: 1; */
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 90px;
  overflow: hidden;
  background-color: rgb(var(--main-theme-color));
  border-radius: 10px;

  .card-image {
    width: 90px;
    object-fit: cover;
    object-position: top left;
  }
`

export default ListStyleCard