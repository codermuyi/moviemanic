import styled from 'styled-components'
import useSwr from 'swr'
import { useRouter } from 'next/router'

import FilmVideos from './FilmVideos'
import Casts from './FilmCast'
import FilmExternalSource from './FilmExternalSource'
import Backdrop from './FilmBackdrop'

import Meta from '@atoms/Meta'
import Loader from '@atoms/Loader'
import FilmPoster from '@components/FilmPoster'
import FilmDetails from '@components/FilmDetails'
import FilmGrid from '@components/FilmGrid'
import BlockBottomLink from '@atoms/BlockBottomLink'
import { breakpoints } from '@constants'
import { myFetch } from '@/assets/utilities'
import { generatePageTitle } from '@helpers'
import { FilmPageData, MediaType } from '@/src/types'

interface Props {
  media_type: MediaType
}

const FilmPageContent = ({ media_type }: Props) => {
  const router = useRouter()
  const id = router.query.id
  const { data, isLoading } = useSwr<FilmPageData>(
    `/api/film-page/${media_type}/${id}`,
    myFetch,
  )

  const info = data?.info
  const credits = data?.credits
  const similar = data?.similar
  const videoData = data?.videoData

  return (
    <>
      <Meta
        title={generatePageTitle(info, media_type)}
        description={info?.overview}
      />

      <PageBody>
        {isLoading && info?.success ? (
          <Loader />
        ) : (
          <>
            <Backdrop info={info} mediaType={media_type} />
            <FilmPoster
              path={info?.poster_path}
              info={info}
              mediaType={media_type}
            />
            <div style={{ paddingInline: '1rem', marginBottom: '2rem' }}>
              <FilmVideos videoData={videoData?.results} />
              {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/}
              <FilmDetails details={info!} />
              <br />
              <Casts credits={credits} />
              <FilmExternalSource
                imdb={info?.imdb_id}
                website={info?.homepage}
              />
            </div>
            <FilmGrid
              title="More Like This"
              centerTitle={true}
              data={similar?.results}
            />
          </>
        )}
      </PageBody>
      <BlockBottomLink />
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
