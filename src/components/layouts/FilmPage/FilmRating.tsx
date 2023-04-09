import styled from 'styled-components'
import React from 'react'
import { Rating } from 'react-simple-star-rating'

const FilmRating = ({ vote_average }: { vote_average: number }) => {
  const avg = (vote_average / 2)
  const rate = parseFloat(avg.toPrecision(2))

  return (
    <>
      {vote_average ?
        <StarRating>
          <p className='rate-no'>{rate}</p>
          <Rating
            initialValue={rate}
            readonly={true}
            allowFraction={true}
            size={20}
            emptyColor='gray'
            fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
          />
        </StarRating>
        : null}
    </>
  )
}

const StarRating = styled.div`
  margin-top: 1rem;

  .rate-no {
    font-size: 2rem;
    font-family: inherit;
  }
`

export default FilmRating
