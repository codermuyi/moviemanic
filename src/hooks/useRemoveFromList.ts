import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-toastify'

import { toastOptions } from '@constants'

const useRemoveFromList = (id: string | number, mediaType: string) => {
  const supabase = useSupabaseClient()
  const type = mediaType === 'tv' ? 'TV series' : 'Movie'

  async function setFilmInfo() {
    if (id) {
      const toastId = toast.loading('Please wait...')

      const { data: datum } = await supabase
        .from('film_list')
        .select()
        .eq('film_id', id)

      const { status } = await supabase
        .from('film_list')
        .delete()
        .eq('film_id', id)

      if (datum?.length === 0) {
        toast.update(toastId, {
          render: `${type} not in your list`,
          type: 'info',
          ...toastOptions,
        })
      } else if (status === 204) {
        toast.update(toastId, {
          render: `Removed ${type} from your list`,
          type: 'success',
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

export default useRemoveFromList
