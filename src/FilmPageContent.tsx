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
import Loader from './global/Loader'

interface Props {
  media_type: string
}

const FilmPageContent = ({ media_type }: Props) => {
  const router = useRouter()
  const id = router.query.id

  const { data, isLoading } = useSwr(`/api/film-page/${media_type}/${id}`, myFetch)

  const info = data?.[0]
  const credits = data?.[1]
  const similar = data?.[2]
  const videoData = data?.[3]

  function generatePageTitle(): string {
    const filmTitle = info.name || info.title
    const filmMedia = media_type === 'tv' ? 'TV Series' : 'Movies'
    const filmDate = parseInt(info.release_date || info.first_air_date)
    const checkDate = !isNaN(filmDate) ? `(${filmDate})` : ''

    if (info) {
      if (info.success === false) {
        return 'Error 404 | Moviemanic'
      } else {
        return `${filmTitle} ${checkDate} - ${filmMedia} | Moviemanic`
      }
    }
    return 'Moviemanic'
  }

  return (
    <>
      <Meta
        title={generatePageTitle()}
        description={info?.overview}
      />

      <PageLayout>
        <PageBody>
          {isLoading && info.success ?
            <Loader /> :
            <>
              <FilmPoster
                path={info.poster_path}
              />
              <FilmInfo
                {...info}
                credits={credits}
                videoData={videoData}
              />
              <SimilarFilms data={similar.results} />
            </>
          }
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