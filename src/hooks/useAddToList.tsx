import { useState, FC } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Toast from 'src/Toast'

const useAddToList = (info: any, mediaType: string) => {
  const supabase = useSupabaseClient()
  const session = useSession()
  const [toastMessage, setToastMessage] = useState('')
  const [toastOpen, setToastOpen] = useState(false)

  const type = mediaType === 'tv' ? 'TV Series' : 'Movie'

  async function setFilmInfo() {
    if (info) {
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
        setToastOpen(true)
        setToastMessage(`Added ${type} to your list`)
      }
      else if (status === 409) {
        setToastOpen(true)
        setToastMessage(`${type} already in your list`)
      }
      else if (status === 400) {
        setToastOpen(true)
        setToastMessage(`Unable to add ${type} to your list`)
      }
      else if (status === 0) {
        setToastOpen(true)
        setToastMessage('Failed to upload')
      }
    }
  }

  const AddFilmToast = () => (
    <Toast
      open={toastOpen}
      setOpen={setToastOpen}
      message={toastMessage}
    />
  )

  const result: [
    addToList: () => Promise<void>,
    AddFilmToast: FC,
  ] = [
      () => setFilmInfo(),
      AddFilmToast,
    ];

  return result
}

export default useAddToList
