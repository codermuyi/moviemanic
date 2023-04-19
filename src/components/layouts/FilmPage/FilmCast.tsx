import styled from 'styled-components'
import ScrollBarX from '@atoms/ScrollBarX';
import CastProfile from './FilmCastProfile'

const Casts = ({ credits }: { credits: any }) => {
  return (
    <FilmCast>
      <h2 className='heading'>Casts</h2>
      {(credits.success === false || credits.cast.length === 0) && <p>No info.</p>}
      <ScrollBarX>
        <div className='cast-list'>
          {credits.cast?.map((cast: any, i: number) => (
            <CastProfile key={i} cast={cast} />
          ))}
        </div>
      </ScrollBarX>
    </FilmCast>
  )
}

const FilmCast = styled.div`
  .cast-list {
    display: flex;
    flex-grow: 0;
    gap: 1em;
    margin-block: 1rem;
  }
`

export default Casts
