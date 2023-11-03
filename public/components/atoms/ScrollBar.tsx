import SimpleBar from 'simplebar-react'
import styled from 'styled-components'

const ScrollBar = styled(SimpleBar)`
  .simplebar-scrollbar {
    height: 0.8rem;
  }

  .simplebar-scrollbar::before {
    background-color: rgb(var(--main-theme-color));
  }
`

export default ScrollBar
