import Link from 'next/link'
import styled from 'styled-components'
import Button from './global/Button'

interface Props {
  categoryName: string
  show: string
}

const Category = ({ categoryName, show }: Props) => {
  return (
    <Cont>
      <Heading>
        <div className='name'>
          <p className='category-name'>{categoryName}</p>
          <p className='show-type'>{show}</p>
        </div>
        <div>
          <Link href='/'>
            <Button
              border='none'
              color='transparent'
              radius='10px'
              cursor='pointer'
            >
              SHOW MORE
            </Button>
          </Link>
        </div>
      </Heading>
      <List>

      </List>
    </Cont>
  )
}

const Cont = styled.div`
  padding: 1rem;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  .name {
    display: flex;
    gap: 10px;

    .show-type {
      border-radius: 6px;
      border: 1px solid white;
      font-size: .6em;
      padding: 3px 10px;
      text-transform: uppercase;
    }
  }
`

const List = styled.div`

`

export default Category

