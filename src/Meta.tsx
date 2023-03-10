import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = ({ title, description }: { [key: string]: string }) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta
        name="og:url"
        content={`https://moviemanic.vercel.app${router.asPath}`}
      />
      <meta name="og:description" content={description} />
      <meta name="og:image" content='/moviemanic-512x512.png' />
      <meta name="image" property="og:image" content="/moviemanic-512x512.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

  )
}

Meta.defaultProps = {
  title: 'Moviemanic',
  description: 'Search for movies and tv shows, and watch trailers directly on the site'
}

export default Meta
