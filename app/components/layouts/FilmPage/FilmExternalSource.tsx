import styled from 'styled-components'
import Link from 'next/link'

import Button from '@atoms/Button'

interface HAHAProps {
  imdb?: string
  website?: string
}

const FilmExternalSource = ({ imdb, website }: HAHAProps) => {
  if (!imdb && !website) return <></>
  return (
    <HAHA>
      {imdb && (
        <Link href={`https://www.imdb.com/title/${imdb}`}>
          <Button padding="1rem">IMDB</Button>
        </Link>
      )}
      {website && (
        <Link href={website}>
          <Button padding="1rem">Website</Button>
        </Link>
      )}
    </HAHA>
  )
}

const HAHA = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem 0;

  .button:hover {
    background-color: white;
    color: black;
  }
`

export default FilmExternalSource
