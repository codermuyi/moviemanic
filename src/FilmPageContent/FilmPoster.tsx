import Image from 'next/image'
import styled from 'styled-components'
import useSwr from 'swr'
import { useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Button from 'src/atoms/Button'
import breakpoints from '@/assets/breakpoints'
// import useSupabase from '../useSupabase'
import { myFetch } from '@/assets/utilities'

const FilmPoster = ({ path, info, mediaType }: { path: string, info: any, mediaType: string }) => {
  const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w1280${path}`)
  const supabase = useSupabaseClient()
  const session = useSession()
  const { data: profile } = useSwr('/api/profile-details', myFetch)

  // const [supabase, session] = useSupabase()
  console.log(mediaType, info)

  async function setFilmInfo() {
    // const { status } = await supabase
    //   .from('film_list')
    //   .insert([
    //     {
    //       media_type: mediaType,
    //       film_id: info?.id,
    //       user_id: session?.user.id,
    //       title: info?.title || info?.name,
    //       year: parseInt(info?.release_date || info?.first_air_date),
    //       poster_path: path,
    //       backdrop_path: info?.backdrop_path,
    //       genres: info?.genres.map((g: any) => g.name),
    //       status: info?.status
    //     }
    //   ])
    if (info !== null) {
      const { status } = await supabase
        .from('film_list')
        .insert([
          {
            media_type: mediaType,
            film_id: info.id,
            user_id: session?.user.id,
            title: info.title || info.name,
            year: parseInt(info.release_date || info.first_air_date),
            poster_path: path,
            backdrop_path: info.backdrop_path,
            genres: info.genres.map((g: any) => g.name),
            status: info.status
          }
        ])

      console.log('Status: ', status)
    }
  }

  return (
    <Poster className='film-poster'>
      <div className='sticky'>
        <Image
          src={src}
          alt='image'
          width={250}
          height={350}
          className='poster-img'
          onError={() => setSrc('/no-image.svg')}
        />
        {profile?.[0]?.username && <Button onClick={() => setFilmInfo()}>Add to list</Button>}
      </div>
    </Poster>
  )
}

const Poster = styled.div`
  padding-block: 1rem;

  .poster-img {
    object-fit: cover;
    display: block;
    margin-inline: auto;
    border-radius: 10px;
  }

  .sticky .button {
    padding: .3rem;
    position: absolute;
    top: 20px;
    transform: translate(50%, 100%);
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  
  @media ${breakpoints.md} {
    .sticky {
      position: sticky;
      top: 100px;
    }

    .poster-img {
      width: 300px;
      height: 400px;
    }
  }
  
  @media ${breakpoints.lg} {
    .sticky {
      top: 30px;
    }
  }
`

const AddToList = styled(Button)`
  padding: 1rem;
  position: absolute;
  top: 0;
`

export default FilmPoster
