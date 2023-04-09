import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { routes } from '@constants';
import Loader from '@atoms/Loader';

const CheckForUsername = ({ profile, children }: any) => {
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
