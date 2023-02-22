import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled, { css, StyledComponent } from 'styled-components'

import Button from '../global/Button'
import MovieCard from '../MovieCard'
import breakpoints from '@/assets/breakpoints'


interface Props {
  categoryName: string
  showType: string
  data?: any
  isTrending?: boolean
}

const Category = ({ categoryName, showType, data, isTrending = false }: Props) => {

  return (
    <Cont>
      <Heading>
        <div className='name'>
          <p className='category-name'>{categoryName}</p>
          <p className='show-type'>{showType}</p>
        </div>
        <div className='see-more'>
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

      <List isTrending={isTrending}>
        {data.map((movie: any, index: number) => {
          if (!isTrending && index > 5) return
          return <MovieCard
            key={movie.id}
            movieName={movie.title}
            imgSrc={movie.backdrop_path}
            isTrending={isTrending}
          />
        })}
      </List>
    </Cont>
  )
}

const Cont = styled.div`
  margin: 1rem .1rem;
  padding: 0 1rem;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: .4rem;
  margin-bottom: .4rem;

  .name {
    display: flex;
    gap: 1rem;
    align-items: center;

    .category-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--theme-main-color);
    }

    .show-type {
      border-radius: 6px;
      border: 1px solid white;
      font-size: .65em;
      padding: 3px 10px;
      text-transform: uppercase;
    }
  }

  .see-more button {
    font-size: .65rem;
  }
`

const List: StyledComponent<'div', any, { isTrending: boolean }> = styled.div`
  gap: 1rem;
  
  ${(props: any) => props.isTrending ?
    css`
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;
    `:
    css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    @media ${breakpoints.md} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${breakpoints.xl} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      & > *::nth-child(5) {
        grid-column: 1 / 3;
      } 
      & > *::last-child {
        grid-column: 3 / 5;
      }
    }
  `}
`

export default Category

