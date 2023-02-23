import styled, { css, StyledComponent } from 'styled-components'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import MovieCard from '../MovieCard'
import breakpoints from '@/assets/breakpoints'

const CategoryList = ({ isTrending, data, showType }: { isTrending: boolean, data: any, showType: string }) => {

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
    <>
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
    </>
  )
}

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

export default CategoryList
