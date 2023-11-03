import Link from 'next/link'
import styled from 'styled-components'

import CategoryList from './CategoryList'

import { FilmListResponse, MediaType } from '@/src/types'
import Button from '@atoms/Button'
import { routesV1 } from '@/src/constants'

interface CategoryProps {
  categoryName: string
  showType: MediaType
  isTrending: boolean
  data: FilmListResponse
}

const Category = ({
  categoryName,
  showType,
  isTrending,
  data,
}: CategoryProps) => {
  const linkPath =
    showType === 'movie'
      ? routesV1.MOVIE_CATEGORY(categoryName)
      : routesV1.TV_CATEGORY(categoryName)

  return (
    <Cont>
      {isTrending && showType == 'tv' && <br />}
      <Heading>
        <div className="name">
          <p className="category-name">{categoryName}</p>
          <p className="show-type">
            {showType === 'tv' ? 'TV Series' : 'Movie'}
          </p>
        </div>
        <div className="see-more">
          <Link href={linkPath}>
            <Button
              bgColor="white"
              padding=".5rem"
              color="rgb(var(--main-theme-color))"
              tabIndex={-1}
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
  margin: 1rem 0.1rem;
  padding: 0 1rem;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 0.4rem;
  margin-block: 2rem 0.4rem;

  .name {
    display: flex;
    gap: 1rem;
    align-items: center;

    .category-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--main-theme-color);
      text-transform: capitalize;
    }

    .show-type {
      border-radius: 6px;
      border: 1px solid white;
      font-size: 0.65em;
      padding: 3px 10px;
      text-transform: uppercase;
    }
  }

  .see-more button {
    font-size: 0.65rem;
  }
`

export default Category
