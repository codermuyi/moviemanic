import styled from 'styled-components'
import useSwr from 'swr'
import Link from 'next/link'

import ScrollBar from '@atoms/ScrollBar'
import FilmGrid from '@components/FilmGrid'
import Loader from '@atoms/Loader'
import Button from '@atoms/Button'
import { breakpoints } from '@constants'
import { routes } from '@constants'
import { filmCategories } from 'assets/film_info'
import { myFetch } from 'assets/utilities'
import { FilmListResponse } from '@/src/types'

const MiniCategories = () => {
  const { data: categories, isLoading } = useSwr<FilmListResponse[]>(
    '/api/categories',
    myFetch,
  )

  return (
    <Aside>
      <h2 className="title">Check out these movies and tv series</h2>
      <ScrollBar style={{ maxHeight: '100%' }} autoHide={false}>
        <br />
        {!isLoading ? (
          filmCategories?.map((c, i) => (
            <div key={c.id}>
              <FilmGrid
                isListStyle
                data={categories?.[i]?.results}
                mediaType={c.type}
                title={c.name}
              />
              <Link
                href={
                  c.type == 'tv'
                    ? routes.TV_CATEGORY(c.name)
                    : routes.MOVIE_CATEGORY(c.name)
                }
                className="see-more-link"
              >
                <Button padding=".6rem" tabIndex={-1}>
                  See more
                </Button>
              </Link>
            </div>
          ))
        ) : (
          <Loader paddingBlock="7rem" />
        )}
      </ScrollBar>
    </Aside>
  )
}

const Aside = styled.div`
  background-color: rgb(var(--dark-theme-color), 0.6);
  padding-block: 0.5rem;
  border-radius: 30px;

  h2.title {
    margin-block: 2rem;
    text-align: center;
  }

  .see-more-link {
    display: inline-block;
    margin: 0 1rem 1rem;
  }

  @media ${breakpoints.lg} {
    position: sticky;
    top: 0;
    max-height: 96vh;
    overflow: hidden;

    h2.title {
      display: none;
    }
  }
`

export default MiniCategories
