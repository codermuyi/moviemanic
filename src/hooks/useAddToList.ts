import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-toastify'

import { FilmDetailsType, FilmItem } from '../types'

import { toastOptions } from '@constants'

const useAddToList = (info: FilmDetailsType | FilmItem, mediaType: string) => {
  const supabase = useSupabaseClient()
  const session = useSession()
  const type = mediaType === 'tv' ? 'TV Series' : 'Movie'

  async function setFilmInfo() {
    if (info && session) {
      const toastId = toast.loading('Please wait...')
      const { status } = await supabase.from('film_list').insert([
        {
          media_type: mediaType,
          film_id: info.id,
          user_id: session?.user.id,
          title: info.title || info.name,
          // To avoid duplicates for each user
          dup: session?.user.id + info.id,
        },
      ])

      if (status === 201) {
        toast.update(toastId, {
          render: `Added ${type} to your list`,
          type: 'success',
          ...toastOptions,
        })
      } else if (status === 409) {
        toast.update(toastId, {
          render: `${type} already in your list`,
          type: 'info',
          ...toastOptions,
        })
      } else if (status === 400) {
        toast.update(toastId, {
          render: `Unable to add ${type} to your list`,
          type: 'error',
          ...toastOptions,
        })
      } else if (status === 0) {
        toast.update(toastId, {
          render: 'Failed to upload',
          type: 'error',
          ...toastOptions,
        })
      }
    }
  }

  return () => setFilmInfo()
}

export default useAddToList
