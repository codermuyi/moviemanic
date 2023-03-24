import SimpleBar from 'simplebar-react'
import styled from 'styled-components'

const ScrollBar = styled(SimpleBar)`
  .simplebar-scrollbar {
    height: .8rem;
  }

  .simplebar-scrollbar::before {
    background-color: rgb(var(--theme-main-color));
  }
`

export default ScrollBar