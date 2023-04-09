import styled from 'styled-components'
import { createRef, useState, useEffect, ReactNode } from 'react'

import LeftArrow from '@icons/LeftArrow';
import RightArrow from '@icons/RightArrow';
import ScrollBar from './ScrollBar';
import Button from './Button';
import { isMobile } from '@/src/helpers';

const ScrollBarX = ({ children }: { children: ReactNode }) => {
  const scrollableNodeRef = createRef()
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const el: any = scrollableNodeRef.current

    if (el) {
      el.style.transitionDuration = '.1s'
      el.scroll({
        left: count,
        behavior: 'smooth'
      })

      if (count < 0 || count > el.scrollWidth) {
        setCount(0)
      }
    }

    if (isMobile.any() && document) {
      document.querySelectorAll('.btn-nav')[0]?.classList.add('btn-nav-hidden')
      document.querySelectorAll('.btn-nav')[1]?.classList.add('btn-nav-hidden')
    }
  }, [scrollableNodeRef, count])

  const next = () => setCount(prevCount => prevCount + 500)
  const prev = () => setCount(prevCount => prevCount - 500)

  return (
    <X>
      <ScrollBar
        autoHide={false}
        style={{ overflowY: 'hidden' }}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        {children}
      </ScrollBar>
      <Button
        className='btn-nav'
        onClick={() => prev()}
        radius='100%'
      >
        <LeftArrow width='20px' height='20px' />
      </Button>
      <Button
        className='btn-nav'
        onClick={() => next()}
        radius='100%'
      >
        <RightArrow width='20px' height='20px' />
      </Button>
    </X>
  )
}

const X = styled.div`
  position: relative;

  .btn-nav {
    position: absolute;
    z-index: 10;
    transform: translateY(-50%);
    padding: .6rem;

    :nth-of-type(1) {
      left: -15px;
      top: 50%;
    }
    :nth-of-type(2) {
      right: -15px;
      top: 50%;
    }

    &.btn-nav-hidden {
      display: none;
    }
  }
`

export default ScrollBarX
