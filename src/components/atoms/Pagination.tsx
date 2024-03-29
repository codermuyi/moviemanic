import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Button from '@/src/components/atoms/Button'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import skipPrev from '@/assets/icons/skip-prev.svg'
import skipNext from '@/assets/icons/skip-next.svg'

interface Props {
  currentPage: number
  totalPages: number
  query?: string
  pageType: string
}

const Pagination = ({ currentPage, totalPages, query, pageType }: Props) => {
  const router = useRouter()
  const total = totalPages < 500 ? totalPages : 500

  function navigate(pageno: number) {
    switch (pageType) {
      case 'search':
        router.push(`/search/${query}?page=${pageno}`)
        break
      case 'category':
        router.push(`${query}?page=${pageno}`)
        break
      case 'genre':
        router.push(`${query}?page=${pageno}`)
        break
    }
  }

  return (
    <Pag>
      <Button disabled={currentPage === 1} onClick={() => navigate(1)}>
        <Image src={skipPrev} alt="skip to page 1" />
      </Button>
      <Button
        disabled={currentPage === 1}
        onClick={() => navigate(currentPage - 1)}
      >
        <Image src={arrowLeft} alt="previous" />
      </Button>
      <div>
        <p>
          Page {currentPage} of {total}
        </p>
      </div>
      <Button
        disabled={currentPage >= total}
        onClick={() => navigate(currentPage + 1)}
      >
        <Image src={arrowRight} alt="next" />
      </Button>
      <Button disabled={currentPage >= total} onClick={() => navigate(total)}>
        <Image src={skipNext} alt={`skip to page ${total}`} />
      </Button>
    </Pag>
  )
}

const Pag = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white !important;

  .button {
    padding: 5px;
  }

  img {
    width: 25px;
    height: 25px;
    color: white;
  }
`

export default Pagination
