import Meta from '@/src/Meta'
import styled from 'styled-components'
import PageLayout from '@/src/global/PageLayout'
import breakpoints from '@/assets/breakpoints'
import FilmPoster from '@/src/FilmPoster'
import FilmInfo from '@/src/FilmInfo'
import SimilarFilms from '@/src/SimilarFilms'

import useSwr from 'swr'
import { myFetch } from "@/assets/utilities"
import { useRouter } from "next/router"

interface Props {
  media_type: string
}

const FilmPageContent = ({ media_type }: Props) => {
  const router = useRouter()
  const id = router.query.id

  const { data, error, isLoading } = useSwr(`/api/film-page/${media_type}/${id}`, myFetch)

  const d = data?.[0]
  const credits = data?.[1]
  const similar = data?.[2]
  const videoData = data?.[3]

  const trailerID = videoData?.results.filter((videoData: any, i: number) => videoData.type === 'Trailer')[0]?.key

  return (
    <>
      <Meta
        title={
          d ? 
          `${d.name || d.title} | Moviemanic` : 
          'Moviemanic'
        }
        description={d?.overview}
      />

      <PageLayout>
        <PageBody>
          {isLoading ?
            'Loading...' :
            <>
              <FilmPoster
                path={d.poster_path}
              />
              <FilmInfo
                {...d}
                credits={credits}
                trailerID={trailerID}
              />
              <SimilarFilms data={similar.results} />
            </>
          }
          {error ? <p>An error occured</p> : null}
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
