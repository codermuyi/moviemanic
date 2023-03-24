import React from 'react'
import styled from 'styled-components'
import { filmCategories, movieGenres } from "@/assets/film_info"
import SimpleBar from "simplebar-react"
import Link from 'next/link'
import FilmGrid from "@/src/atoms/FilmGrid"
import Button from '@/src/atoms/Button'

const MainFilmPageContent = ({ data, mediaType }: any) => {
  const title = mediaType === 'movie' ? 'Movies' : 'TV Series'
  const linkPath = mediaType === 'movie' ? 'movies' : 'tv-series'

  return (
    <PageBody>
      <h1>{title}</h1>
      <div className='content'>
        <SimpleBar style={{ minHeight: '100px' }}>
          <div className='cat-list'>
            {
              filmCategories.map((category) =>
                (category.type === mediaType) ?
                  <Link key={category.id} href={`/${linkPath}/cat/${category.name.toLowerCase()}`}>
                    <div className='card cat-card'>
                      {category.name}
                    </div>
                  </Link>
                  : '')
            }
          </div>
        </SimpleBar>
        <div className='genre-list'>
          {data.genreList.genres.map((genre: any, i: number) => <Link
            key={i}
            href={`#${genre.name}`}
            className='card genre-card'
          >
            <div>
              <p>{genre.name}</p>
            </div>
          </Link>
          )}
        </div>
        <br />
        {
          data.filmList.map((list: any, i: number) => {
            return <div id={data.genreList.genres[i].name} key={i}>
              <FilmGrid
                title={data.genreList.genres[i].name}
                mediaType={mediaType}
                data={list.results}
                isGenre
              />
              <Link href={`/${linkPath}/genre/${data.genreList.genres[i].id}`}>
                <Button
                  radius='20px'
                  margin='0 0 30px 50px'
                  padding='10px'
                >
                  See More
                </Button>
                {/* <button className='button'> See More</button> */}
              </Link>
            </div>
          })
        }
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
    background-color: rgb(var(--f-bg-color));
    color: rgb(var(--f-text-color));
    cursor: pointer;
    transition: transform .3s;
    text-transform: capitalize;

    :hover {
      transform: scale(1.1);
    }
  }

  .content {
    width: 100%;
    overflow: hidden;
    
    .cat-list {
      padding-inline: 1rem;
      display: flex;
      gap: .5rem;
      margin: 1rem auto;

      .cat-card {
        padding: 2.8rem 2rem;
        border-radius: 2rem;
        width: 200px;
      }
    }

    .genre-list {
      display: flex;
      flex-wrap: wrap;
      gap: .8rem;
      justify-content: center;
      padding-block: 1rem;

      .genre-card {
        border-radius: 3rem;
        width: 70px;
        height: 70px;
        text-align: center;
        font-size: .65rem;
        padding: 5px;
        
        :nth-child(odd) {
          background-color: rgb(var(--main-theme-color));
        }
      }
    }
  }
`

export default MainFilmPageContent