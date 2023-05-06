import { SVGProps } from 'react'

const DropdownIndicator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    style={{ fill: 'rgb(var(--main-text-color))' }}
    width="800px"
    height="800px"
    viewBox="-6.5 0 32 32"
    {...props}
  >
    <title>dropdown</title>
    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
  </svg>
)

export default DropdownIndicator
