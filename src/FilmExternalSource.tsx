import styled from 'styled-components'
import Button from './global/Button'
import Link from 'next/link'

interface HAHAProps {
  imdb: string
  website: string
}

const FilmExternalSource = ({ imdb, website }: HAHAProps) => {
  if (!imdb && !website) return <></>
  return (
    <HAHA>
      {
        imdb && <Link href={`https://www.imdb.com/title/${imdb}`}>
          <Button
            bgColor='rgb(var(--theme-main-color))'
            border='none'
            radius='10px'
            padding='1rem'
            cursor='pointer'
          >
            IMDB
          </Button>
        </Link>
      }
      {
        website && <Link href={website}>
          <Button
            bgColor='rgb(var(--theme-main-color))'
            border='none'
            radius='10px'
            padding='1rem'
            cursor='pointer'
          >
            Website
          </Button>
        </Link>
      }
    </HAHA>
  )
}

const HAHA = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem 0;

  .button:hover {
    background-color: white !important;
    color: black;
  }
`

export default FilmExternalSource
