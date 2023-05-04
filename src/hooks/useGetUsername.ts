import useSwr from 'swr'
import { myFetch } from '@/assets/utilities'
import { Profile } from '../types'

export default function useGetUsername() {
  const { data } = useSwr<Profile[]>('/api/profile-details', myFetch)
  const username: string | undefined = data?.[0]?.username
  return username
}
