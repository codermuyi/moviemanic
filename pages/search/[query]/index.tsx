import styled from 'styled-components'
import PageLayout from '@/src/Layout/PageLayout'
import MovieCard from '@/src/Cards/FilmCard'
import { server } from 'config'
import Meta from '@/src/atoms/Meta'

const search = ({
  searchQuery,
  data
}: { [key: string]: any }) => {
  const num: number = data.length

  return (
    <>
      <Meta
        title={`Search results for "${searchQuery}" | Moviemanic`}
      />
      <PageLayout>
        <Content>
          <h1>{num} result{num > 1 && 's'} for {searchQuery}</h1>
          {data ?
            data.map((movie: any) => {
              return (
                <MovieCard
                  key={movie.id}
                  movieName={movie.title || movie.name}
                  imgSrc={movie.backdrop_path}
                  isTrending={false}
                  date={movie.release_date || movie.first_air_date}
                  type={movie.media_type}
                  id={movie.id}
                />
              )
            }) : 'There was an error'}
        </Content>
      </PageLayout>
    </>
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
