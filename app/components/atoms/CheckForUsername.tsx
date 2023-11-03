import { useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'

import Loader from '@atoms/Loader'
import { routesV1 } from '@constants'
import { Profile } from '@/src/types'

interface Props {
  profile: Profile
  children: ReactNode
}

const CheckForUsername = ({ profile, children }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (!profile?.username) {
      router.push(routesV1.GET_STARTED)
    }
  }, [profile])

  return profile?.username ? <>{children}</> : <Loader paddingBlock="10rem" />
}

export default CheckForUsername
