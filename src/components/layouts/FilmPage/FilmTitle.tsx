import styled from 'styled-components'

import StarRating from './FilmRating'

const FilmTitle = ({ name, title, tagline, vote_average }: any) => {
  return (
    <Name>
      <h1>
        {title || name}
        {!title && !name && '404: this page is invalid'}
      </h1>
      <p className="tagline">{tagline}</p>
      <StarRating vote_average={vote_average} />
    </Name>
  )
}

const Name = styled.div`
  text-align: center;
  padding-block: 2rem;

  h1 {
    max-width: 50rem;
    margin-inline: auto;
    font-size: 2.2rem;
  }

  .tagline {
    font-size: 0.8em;
    opacity: 0.8;
  }
`

export default FilmTitle
