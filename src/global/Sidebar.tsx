import styled from 'styled-components'
import Link from 'next/link'
import {
  GridIcon,
  MovieIcon,
  TVIcon,
  MenuIcon
} from './SVGIcons'
// import breakpoints from '@/assets/breakpoints'
import Button from './Button'

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

  return (
    <>
      <SideNav className={isOpen ? 'open' : ''}>
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
              fill='black'
            />
          </Button>
        </div>

        <div className='nav-item'>
          <Link href='/' className='nav-link'>
            <GridIcon
              width={iconWidth}
              height={iconHeight}
              fill={iconFill}
            />
            <p>Home</p>
          </Link>
        </div>
        <div className='nav-item'>
          <Link href='/movies' className='nav-link'>
            <MovieIcon
              width={iconWidth}
              height={iconHeight}
              fill={iconFill}
            />
            <p>Movies</p>
          </Link>
        </div>
        <div className='nav-item'>
          <Link href='/tv-series' className='nav-link'>
            <TVIcon
              width={iconWidth}
              height={iconHeight}
              fill={iconFill}
            />
            <p>TV Series</p>
          </Link>
        </div>
      </SideNav>
      <Overlay className='overlay' onClick={toggle}></Overlay>
    </>
  )
}

const SideNav = styled.div`
  --sb-width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 0;
  z-index: 3000;
  background-color: white;
  color: rgb(var(--sec-text-color));
  transition-duration: .2s;

  &.open {
    width: var(--sb-width);
  }

  .nav-item {
    width: var(--sb-width);

    &.toggle {
      padding: 1rem;
      background-color: rgb(var(--theme-main-color));
      margin-bottom: 0.6rem;
    }

    .nav-link {
      display: flex;
      gap: 1rem;
      align-items: center;
      width: 100%;
      padding: .5rem 1rem;
    }
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
  background-color: rgb(0 0 0 / .5);
`

export default Sidebar
