import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components'
import React from 'react'

const FilmRating = ({ vote_average }: { vote_average: number }) => {
  return (
    <>
      {vote_average ?
        <StarRating className='ratings'>
          <Rating
            initialValue={vote_average / 2}
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
`

export default FilmRating
