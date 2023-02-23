import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled, { css, StyledComponent } from 'styled-components'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import Button from '../global/Button'
import MovieCard from '../MovieCard'
import breakpoints from '@/assets/breakpoints'


interface Props {
  categoryName: string
  showType: string
  isTrending: boolean
  fetch_path: string
}

const Category = ({ categoryName, showType, isTrending, fetch_path }: Props) => {

  const [data, setData] = useState<{ [key: string]: any }>([])

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${fetch_path}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
        const data = await res.json()

        setData(data.results);
      } catch (err) {
        console.log(err)
      }
    };

    callAPI()
  }, [fetch_path])

  function generateCards() {
    return data?.map((movie: any, index: number) => {
      if (!isTrending && index > 5) return
      if (index > 9) return
      return <MovieCard
        key={movie.id}
        movieName={movie.title || movie.name}
        imgSrc={movie.backdrop_path}
        isTrending={isTrending}
        date={movie.release_date || movie.first_air_date}
        type={showType}
      />
    })
  }

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

      {isTrending ?
        <SimpleBar style={{
          maxWidth: 2000,
          width: '100%',
        }}>
          <List isTrending={isTrending}>
            {generateCards()}
          </List>
        </SimpleBar> :
        <List isTrending={isTrending}>
          {generateCards()}
        </List>
      }
    </Cont>
  )
}

const Cont = styled.div`
  margin: 1rem .1rem;
  padding: 0 1rem;

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
    margin-bottom: .5rem;
    `:
    css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    @media ${breakpoints.sm} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${breakpoints.xl} {
      gap: 2rem;
    }
    
    @media ${breakpoints.xxl} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      
    }
  `}
`

export default Category

