'use client'

import styled from 'styled-components'
import Link from 'next/link'

import { routesV1 } from '@constants'

const BlockBottomLink = () => {
  return (
    <Bottom>
      <Link className="card" href={routesV1.MOVIES}>
        <div>
          <p>Movies</p>
        </div>
      </Link>
      <Link className="card" href={routesV1.TV_SERIES}>
        <div>
          <p>TV Series</p>
        </div>
      </Link>
      <div className="card no-hover"></div>
      <div className="card no-hover"></div>
    </Bottom>
  )
}

const Bottom = styled.div`
  display: grid;
  gap: 0.8rem;
  padding: 3rem 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-width: 500px;
  margin-inline: auto;

  .card {
    background-color: rgb(var(--dark-theme-color));
    color: rgb(var(--main-text-color));
    cursor: pointer;
    transition: 0.3s;
    padding: 2.8rem 2rem;
    border-radius: 2rem;

    :not(.no-hover) {
      :hover,
      :focus {
        transform: scale(1.05);
        color: rgb(var(--main-theme-color));
      }
    }

    :nth-child(1) {
      grid-column: 1 / 3;
    }

    :nth-child(2) {
      grid-column: 2 / 5;
      grid-row: 2 / 3;
    }
    :nth-child(4) {
      grid-row: 2 / 3;
    }

    &.no-hover {
      background-color: rgb(var(--main-theme-color));
      cursor: initial;
    }
  }
`

export default BlockBottomLink
