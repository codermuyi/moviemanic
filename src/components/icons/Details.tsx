import { SVGProps } from 'react'

const Details = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm1.3 20.5h-2.6v2.6h2.6zm-1.3-11.5c-2.209139 0-4 1.790861-4 4h2l.0054857-.1492623c.0763492-1.0348599.9401525-1.8507377 1.9945143-1.8507377 1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-1v4h2l.0006624-2.126188c1.7248911-.4442732 2.9993376-2.0102111 2.9993376-3.873812 0-2.209139-1.790861-4-4-4z"
      fill="currentColor"
      fillRule="evenodd" />
  </svg>
)

export default Details
