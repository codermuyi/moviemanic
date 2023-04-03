import styled from 'styled-components'
import useSwr from 'swr';

import ScrollBar from 'src/atoms/ScrollBar'
import FilmGrid from '@/src/atoms/FilmGrid';
import Loader from 'src/atoms/Loader'
import breakpoints from 'assets/breakpoints'
import { filmCategories } from 'assets/film_info'
import { myFetch } from '@/assets/utilities';

const MiniCategories = () => {
  const { data: categories, isLoading } = useSwr('/api/categories', myFetch)

  return (
    <Aside>
      <h2 className='title'>Check out these movies and tv series</h2>
      <ScrollBar style={{ maxHeight: '100%' }} autoHide={false}>
        <br />
        {
          !isLoading ? filmCategories?.map((c: any, i: number) =>
            <FilmGrid
              key={c.id}
              isListStyle
              data={categories?.[i]?.results}
              mediaType={c.type}
              title={c.name}
            />
          )
            : <Loader paddingBlock='7rem' />
        }
      </ScrollBar>
    </Aside>
  )
}


const Aside = styled.div`
  background-color: rgb(var(--f-bg-color), .6);
  padding-block: .5rem;
  border-radius: 30px;
  
  h2.title {
    margin-block: 2rem;
    text-align: center;
  }

  @media ${breakpoints.lg} {
    position: sticky;
    top: 0;
    max-height: 96vh;
    overflow: hidden;

    h2.title {
      display: none;
    }
  }
`


export default MiniCategories
