import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router'

import Loader from '@atoms/Loader';
import { routes } from '@constants';
import { Profile } from '@/src/types'

interface Props {
  profile: Profile
  children: ReactNode
}

const CheckForUsername = ({ profile, children }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (!profile?.username) {
      router.push(routes.GET_STARTED)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  return profile?.username ? children : <Loader paddingBlock='10rem' />
}

export default CheckForUsername
