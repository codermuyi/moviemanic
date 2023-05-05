import { toast } from 'react-toastify'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

import { toastOptions } from '@constants'
import { routes } from '@constants'

export default function useSaveUsername(username: string) {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const session = useSession()

  async function saveUsername(e: any) {
    e.preventDefault()

    const toastId = toast.loading('Please wait...')
    const { error, status } = await supabase.from('profiles').insert([
      {
        username,
        user_id: session?.user.id,
      },
    ])

    if (status === 201) {
      toast.update(toastId, {
        render: 'Set username successfully',
        type: 'success',
        ...toastOptions,
      })
      router.push(routes.ACCOUNT)
    } else if (status === 409) {
      toast.update(toastId, {
        render: 'Username exists for this account',
        type: 'error',
        ...toastOptions,
      })
    } else if (error) {
      toast.update(toastId, {
        render: 'Failed to set username',
        type: 'error',
        ...toastOptions,
      })
    }
  }

  return saveUsername
}
