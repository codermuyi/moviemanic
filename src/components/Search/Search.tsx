import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Button from '@atoms/Button'
import { SearchIcon } from '@atoms/SVGIcons'
import { breakpoints } from '@constants'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isDisabled, setDisabled] = useState<boolean>(true)
  const router = useRouter()

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value)
    setDisabled(e.target.value === '')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push({
      pathname: `/search/${searchQuery}`,
      query: { page: 1 },
    })
  }

  return (
    <Cont onSubmit={handleSubmit} className="flex-center">
      <Field className="flex-center">
        <SearchIcon width="30px" height="30px" fill="currentColor" />
        <input
          type="search"
          placeholder="Search for Movies or TV Shows"
          value={searchQuery}
          onChange={handleChange}
        />
      </Field>
      <Button padding=" .8em 1em" disabled={isDisabled}>
        Search
      </Button>
    </Cont>
  )
}

const Cont = styled.form`
  padding: 1rem 2rem;
  gap: 1em;

  @media ${breakpoints.lg} {
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      rgb(var(--dark-theme-color)),
      rgb(var(--main-theme-color))
    );
    padding: 0.5rem 0;
    margin-block: 3px 1rem;
  }

  .button {
    color: rgb(var(--main-text-color));
    cursor: pointer;

    :hover {
      background-color: white;
      color: rgb(var(--sec-text-color));
    }
  }
`

const Field = styled.div`
  gap: 1em;
  position: relative;
  width: 100%;
  max-width: 500px;

  > * {
    position: absolute;
    left: 0;
  }

  svg {
    margin-left: 0.3rem;
  }

  input {
    right: 0;
    padding: 1rem;
    padding-left: 2.5rem;
    background: inherit;
    border: 0;
    color: rgb(var(--main-text-color));

    ::placeholder {
      color: rgb(var(--main-text-color), 0.5);
    }

    :focus {
      outline: 0;
      border-bottom: 1px solid rgb(var(--main-text-color));
    }

    @media ${breakpoints.lg} {
      padding-block: 0.4rem;
      font-size: 1.2rem;
    }
  }
`

export default Search
