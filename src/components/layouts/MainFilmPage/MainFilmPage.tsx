import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import ScrollBar from '@atoms/ScrollBar'
import FilmGrid from '@components/FilmGrid'
import Button from '@atoms/Button'
import { filmCategories } from '@/assets/film_info'
import { MainFilmPageResopnse, MediaType } from '@/src/types'

const MainFilmPageContent = ({
  data,
  mediaType,
}: {
  data: MainFilmPageResopnse
  mediaType: MediaType
}) => {
  const title = mediaType === 'movie' ? 'Movies' : 'TV Series'
  const linkPath = mediaType === 'movie' ? 'movies' : 'tv-series'

  const { filmList, genreList } = data

  console.log(data)

  return (
    <PageBody>
      <h1>{title}</h1>
      <div className="content">
        <ScrollBar style={{ minHeight: '140px' }}>
          <div className="cat-list">
            {filmCategories.map((category) =>
              category.type === mediaType ? (
                <Link
                  key={category.id}
                  href={`/${linkPath}/cat/${category.name.toLowerCase()}`}
                  className="card cat-card"
                >
                  {category.name}
                </Link>
              ) : (
                ''
              ),
            )}
          </div>
        </ScrollBar>
        <div className="genre-list">
          {genreList.map((genre, i) => (
            <Link key={i} href={`#${genre.name}`} className="card genre-card">
              <div>
                <p>{genre.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <br />
        {filmList.map((list, i) => {
          return (
            <div id={genreList[i].name} key={i}>
              <FilmGrid
                title={genreList[i].name}
                mediaType={mediaType}
                data={list.results}
                isGenre
              />
              <Link href={`/${linkPath}/genre/${genreList[i].id}`}>
                <Button radius="20px" margin="0 0 30px 50px" padding="10px">
                  See More
                </Button>
              </Link>
            </div>
          )
        })}
      </div>
    </PageBody>
  )
}

const PageBody = styled.div`
  display: grid;

  h1 {
    padding: 1rem 2rem;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--dark-theme-color));
    color: rgb(var(--main-text-color));
    cursor: pointer;
    transition: 0.3s;
    text-transform: capitalize;
  }

  .content {
    width: 100%;
    overflow: hidden;

    .cat-list {
      padding-inline: 1rem;
      display: flex;
      gap: 0.5rem;
      margin: 1rem auto;

      .cat-card {
        padding: 2.8rem 2rem;
        border-radius: 2rem;
        width: 200px;

        :hover,
        :focus {
          transform: scale(1.05);
          color: rgb(var(--main-theme-color));
        }
      }
    }

    .genre-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      justify-content: center;
      padding-block: 1rem;

      .genre-card {
        border-radius: 3rem;
        width: 70px;
        height: 70px;
        text-align: center;
        font-size: 0.65rem;
        padding: 5px;

        :hover,
        :focus {
          transform: scale(1.1);
        }

        :nth-child(odd) {
          background-color: rgb(var(--main-theme-color));
        }
      }
    }
  }
`

export default MainFilmPageContent
