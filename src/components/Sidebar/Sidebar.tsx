import styled from 'styled-components'
import useSwr from 'swr'

import {
  GridIcon,
  MovieIcon,
  TVIcon,
  MenuIcon
} from '@atoms/SVGIcons'
import Button from '@atoms/Button'
import SidebarDropdown from './SidebarDropdown'
import ScrollBar from '@atoms/ScrollBar'
import NavLink from '@atoms/NavLink'
import { filmCategories } from '@/assets/film_info'
import { myFetch } from '@/assets/utilities'

interface SidebarProps {
  iconFill: string
  isOpen: boolean
  toggle: () => void
}

const Sidebar = ({
  iconFill,
  isOpen,
  toggle,
}: SidebarProps) => {
  const { data: movieGenres } = useSwr('/api/genre/movie/small-list', myFetch)
  const { data: tvGenres } = useSwr('/api/genre/tv/small-list', myFetch)

  const iconWidth = 25
  const iconHeight = 25

  let tvCatList = ['TV Series', 'Genres']
  let movieCatList = ['Movies', 'Genres']

  filmCategories.forEach(category => {
    if (category.type === 'movie')
      movieCatList.push(category.name)
    else
      tvCatList.push(category.name)
  })

  const movieGenreLinks = movieGenres?.map((genre: any) =>
    <NavLink key={genre.id} href={`/movies/genre/${genre.id}`}>
      <p>{genre.name}</p>
    </NavLink>
  )

  const tvGenreLinks = tvGenres?.map((genre: any) =>
    <NavLink key={genre.id} href={`/tv-series/genre/${genre.id}`}>
      <p>{genre.name}</p>
    </NavLink>
  )

  return (
    <>
      <SideNav className={isOpen ? 'open' : ''}>
        <ScrollBar style={{ maxHeight: '95vh' }}>
          <div className="nav-item toggle">
            <Button
              bgColor='transparent'
              onClick={toggle}
            >
              <MenuIcon
                width={iconWidth}
                height={iconHeight}
                fill='rgb(var(--f-text-color))'
              />
            </Button>
          </div>

          <NavLink href='/' className='nav-item nav-link'>
            <GridIcon
              width={iconWidth}
              height={iconHeight}
            />
            <p>Home</p>
          </NavLink>

          <SidebarDropdown
            name='movie'
            dataID='open-by-default'
            toggleElementContent={
              <>
                <MovieIcon width={iconWidth} height={iconHeight} fill={iconFill} />
                <p>Movies</p>
              </>
            }
            isSidebarOpen={isOpen}
          >
            {movieCatList.map((cat, i) => {
              if (cat === 'Genres') {
                return <SidebarDropdown
                  key={i}
                  name='movie-genre'
                  toggleElementContent={<p>_ Genres</p>}
                  isSidebarOpen={isOpen}
                >
                  {movieGenreLinks}
                </SidebarDropdown>
              } else {
                return <NavLink href={cat === 'Movies' ? '/movies' : `/movies/cat/${cat.toLowerCase()}`} key={i}>
                  <p>{cat}</p>
                </NavLink>
              }
            }
            )}
          </SidebarDropdown>

          <SidebarDropdown
            name='tv'
            dataID='open-by-default'
            toggleElementContent={
              <>
                <TVIcon width={iconWidth} height={iconHeight} fill={iconFill} />
                <p>TV Series</p>
              </>
            }
            isSidebarOpen={isOpen}
          >
            {tvCatList.map((cat, i) => {
              if (cat === 'Genres')
                return <SidebarDropdown
                  name='tv-genre'
                  key={i}
                  toggleElementContent={<p>_ Genres</p>}
                  isSidebarOpen={isOpen}
                >
                  {tvGenreLinks}
                </SidebarDropdown>
              else
                return <NavLink href={cat === 'TV Series' ? '/tv-series' : `/tv-series/cat/${cat.toLowerCase()}`} key={i}>
                  <p>{cat}</p>
                </NavLink>
            }
            )}
          </SidebarDropdown>
        </ScrollBar>
      </SideNav>
      <Overlay className='overlay' onClick={toggle}></Overlay>
    </>
  )
}

const SideNav = styled.div`
  --sb-width: 250px;
  position: fixed;
  top: 0;
  left: -250px;
  bottom: 0;
  width: var(--sb-width);
  z-index: 3000;
  background-color: rgb(var(--f-bg-color));
  color: rgb(var(--f-text-color));
  transition-duration: .2s;
  padding-bottom: 40rem;

  &.open {
    left: 0;
  }

  .nav-item {
    width: var(--sb-width);
    transition-duration: .2s;
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    padding: .3rem 1rem;
    background-color: rgb(var(--f-bg-color));
    color: rgb(var(--sub-theme-color));

    &.toggle {
      padding: 1rem;
      margin-bottom: 0.6rem;
    }

    &:not(.toggle) {
      cursor: pointer;
    }

    &:not(.toggle):hover {
      padding-left: 1.3rem;
    }
  }

  a {
    transition-duration: .2s;
  }

  a:hover {
    color: rgb(var(--main-theme-color));
  }

  & + .overlay {
    z-index: -10;
  }

  &.open + .overlay {
    z-index: 2000;
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / .6);
  -webkit-backdrop-filter: blur(3px) brightness(100%);
  backdrop-filter: blur(3px) brightness(100%);
  cursor: pointer;
`

export default Sidebar