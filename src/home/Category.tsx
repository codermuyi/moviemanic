import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '../global/Button'
import CategoryList from './CategoryList'

// import data from '@/assets/demo_data'

interface Props {
  categoryName: string
  showType: string
  isTrending: boolean
  data: any
}

const Category = ({
  categoryName,
  showType,
  isTrending,
  data
}: Props) => {

  const linkPath = showType === 'Movie' ? 'movies' : 'tv-series'

  return (
    <Cont>
      {(isTrending && showType == 'TV Series') && <br />}
      <Heading>
        <div className='name'>
          <p className='category-name'>{categoryName}</p>
          <p className='show-type'>{showType}</p>
        </div>
        <div className='see-more'>
          <Link href={`/${linkPath}/cat/${categoryName.toLowerCase()}`}>
            <Button
              border='none'
              radius='10px'
              cursor='pointer'
              bgColor='white'
              padding='.5rem'
              color='rgb(var(--theme-main-color))'
            >
              SEE MORE
            </Button>
          </Link>
        </div>
      </Heading>

      <CategoryList
        isTrending={isTrending}
        data={data.results}
        showType={showType}
      />
    </Cont>
  )
}

const Cont = styled.div`
  margin: 1rem .1rem;
  padding: 0 1rem;
  max-width: 2000px;

  .simplebar-scrollbar {
    height: .8rem;
  }

  .simplebar-scrollbar::before {
    background-color: rgb(var(--theme-main-color));
  }
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: .4rem;
  margin-block: 2rem .4rem;

  .name {
    display: flex;
    gap: 1rem;
    align-items: center;

    .category-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--theme-main-color);
      text-transform: capitalize;
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


export default Category

