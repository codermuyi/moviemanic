import styled from 'styled-components'

import MovieWithCastContent from './MovieWithCastContent'

import Button from '@atoms/Button'
import RightIcon from '@icons/RightArrow'
import Dialog from '@components/Dialog'
import { FilmCast } from '@/src/types'

const FilmWithCast = ({ cast }: { cast: FilmCast }) => {
  return (
    <Dialog
      noButton
      name={
        <TheButton name={`Movies with ${cast.name}`}>
          <RightIcon width="25" height="25" />
        </TheButton>
      }
      title={
        <>
          Movies with{' '}
          <span style={{ color: 'rgb(var(--main-theme-color))' }}>
            {cast.name}
          </span>
        </>
      }
      contentStyle={{
        maxWidth: '1000px',
        overflow: 'hidden',
      }}
    >
      <MovieWithCastContent id={cast.id} />
    </Dialog>
  )
}

const TheButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 50%;
  width: 2rem;
  height: 2rem;
  background-color: rgb(var(--dark-theme-color));

  :hover,
  :focus {
    background-color: rgb(var(--main-text-color));
    color: rgb(var(--main-theme-color));
  }
`

export default FilmWithCast
