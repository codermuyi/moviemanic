import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { routes } from '@constants';
import Loader from '@atoms/Loader';

const CheckForUsername = ({ profile, children }: any) => {
  const router = useRouter()

  useEffect(() => {
    if (!profile[0]?.username) {
      router.push(routes.GET_STARTED)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  return profile?.[0]?.username ? children : <Loader paddingBlock='10rem' />
}

export default CheckForUsername
