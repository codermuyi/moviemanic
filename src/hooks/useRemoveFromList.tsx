import { useState, FC } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import Toast from 'src/Toast'

const useRemoveFromList = (id: string | number, mediaType: string) => {
  const supabase = useSupabaseClient()
  const [toastMessage, setToastMessage] = useState('')
  const [toastOpen, setToastOpen] = useState(false)

  const type = mediaType === 'tv' ? 'TV Series' : 'Movie'

  async function setFilmInfo() {
    if (id) {
      const { data: datum } = await supabase
        .from('film_list')
        .select()
        .eq('film_id', id)

      const { status } = await supabase
        .from('film_list')
        .delete()
        .eq('film_id', id)

      if (datum?.length === 0) {
        setToastOpen(true)
        setToastMessage(`${type} not in your list`)
      }
      else if (status === 204) {
        setToastOpen(true)
        setToastMessage(`Removed ${type} from your list`)
      }
      else if (status === 0) {
        setToastOpen(true)
        setToastMessage('Failed to upload')
      }
    }
  }

  const RemoveFilmToast = () => (
    <Toast
      open={toastOpen}
      setOpen={setToastOpen}
      message={toastMessage}
    />
  )

  const result: [
    removeFromList: () => Promise<void>,
    RemoveFilmToast: FC,
  ] = [
      () => setFilmInfo(),
      RemoveFilmToast,
    ];

  return result
}

export default useRemoveFromList
