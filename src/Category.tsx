import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './global/Button'

import MovieCard from './MovieCard'

interface Props {
  categoryName: string
  show: string
  data?: any
}

const Category = ({ categoryName, show, data }: Props) => {

  return (
    <Cont>
      <Heading>
        <div className='name'>
          <p className='category-name'>{categoryName}</p>
          <p className='show-type'>{show}</p>
        </div>
        <div>
          <Link href='/'>
            <Button
              border='none'
              bgColor='transparent'
              radius='10px'
              cursor='pointer'
            >
              SEE MORE
            </Button>
          </Link>
        </div>
      </Heading>
      <List>
        {data?.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movieName={movie.title}
            imgSrc={movie.poster_path}
          />
        ))}
      </List>
    </Cont>
  )
}

const Cont = styled.div`
  margin: 1rem .4rem;
  padding: 1rem;
  a {
    font-size: .7em;
  }
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  .name {
    display: flex;
    gap: 10px;

    .show-type {
      border-radius: 6px;
      border: 1px solid white;
      font-size: .6em;
      padding: 3px 10px;
      text-transform: uppercase;
    }
  }
`

const List = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  overflow-x: auto;
  appearance: none;
`

export default Category

