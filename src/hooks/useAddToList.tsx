import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-toastify'

import { toastOptions } from '@/assets/utilities'

const useAddToList = (info: any, mediaType: string) => {
  const supabase = useSupabaseClient()
  const session = useSession()
  const type = mediaType === 'tv' ? 'TV Series' : 'Movie'

  async function setFilmInfo() {
    if (info) {
      const toastId = toast.loading("Please wait...")

      const { status } = await supabase
        .from('film_list')
        .insert([
          {
            media_type: mediaType,
            film_id: info.id,
            user_id: session?.user.id,
            title: info.title || info.name,
            year: parseInt(info.release_date || info.first_air_date),
            poster_path: info.poster_path,
            backdrop_path: info.backdrop_path,
            genres: info.genres.map((g: any) => g.name),
            status: info.status,
            // To avoid duplicates for each user
            dup: session?.user.id + info.id
          }
        ])

      if (status === 201) {
        toast.update(toastId, {
          render: `Added ${type} to your list`,
          type: "success",
          ...toastOptions
        });
      } else if (status === 409) {
        toast.update(toastId, {
          render: `${type} already in your list`,
          type: "info",
          ...toastOptions
        });
      } else if (status === 400) {
        toast.update(toastId, {
          render: `Unable to add ${type} to your list`,
          type: "error",
          ...toastOptions
        });
      } else if (status === 0) {
        toast.update(toastId, {
          render: 'Failed to upload',
          type: "error",
          ...toastOptions
        });
      }
    }
  }

  return () => setFilmInfo()
}

export default useAddToList
