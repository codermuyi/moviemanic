import styled from 'styled-components'
import useSwr from 'swr';
import FilmGrid from '@/src/atoms/FilmGrid';
import ScrollBar from 'src/atoms/ScrollBar'
import Loader from 'src/atoms/Loader'
import breakpoints from 'assets/breakpoints'
import { filmCategories } from 'assets/film_info'
import { myFetch } from '@/assets/utilities';
import FilmCard2 from '../Cards/FilmCard2';

const UserInfoJSX = ({ username, filmList }: any) => {
  const { data: categories, isLoading } = useSwr('/api/categories', myFetch)

  function getSeconds(date: string) {
    return (new Date(date)).getTime() / 1000
  }

  const newFilmList = filmList.sort((a: any, b: any) => {
    return getSeconds(b.created_at) - getSeconds(a.created_at)
  })

  const movies = newFilmList.filter((film: any) => film.media_type === 'movie')
  const tv_series = newFilmList.filter((film: any) => film.media_type === 'tv')

  return (
    <UserInfo>
      <div>
        <p className='username' style={{ fontSize: '2.3rem' }}>
          <span>Welcome, {username}</span>
          <span className='smile'>: )</span>
        </p>
        <div className='film-list'>
          <div className='movie-list'>
            <h2 className='title'>Movies</h2>
            {
              movies?.[0] ?
                <div className='film-grid'>
                  {movies.map((film: any, i: number) => <FilmCard2
                    key={i}
                    isTrending={false}
                    type={film.media_type}
                    data={film}
                  />)}
                </div>
                : <p>Movies added to your list will show up here</p>
            }
            <br />
          </div>
          <div className='tv-list'>
            <h2 className='title'>TV Series</h2>
            {
              tv_series?.[0] ?
                <div className='film-grid'>
                  {tv_series.map((film: any, i: number) => <FilmCard2
                    key={i}
                    isTrending={false}
                    type={film.media_type}
                    data={film}
                  />)}
                </div>
                : <p>TV Series added to your list will show up here</p>
            }
            <br />
          </div>
        </div>
        {filmList.length === 0 && <p>
          *To add films to your list, click on the + icon on film poster
        </p>}
        <br />
      </div>

      <Aside>
        <h2 className='title'>Check out these movies and tv series</h2>
        <ScrollBar style={{ maxHeight: '100%' }} autoHide={false}>
          <br />
          {
            !isLoading ? filmCategories?.map((c: any, i: number) =>
              <FilmGrid
                key={c.id}
                isListStyle
                data={categories?.[i]?.results}
                mediaType={c.type}
                title={c.name}
              />
            )
              : <Loader paddingBlock='7rem' />
          }
        </ScrollBar>
      </Aside>
    </UserInfo>
  )
}


const UserInfo = styled.div`
  padding: 1rem;

  .username {
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .smile {
      transform: rotate(90deg);
      color: rgb(var(--main-theme-color));
      font-weight: bold;
      text-shadow: 0 3px 5px rgb(0 0 0);
    }
  }

  .film-list {
    padding: 1rem;

    .title {
      position: relative;
      font-size: 200%;

      ::before {
        content: '';
        position: absolute;
        left: -15px;
        height: 100%;
        width: 4px;
        background-color: rgb(var(--main-theme-color));
      }
    }
    p {
      padding: 1rem;
    }
    .film-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, 150px);
      gap: 1rem;
      padding-block: 1rem;
    }
  }

  @media ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 340px;
  }
`

const Aside = styled.div`
  h2.title {
    margin-bottom: 2rem;
    text-align: center;
  }

  @media ${breakpoints.lg} {
    position: sticky;
    top: 0;
    max-height: 96vh;
    overflow: hidden;
    background-color: rgb(var(--f-bg-color), .6);
    border-radius: 30px;
    padding-block: .5rem;

    h2.title {
      display: none;
    }
  }
`

export default UserInfoJSX
