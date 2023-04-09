import { toast } from 'react-toastify';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';

import { toastOptions } from '@constants';
import { routes } from '@constants';

export default function useChangePassword(newPassword: string) {
  const supabase = useSupabaseClient()
  const router = useRouter()

  async function changePassword(e: any) {
    e.preventDefault()
    
    const toastId = toast.loading("Please wait...")
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (data) {
      toast.update(toastId, {
        render: 'Password changed successfully',
        type: "success",
        ...toastOptions
      })
      router.push(routes.ACCOUNT)
    } else if (error) {
      toast.update(toastId, {
        render: 'Failed to change password',
        type: "error",
        ...toastOptions
      })
    }
  }

  return changePassword
}
