import styled from 'styled-components'
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
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 90px;
  overflow: hidden;
  border-top: 2px solid rgb(var(--main-theme-color));
  border-radius: 10px;
  background-color: rgb(var(--f-bg-color));
  transition: .3s;
  
  .card-image {
    width: 80px;
    object-fit: cover;
    object-position: center;
    transition: .3s;
  }
  
  :hover {
    box-shadow: 0 3px 3px rgb(0 0 0 / .15);
    background-color: rgb(var(--main-theme-color));
    
    .card-image {
      object-position: bottom right;
    }
  }
`

export default ListStyleCard
