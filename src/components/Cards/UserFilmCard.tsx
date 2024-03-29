import useSwr from 'swr'
import styled from 'styled-components'
import { SetStateAction, Dispatch } from 'react'

import CardImage from './FilmCardImage'
import CardInfo from './FilmCardInfo'
import CardDialog from './CardDialog'

import Button from '@atoms/Button'
import MinusIcon from '@icons/Minus'
import useRemoveFromList from '@hooks/useRemoveFromList'
import { breakpoints } from '@constants'
import { myFetch } from '@/assets/utilities'
import { FilmDetailsType, SupabaseData } from '@/src/types'

interface Props {
  supabaseData: SupabaseData
  setRandomNum: Dispatch<SetStateAction<number>>
}

const FilmCard = ({ supabaseData, setRandomNum }: Props) => {
  const removeFromList = useRemoveFromList(
    supabaseData.film_id,
    supabaseData.media_type,
  )

  const linkHref =
    supabaseData.media_type === 'movie'
      ? `/movies/${supabaseData.film_id}`
      : `/tv-series/${supabaseData.film_id}`

  const { data: info } = useSwr<FilmDetailsType>(
    `/api/film-item/${supabaseData.media_type}/${supabaseData.film_id}`,
    myFetch,
  )

  const remove = async () => {
    await removeFromList()
    setRandomNum(Math.random())
  }

  return info ? (
    <Card className="film-card">
      <div className="card-content">
        <div className="super-super">
          <CardInfo
            data={info}
            type={supabaseData.media_type}
            linkHref={linkHref}
            overflow
          />
          <div className="genres">
            <p className="genre">
              {info?.genres.map((g) => g?.name).join(', ')}
            </p>
          </div>
          <div className="info-2">
            <CardDialog
              info={info}
              linkHref={linkHref}
              mediaType={supabaseData.media_type}
            />
            <Button
              onClick={remove}
              className="flex-center"
              name="Remove from list"
            >
              <MinusIcon width="20px" height="20px" />
            </Button>
          </div>
        </div>
        <CardImage
          data={info}
          linkHref={linkHref}
          path={info.poster_path}
          size={185}
        />
      </div>
      <div className="card-bg">
        <div></div>
      </div>
    </Card>
  ) : (
    <Card className="film-card">
      <div className="card-bg">
        <div></div>
      </div>
    </Card>
  )
}

const Card = styled.div`
  background-color: rgb(var(--main-text-color));
  color: rgb(var(--dark-theme-color));
  margin-top: 2.5rem;
  border-radius: 20px;
  display: grid;
  min-height: 6rem;

  & > * {
    grid-area: 1 / 1;
  }

  & * {
    transition-duration: 0.3s;
  }

  .card-bg {
    overflow: hidden;
    display: grid;
    border-radius: inherit;

    div {
      grid-area: 1 / 1;
      width: 100%;
      height: 100%;
      border-top: 6px solid;
      border-image-source: linear-gradient(
        to right,
        rgb(var(--main-theme-color)) 65%,
        rgb(var(--main-text-color)) 60%
      );
      border-image-slice: 1;
    }
  }

  .card-content {
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    gap: 1rem;
  }

  .super-super {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .normal-info {
      .date-and-type {
        color: inherit;
      }
    }
  }

  .info-2 {
    display: flex;
    padding-inline: 1rem;
    gap: 0.5rem;

    .button {
      padding: 0.3rem;
    }

    @media (pointer: coarse) {
      gap: 1rem;

      .button {
        padding: 0.6rem;
      }
    }
  }

  .film-poster {
    .sticky .button.action.flex-center {
      display: none !important;
    }
  }

  .genres {
    display: inherit;
    align-items: center;
    gap: 0.4em;

    .genre {
      font-size: 0.8em;
      padding: 0;
    }
  }

  .film-card-normal-link {
    position: absolute;
    right: 16px;
    bottom: 20px;
    width: 5rem;
    height: 7.6rem;
    border-radius: 20px;
    transition: 0.3s;
  }

  .card-image {
    object-fit: conver;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  :hover,
  :focus-within {
    .film-card-normal-link {
      transform: scale(1.1);
    }
  }

  @media ${breakpoints.lg} {
    max-width: 25rem;
  }
`

export default FilmCard
