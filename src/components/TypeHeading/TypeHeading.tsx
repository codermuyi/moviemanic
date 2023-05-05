import styled from 'styled-components'

const TypeHeading = ({
  name,
  mediaType,
}: {
  name: string
  mediaType: string
}) => {
  return (
    <Heading>
      {name} <span>{mediaType === 'tv' ? 'TV Series' : 'Movie'}</span>
    </Heading>
  )
}

const Heading = styled.h1`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;

  span {
    opacity: 0.6;
    font-size: 0.8em;
  }
`

export default TypeHeading
