import styled from 'styled-components'
import Image from 'next/image'
import {
  MainIcon,
  ProfileIcon,
  GridIcon,
  MovieIcon,
  TVIcon,
} from './SVGIcons'

/*
  movie
  grid
  movie-2
  television
*/

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
      <div className='nav'>
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
      </div>
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
  background-color: rgb(78, 100, 160);
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

// console.log('the key is: ' + process.env.NEXT_PUBLIC_TMDB_API_KEY);

export default Navbar;