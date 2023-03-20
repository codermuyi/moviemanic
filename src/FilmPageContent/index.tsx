import Meta from '@/src/atoms/Meta'
import styled from 'styled-components'
import PageLayout from '@/src/Layout/PageLayout'
import breakpoints from '@/assets/breakpoints'
import FilmPoster from '@/src/FilmPageContent/FilmPoster'
import FilmInfo from '@/src/FilmPageContent/FilmInfo'
import SimilarFilms from '@/src/atoms/FilmGrid'

import useSwr from 'swr'
import { myFetch } from "@/assets/utilities"
import { useRouter } from "next/router"
import Loader from '../atoms/Loader'

import BlockBottomLink from '../atoms/BlockBottomLink'
import Backdrop from './FilmBackdrop'

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
              <Backdrop info={info} />
              <FilmPoster
                path={info.poster_path}
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
      </PageLayout>
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
    max-width: 2000px;
    
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export default FilmPageContent