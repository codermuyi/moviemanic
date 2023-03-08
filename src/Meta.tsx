import Head from 'next/head'

const Meta = ({title, description}: {[key: string]: string}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="rgb(78, 100, 160)" />
      <meta name="description" content={description} />
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
