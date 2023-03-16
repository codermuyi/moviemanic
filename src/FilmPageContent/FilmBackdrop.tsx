import styled from 'styled-components'
import FilmTitle from './FilmTitle'
import FilmPoster from '@/src/FilmPageContent/FilmPoster'
import breakpoints from '@/assets/breakpoints'

const FilmBackdrop = ({ info }: any) => {
  return (
    <Backdrop backdrop={info.backdrop_path}>
      <FilmPoster
        path={info.poster_path}
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

  :before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgb(22,14,53), rgb(var(--sub-color), .7), transparent 100%);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media ${breakpoints.md} {
    .film-poster {
      display: none;
    }
  }
`

export default FilmBackdrop
