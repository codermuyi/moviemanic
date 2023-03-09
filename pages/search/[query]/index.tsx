import styled from 'styled-components'
import PageLayout from '@/src/global/PageLayout'
import MovieCard from '@/src/MovieCard'
import { server } from 'config'

const search = ({
  searchQuery,
  data
}: { [key: string]: any }) => {
  const num: number = data.length
  
  return (
    <PageLayout>
      <Content>
        <h1>{num} result{num > 1 && 's'} for {searchQuery}</h1>
        {data ?
          data.map((movie: any, index: number) => {
              return (
                <MovieCard
                  key={movie.id}
                  movieName={movie.title || movie.name}
                  imgSrc={movie.backdrop_path}
                  isTrending={false}
                  date={movie.release_date || movie.first_air_date}
                  type={movie.media_type === 'tv' ? 'TV Series' : 'Movie'}
                  id={movie.id}
                />
              )
          }) : 'There was an error'}
      </Content>
    </PageLayout>
  )
}

const Content = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  gap: 1.2rem;
  padding: 1rem 3rem;

  h1 {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
    grid-column: 1 / -1;
  }

  & > * .normal {
    height: 150px;
  }
`

export const getServerSideProps = async (ctx: any) => {
  const q = ctx.params.query
  const res = await fetch(`${server}/api/search/${q}`)
  const data = await res.json()

  if (data)
    return {
      props: {
        searchQuery: q,
        data: data.results.filter((v: any) => v.media_type !== 'person'),
      },
    }
  else
    return {
      props: {
        data: null
      }
    }
}

export default search
