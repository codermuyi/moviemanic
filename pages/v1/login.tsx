import { GetServerSidePropsContext } from 'next'

import Auth from '@components/Auth'
import Meta from '@atoms/Meta'
import BlockBottomLink from '@atoms/BlockBottomLink'
import { routeGuard } from '@/src/routeGuard'

const LogInPage = () => {
  return (
    <>
      <Meta title="Sign In | Moviemanic" />
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Auth view="sign_in" />
      </div>
      <BlockBottomLink />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, true)
}

export default LogInPage
