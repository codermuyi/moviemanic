import { toast } from 'react-toastify';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

import { toastOptions } from '@constants';
import { routes } from '@constants';

export default function useChangeUsername(username: string) {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const session = useSession()

  async function changeUsername(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const toastId = toast.loading("Please wait...")
    const { error, status } = await supabase
      .from('profiles')
      .update([
        {
          username: username,
        }
      ])
      .match({ user_id: session?.user.id })

    if (status === 204) {
      toast.update(toastId, {
        render: 'Username changed successfully',
        type: "success",
        ...toastOptions
      })
      router.push(routes.ACCOUNT)
    } else if (error) {
      toast.update(toastId, {
        render: 'Failed to change username',
        type: "error",
        ...toastOptions
      })
    }
  }

  return changeUsername
}
