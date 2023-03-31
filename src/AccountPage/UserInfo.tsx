import styled from 'styled-components'

import { filmCategories } from 'assets/film_info'
// import Category from 'src/Category'
import FilmGrid from '@/src/atoms/FilmGrid';
import ScrollBar from 'src/atoms/ScrollBar'
import breakpoints from 'assets/breakpoints'


const UserInfoJSX = ({ user, profile, filmList, categories }: any) => {
  return (
    <>
      {
        profile?.[0] && <UserInfo>
          <div>
            <p className='username' style={{ fontSize: '2rem' }}>Welcome, {profile[0].username} <span className='smile'>: )</span></p>
            <div className='film-list'>
              <div className='movie-list'>
                <h2 className='title'>Movies</h2>
                <p>Movies added to your list will show up here</p>
                <br />
              </div>
              <div className='tv-list'>
                <h2 className='title'>TV Series</h2>
                <p>TV Series added to your list will show up here</p>
                <br />
              </div>
            </div>
            {filmList.length === 0 &&
              <p>
                *To add films to your list, click on the bookmark icon.
              </p>}
            <br />
          </div>

          <Aside>
            <h2>Check out these movies and tv series</h2>
            <ScrollBar style={{ maxHeight: '100%' }} autoHide={false}>
              {
                filmCategories?.map((c: any, i: number) => <div key={c.id}>
                  <FilmGrid
                    isListStyle
                    data={categories?.[i].results}
                    mediaType={c.type}
                    title={c.name}
                  />
                  <br />
                </div>
                )
              }
            </ScrollBar>
          </Aside>
        </UserInfo>
      }
    </>
  )
}


const UserInfo = styled.div`
  padding: 1rem;

  .username {
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;

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
      ::before {
        content: '';
        position: absolute;
        left: -10px;
        height: 100%;
        width: 4px;
        background-color: rgb(var(--main-theme-color));
      }
    }
    p {
      padding: 1rem;
    }
  }
  .movies {

  }
  .tv-series {

  }

  @media ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr minmax(180px, 340px);
  }
`

const Aside = styled.div`
  @media ${breakpoints.lg} {
    position: sticky;
    top: 0;
    max-height: 100vh;
    background-color: rgb(var(--f-bg-color), .6);
    border-radius: 20px;
  }
`

export default UserInfoJSX
