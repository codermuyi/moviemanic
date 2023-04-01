import styled from 'styled-components'
import useSwr from 'swr';
import FilmGrid from '@/src/atoms/FilmGrid';
import ScrollBar from 'src/atoms/ScrollBar'
import Loader from 'src/atoms/Loader'
import breakpoints from 'assets/breakpoints'
import { filmCategories } from 'assets/film_info'
import { myFetch } from '@/assets/utilities';

const UserInfoJSX = ({ profile, session, filmList }: any) => {
  const { data: categories, isLoading } = useSwr('/api/categories', myFetch)

  return (
    <>
      {
        profile?.[0] && <UserInfo>
          <div>
            <p className='username' style={{ fontSize: '2rem' }}>
              Welcome, {profile[0].username} <span className='smile'>: )</span>
            </p>
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
            {filmList.length === 0 && <p>
              *To add films to your list, click on the bookmark icon.
            </p>}
            <br />
          </div>

          <Aside>
            <h2 className='title'>Check out these movies and tv series</h2>
            <ScrollBar style={{ maxHeight: '100%' }} autoHide={false}>
              {
                !isLoading ? filmCategories?.map((c: any, i: number) =>
                  <div key={c.id}>
                    <FilmGrid
                      isListStyle
                      data={categories?.[i]?.results}
                      mediaType={c.type}
                      title={c.name}
                    />
                  </div>
                )
                  : <Loader paddingBlock='7rem' />
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
    overflow: hidden;
    background-color: rgb(var(--f-bg-color), .6);
    border-radius: 20px;

    h2.title {
      display: none;
    }
  }
`

export default UserInfoJSX
