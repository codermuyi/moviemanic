import Auth from "@/src/auth/Auth"
import Meta from "@/src/atoms/Meta"
import BlockBottomLink from "@/src/atoms/BlockBottomLink"
import RouteGuard from '@/src/RouteGuard'

const LoginPage = () => {
  return (
    <>
      <Meta
        title='Sign Up | Moviemanic'
      />
      <RouteGuard>
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
          <Auth view='sign_up' />
        </div>
        <BlockBottomLink />
      </RouteGuard>
    </>
  )
}

export default LoginPage
