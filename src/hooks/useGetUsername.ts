import useSwr, { SWRResponse} from 'swr'
import { myFetch } from '@/assets/utilities'

export default function useGetUsername() {
  const { data } = useSwr('/api/profile-details', myFetch)
  const username: string | undefined = data?.[0]?.username
  return username
}
