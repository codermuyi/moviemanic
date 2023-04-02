import styled from "styled-components"
import StarRating from './FilmRating'

const FilmTitle = ({
  name,
  title,
  tagline,
  vote_average
}: any) => {
  return (
    <Name>
      <h1>
        {title || name}
        {(!title && !name) && '404: this page is invalid'}
      </h1>
      <p className='tagline'>{tagline}</p>
      <StarRating vote_average={vote_average} />
    </Name>
  )
}

const Name = styled.div`
  text-align: center;
  padding-block: 2rem;

  h1 {
    max-width: 800px;
    margin-inline: auto;
  }

  .tagline {
    font-size: .8em;
    opacity: .8;
  }
`

export default FilmTitle
