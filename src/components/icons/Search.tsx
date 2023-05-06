import { SVGProps } from 'react'

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m20 20-4.197-4.197S14 18 10.5 18a7.5 7.5 0 1 1 7.35-6"
      stroke={props.fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Search
