import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = ({ title, description }: { [key: string]: string }) => {
  const router = useRouter()
  console.log(router)
  return (
    <Head>
      <title>{title}</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="rgb(78, 100, 160)" />
      <meta name="description" content={description} />

      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />

      <meta
        name="og:url"
        content={`https://moviemanic.vercel.app${router.asPath}`}
      />
      <meta name="og:description" content={description} />
      <meta name="og:image" content='/moviemanic-512x512.png' />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

  )
}

Meta.defaultProps = {
  title: 'Moviemanic',
  description: 'Search for any movie and tv show and watch trailers'
}

export default Meta
