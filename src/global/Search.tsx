import { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';
import { SearchIcon } from './SVGIcons'
import breakpoints from '@/assets/breakpoints';

const Search = () => {
  return (
    <Cont>
      <Field>
        <SearchIcon
          width='30px'
          height='30px'
          fill='currentColor'
        />
        <input type='search' placeholder='Search for Movies or TV Shows' />
      </Field>
      <Button
        border='none'
        bgColor='white'
        color='rgb(var(--sec-text-color))'
        radius='10px'
        cursor='pointer'
        padding=' .8em 1em'
      >
        Search
      </Button>
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  padding: 1rem 2rem;
  gap: 1em;
  max-width: 800px;
  margin-inline: auto;

  @media ${breakpoints.lg} {
    padding-top: 3rem;
    font-size: 2rem;
  }
  
`

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  position: relative;
  width: 100%;

  > * {
    position: absolute;
    left: 0;
  }

  svg {
    margin-left: .3rem;
  }

  input {
    right: 0;
    padding: 1em;
    padding-left: 2.5rem;
    background: inherit;
    border: 0;

    ::placeholder {
      color: rgb(var(--main-text-color), .5);
    }

    :focus {
      outline: 0;
      border-bottom: 1px solid rgb(var(--main-text-color));
    }

    @media ${breakpoints.lg} {
      font-size: 1rem;
    }
  }
`

export default Search
