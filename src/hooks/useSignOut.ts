import { useRouter } from "next/router";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-toastify'

import { routes } from "@constants";

export default function useSignOut() {
  const router = useRouter()
  const supabase = useSupabaseClient()

  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      toast.error('Failed to sign out')
    } else {
      router.push(routes.HOME)
    }
  }

  return signOut
}
