import styled from 'styled-components'
import useSwr from 'swr'
import { useRouter } from "next/router"

import Meta from '@atoms/Meta'
import Loader from '@atoms/Loader'
import FilmPoster from './FilmPoster'
import FilmInfo from './FilmInfo'
import SimilarFilms from '@components/FilmGrid'
import BlockBottomLink from '@atoms/BlockBottomLink'
import Backdrop from './FilmBackdrop'
import RouteGuard from '@atoms/RouteGuard'
import { breakpoints } from '@constants'
import { myFetch } from "@/assets/utilities"

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

      <RouteGuard>
        <PageBody>
          {isLoading && info.success ?
            <Loader /> :
            <>
              <Backdrop
                info={info}
                mediaType={media_type}
              />
              <FilmPoster
                path={info.poster_path}
                info={info}
                mediaType={media_type}
              />
              <FilmInfo
                {...info}
                credits={credits}
                videoData={videoData}
              />
              <SimilarFilms
                title='More Like This'
                centerTitle={true}
                data={similar.results}
              />
            </>
          }
        </PageBody>
        <BlockBottomLink />
      </RouteGuard>
    </>
  )
}

const PageBody = styled.div`
  @media ${breakpoints.mdMax} {
    & > .film-poster {
      display: none;
    }
  }

  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 350px minmax(10px, 1fr);
    grid-template-rows: 2;
    
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export default FilmPageContent