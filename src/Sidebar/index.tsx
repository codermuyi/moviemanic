import styled from 'styled-components'
import Link from 'next/link'
import {
  GridIcon,
  MovieIcon,
  TVIcon,
  MenuIcon
} from '../atoms/SVGIcons'
// import breakpoints from '@/assets/breakpoints'
import Button from '../atoms/Button'
import { filmCategories, movieGenres, tvGenres } from '@/assets/film_info'
import SidebarDropdown from './SidebarDropdown'
import SimpleBar from 'simplebar-react'

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

  return (
    <>
      <SideNav className={isOpen ? 'open' : ''}>
        <SimpleBar style={{ maxHeight: '95vh' }}>
          <div className="nav-item toggle">
            <Button
              bgColor='transparent'
              border='none'
              radius='none'
              onClick={toggle}
              cursor='pointer'
            >
              <MenuIcon
                width={iconWidth}
                height={iconHeight}
                fill='rgb(var(--f-text-color))'
              />
            </Button>
          </div>

          <Link href='/' className='nav-item nav-link'>
            <GridIcon
              width={iconWidth}
              height={iconHeight}
            />
            <p>Home</p>
          </Link>

          <SidebarDropdown
            name='movie'
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
                  toggleElementContent={<p>_ Genres</p>
                  }
                  isSidebarOpen={isOpen}
                >
                  {movieGenres.map((genre, j) =>
                    <Link key={i} href={`/movies/genres/${genre.toLowerCase()}`}>
                      <p>{genre}</p>
                    </Link>)
                  }
                </SidebarDropdown>
              } else {
                return <Link href={cat === 'Movies' ? '/movies' :`/movies/cat/${cat.toLowerCase()}`} key={i}>
                  <p>{cat}</p>
                </Link>
              }
            }
            )}
          </SidebarDropdown>

          <SidebarDropdown
            name='tv'
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
                  {tvGenres.map((genre, j) =>
                    <Link key={i} href={`/tv-series/genres/${genre.toLowerCase()}`}>
                      <p>{genre}</p>
                    </Link>)
                  }
                </SidebarDropdown>
              else
                return <Link href={cat === 'TV Series' ? '/tv-series' : `/tv-series/cat/${cat.toLowerCase()}`} key={i}>
                  <p>{cat}</p>
                </Link>
            }
            )}
          </SidebarDropdown>
        </SimpleBar>
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
    color: rgb(var(--theme-main-color));

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
    color: rgb(var(--theme-main-color));
  }

  & + .overlay {
    z-index: -10;
  }

  &.open + .overlay {
    z-index: 2000;
  }

  .simplebar-scrollbar::before {
    background-color: rgb(var(--theme-main-color));
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / .6);
`

export default Sidebar