import styled, { css } from 'styled-components'

import ScrollBarX from '@atoms/ScrollBarX'
import FilmCard from '@components/Cards/FilmCard'
import { breakpoints } from '@constants'
import { FilmList, MediaType } from '@/src/types'

interface ListProps {
  isTrending: boolean
  data: FilmList
  showType: MediaType
}

const CategoryList = ({ isTrending, data, showType }: ListProps) => {
  function generateCards() {
    return data?.map((dataItem, index) => {
      if (!isTrending && index > 5) return
      if (index > 9) return
      return (
        <FilmCard
          key={dataItem.id}
          isTrending={isTrending}
          type={showType}
          data={dataItem}
        />
      )
    })
  }

  return (
    <>
      {isTrending ? (
        <ScrollBarX>
          <List isTrending={isTrending}>{generateCards()}</List>
        </ScrollBarX>
      ) : (
        <List isTrending={isTrending}>{generateCards()}</List>
      )}
    </>
  )
}

const List = styled.div<{ isTrending: boolean }>`
  gap: 1rem;

  ${(p) =>
    p.isTrending
      ? css`
          display: flex;
          flex-shrink: 0;
          margin-bottom: 0.5rem;
        `
      : css`
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
            grid-template-columns: repeat(12, 1fr);

            .film-card:nth-child(1) {
              grid-column: 1 / 4;
            }
            .film-card:nth-child(2) {
              grid-column: 4 / 7;
            }
            .film-card:nth-child(3) {
              grid-column: 7 / 10;
            }
            .film-card:nth-child(4) {
              grid-column: 10 / 13;
            }
            .film-card:nth-child(5) {
              grid-column: 1 / 5;
            }
            .film-card:nth-child(6) {
              grid-column: 5 / 9;
            }
          }
        `}
`

export default CategoryList
