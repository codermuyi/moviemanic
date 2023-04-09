import { GetServerSidePropsContext } from 'next';

import Auth from "@components/Auth"
import Meta from "@atoms/Meta"
import BlockBottomLink from "@atoms/BlockBottomLink"
import { routeGuard } from '@/src/routeGuard';

const SignUpPage = () => {
  return (
    <>
      <Meta
        title='Sign Up | Moviemanic'
      />
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Auth view='sign_up' />
      </div>
      <BlockBottomLink />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, true)
}

export default SignUpPage
