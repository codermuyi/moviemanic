import styled from 'styled-components'


const Navbar = () => {
  return (
    <Bar>
      <div>
        4
      </div>
      <div className='nav'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div>
        5
      </div>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: purple;

  .nav {
    display: flex;
    justify-content: space-between;
  }
`

// console.log('the key is: ' + process.env.NEXT_PUBLIC_TMDB_API_KEY);

export default Navbar;