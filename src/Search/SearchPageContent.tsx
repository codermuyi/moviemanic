import styled from 'styled-components'
import Meta from '@/src/atoms/Meta'
import useSwr from 'swr'
import { myFetch } from '@/assets/utilities'
import Loader from '@/src/atoms/Loader'
import Pagination from '@/src/Pagination'
import PageLayout from '@/src/Layout/PageLayout'
import MovieCard from '@/src/Cards/FilmCard'

const SearchPageContent = ({
  searchQuery,
  contextQuery
}: any) => {
  const { data: d } = useSwr(`/api/search/${searchQuery}?page=${contextQuery.page}`, myFetch)

  const data = d?.results?.filter((v: any) => v.media_type !== 'person')
  const num: number = data?.length

  return (
    <>
      <Meta
        title={`Search results for "${searchQuery}" | Moviemanic`}
      />
      <PageLayout>
        {data ?
          <>
            <Content>
              <h1>Result{num > 1 && 's'} for &quot;{searchQuery}&quot; ({num})</h1>
              {data.map((filmData: any) => {
                return (
                  <MovieCard
                    key={filmData.id}
                    isTrending={false}
                    type={filmData.media_type}
                    data={filmData}
                  />
                )
              })}
            </Content>

            <Pagination
              currentPage={d?.page}
              totalPages={d?.total_pages}
              query={searchQuery}
              pageType='search'
            />
          </>
          : <Loader />}
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
  background-color: rgb(255 255 255 / .05);
  border-radius: 50px;

  h1 {
    padding-bottom: 1rem;
    grid-column: 1 / -1;
    padding: 1rem;
  }

  & > * .normal {
    height: 150px;
  }
`

export default SearchPageContent
