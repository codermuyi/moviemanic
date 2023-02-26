import Meta from '@/src/Meta'
import styled from 'styled-components'
import PageLayout from '@/src/global/PageLayout'
import breakpoints from '@/assets/breakpoints'
import FilmPoster from '@/src/FilmPoster'
import FilmInfo from '@/src/FilmInfo'
import SimilarFilms from '@/src/SimilarFilms'

const FilmPageContent = (props: any) => {
  console.log(props)
  const trailerID = props.videoData.results.filter((videoData: any, i: number) => videoData.type === 'Trailer')[0]?.key

  return (
    <>
      <Meta
        title={`${props.data.name || props.data.title} | Moviemanic`}
        description={props.data.overview}
      />

      <PageLayout>
        <PageBody>
          <FilmPoster
            path={props.data.poster_path}
          />
          <FilmInfo
            {...props.data}
            credits={props.credits}
            trailerID={trailerID}
          />
          <SimilarFilms data={props.similar.results} />
        </PageBody>
      </PageLayout>
    </>
  )
}

const PageBody = styled.div`
  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 350px minmax(10px, 1fr);
    grid-template-rows: 2;
    max-width: 2000px;
  }
`

export default FilmPageContent
