import Link from 'next/link'

import Button from '@atoms/Button'
import Dialog from '@components/Dialog'
import FilmPoster from '@components/FilmPoster'
import FilmDetails from '@components/FilmDetails'
import ScrollBar from '@atoms/ScrollBar'
import InfoIcon from '@icons/Info'
import { FilmDetailsType, MediaType } from '@/src/types'

interface Props {
  info: FilmDetailsType
  linkHref: string
  mediaType: MediaType
}

const CardDialog = ({ info, linkHref, mediaType }: Props) => {
  return (
    <Dialog
      noButton
      name={
        <Button
          className='flex-center'
          name='More information'
        >
          <InfoIcon width='20px' height='20px' />
        </Button>
      }
      title=''
      contentStyle={{
        paddingRight: '0',
        backgroundColor: 'rgb(var(--main-text-color))',
        color: 'rgb(var(--dark-theme-color))',
      }}
    >
      <ScrollBar style={{ height: '80vh', paddingRight:'1rem' }}>
        <FilmPoster
          path={info.backdrop_path}
          info={info}
          mediaType={mediaType}
          height='15rem'
          width='100%'
          hideButtons
        />
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{info.title || info.name}</h2>
        <FilmDetails {...info} />
        <Link href={linkHref}>
          <Button padding='.7rem' margin='0 1rem 2rem'>Go to page</Button>
        </Link>
      </ScrollBar>
    </Dialog>
  )
}

export default CardDialog
