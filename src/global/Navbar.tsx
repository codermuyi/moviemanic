import styled from 'styled-components'
// import Image from 'next/image'
import {
  MainIcon,
  ProfileIcon,
  GridIcon,
  MovieIcon,
  TVIcon,
} from './SVGIcons'
import breakpoints from '@/assets/breakpoints'

const Navbar = () => {
  const iconWidth = 30
  const iconHeight = 30
  const iconFill = 'currentColor'

  return (
    <Bar>
      <div>
        <MainIcon 
          width={iconWidth}
          height={iconHeight}
          fill={iconFill}
        />
      </div>
      <nav className='nav'>
        <div>
          <GridIcon 
            width={iconWidth}
            height={iconHeight}
            fill={iconFill}
          />
        </div>
        <div>
          <MovieIcon 
            width={iconWidth}
            height={iconHeight}
            fill={iconFill}
          />
        </div>
        <div>
          <TVIcon 
            width={iconWidth}
            height={iconHeight}
            fill={iconFill}
          />
        </div>
      </nav>
      <div>
        <ProfileIcon 
          width={iconWidth}
          height={iconHeight}
          fill={iconFill}
        />
      </div>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(var(--theme-main-color));
  /* margin-inline: 1rem; */

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;

    div {
      width: 30px;
      height: 30px;
    }
  }

  @media ${breakpoints.md} {
    margin: 1rem;
    border-radius: 10px;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media ${breakpoints.lg} {
    flex-direction: column;
    height: 85%;
    width: 60px;
    margin: 3rem auto;
    padding: 2rem;
    left: 30px;
    right: initial;

    .nav {
      flex-direction: column;
    }
  }
`

export default Navbar;