import Auth from "@components/Auth"
import Meta from "@atoms/Meta"
import BlockBottomLink from "@atoms/BlockBottomLink"
import RouteGuard from '@atoms/RouteGuard'

const SignUpPage = () => {
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

export default SignUpPage
