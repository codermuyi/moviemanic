import useSwr from 'swr'

import { Profile } from '../types'

import { myFetch } from '@/assets/utilities'

export default function useGetUsername() {
  const { data } = useSwr<Profile[]>('/api/profile-details', myFetch)
  const username: string | undefined = data?.[0]?.username
  return username
}
