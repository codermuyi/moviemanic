import styled from 'styled-components'
// import Image from 'next/image'
import {
  MainIcon,
  ProfileIcon,
  GridIcon,
  MovieIcon,
  TVIcon,
} from './SVGIcons'

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
  padding: 1rem 3rem;
  background-color: rgb(var(--theme-main-color));
  /* margin-inline: 1rem; */

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5em;

    div {
      width: 30px;
      height: 30px;
    }
  }
`

export default Navbar;