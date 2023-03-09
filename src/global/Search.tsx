import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { SearchIcon } from "./SVGIcons";
import breakpoints from "@/assets/breakpoints";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
    setDisabled(e.target.value === '');
  };

  return (
    <Cont action={`/search/${searchQuery}`}>
      <Field>
        <SearchIcon width="30px" height="30px" fill="currentColor" />
        <input
          type="search"
          placeholder="Search for Movies or TV Shows"
          value={searchQuery}
          onChange={handleChange}
        />
      </Field>
      <Button
        border="none"
        radius="10px"
        padding=" .8em 1em"
        disabled={isDisabled}
      >
        Search
      </Button>
    </Cont>
  );
};

const Cont = styled.form`
  display: flex;
  padding: 1rem 2rem;
  gap: 1em;
  max-width: 800px;
  margin-inline: auto;

  @media ${breakpoints.lg} {
    padding-top: 3rem;
    font-size: 2rem;
  }

  .button {
    background-color: rgb(var(--theme-main-color));
    color: rgb(var(--main-text-color));
    cursor: pointer;
    
    :hover {
      background-color: white;
      color: rgb(var(--sec-text-color));
    }
  }

  .button:disabled {
    background-color: hsl(0, 30%, 30%);
    color: white;
    cursor: not-allowed;
  }
`;

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
    margin-left: 0.3rem;
  }

  input {
    right: 0;
    padding: 1em;
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
      font-size: 1rem;
    }
  }
`;

export default Search;
