import React from 'react'
import Link from 'next/link'

import BrokenLinkIcon from '@icons/BrokenLink'
import Button from '@atoms/Button'

const Error404 = () => {
  return (
    <div className='grid-center' style={{
      paddingBlock: '3rem',
      textAlign: 'center',
      gap: '1rem',
    }}>
      <BrokenLinkIcon />
      <h1>404</h1>
      <p>Sorry, this page could not be found</p>
      <Link href='/'>
        <Button width='100%' padding='1rem' tabIndex={-1}>
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default Error404
