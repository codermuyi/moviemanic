import styled from 'styled-components'

import FilmPoster from '@components/FilmPoster'
import FilmTitle from './FilmTitle'
import { breakpoints } from '@constants'

const FilmBackdrop = ({ info, mediaType }: any) => {
  return (
    <Backdrop backdrop={info.backdrop_path}>
      <FilmPoster
        path={info.poster_path}
        info={info}
        mediaType={mediaType}
      />
      <FilmTitle
        name={info.name}
        title={info.title}
        tagline={info.tagline}
        vote_average={info.vote_average}
      />
    </Backdrop>
  )
}

const Backdrop = styled.div.attrs(p => {
})`
  grid-column: 1 / -1;
  background: url(${p => `https://image.tmdb.org/t/p/w1280${p.backdrop}`}) no-repeat;
  background-size: cover;
  background-position: center;
  padding-block: 9rem;
  position: relative;
  border-radius: 0 50px 50px 0;
  overflow: hidden;
  margin-bottom: 2rem;
  isolation: isolate;

  :before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgb(var(--dark-theme-color)), rgb(var(--main-theme-color), .7), transparent 100%);
    z-index: -1;
  }

  @media ${breakpoints.md} {
    .film-poster {
      display: none;
    }
  }
`

export default FilmBackdrop
