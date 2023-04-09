import { toast } from 'react-toastify';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';

import { toastOptions } from '@constants';
import { routes } from '@constants';

export default function useChangePassword(newEmail: string) {
  const supabase = useSupabaseClient()
  const router = useRouter()

  async function changeEmail(e: any) {
    e.preventDefault()

    const toastId = toast.loading("Please wait...")
    const { data, error } = await supabase.auth.updateUser({
      password: newEmail,
    });

    if (data) {
      toast.update(toastId, {
        render: 'Email changed successfully',
        type: "success",
        ...toastOptions
      })
      router.push(routes.ACCOUNT)
    } else if (error) {
      toast.update(toastId, {
        render: 'Failed to change email',
        type: "error",
        ...toastOptions
      })
    }

    console.log(data)
  }

  return changeEmail
}
