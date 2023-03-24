import styled, { css } from 'styled-components'
import ScrollBar from '../atoms/ScrollBar';
import FilmCard from '../Cards/FilmCard'
import breakpoints from '@/assets/breakpoints'

interface ListProps {
  isTrending: boolean
  data: any
  showType: string
}

const CategoryList = ({ isTrending, data, showType }: ListProps) => {

  function generateCards() {
    return data?.map((dataItem: any, index: number) => {
      if (!isTrending && index > 5) return
      if (index > 9) return
      return <FilmCard
        key={dataItem.id}
        isTrending={isTrending}
        type={showType}
        data={dataItem}
      />
    })
  }

  return (
    <>
      {isTrending ?
        <ScrollBar autoHide={false} style={{ overflowY: 'hidden' }}>
          <List isTrending={isTrending}>
            {generateCards()}
          </List>
        </ScrollBar> :
        <List isTrending={isTrending}>
          {generateCards()}
        </List>
      }
    </>
  )
}

const List = styled.div.attrs(p => { })`
  gap: 1rem;
  
  ${p => p.isTrending ?
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
