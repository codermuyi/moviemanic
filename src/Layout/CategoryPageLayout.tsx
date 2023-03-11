import PageLayout from "@/src/Layout/PageLayout"
import Meta from '@/src/atoms/Meta'
import FilmGrid from "@/src/FilmGrid"
import styled from 'styled-components'
import _ from 'lodash'

const CategoryPageLayout = ({ data, type, mediaType }: any) => {
  return (
    <>
      <Meta 
        title={`${_.capitalize(type)} - ${mediaType === 'tv' ? 'TV Series' : 'Movies'} | Moviemanic`}
      />
      <PageLayout>
        <Cat>
          <FilmGrid
            title={type}
            data={data?.results}
            mediaType={mediaType}
          />
        </Cat>
      </PageLayout>
    </>
  )
}

const Cat = styled.div`
  h2 {
    font-size: 2.2rem;
  }
`

export default CategoryPageLayout