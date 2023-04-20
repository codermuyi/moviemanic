import { SVGProps } from 'react'

const Cog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800px"
    height="800px"
    viewBox="0 0 24 24" fill="none"
    {...props}
  >
    <rect
      width="24"
      height="24"
      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24 24)"
      fill="transparent"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.33208 3.80339C10.3203 1.43175 13.6801 1.43175 14.6683 3.80339C14.8612 4.26629 15.4063 4.48037 15.8679 4.26734C18.3224 3.13448 20.8657 5.67775 19.7328 8.13227C19.5198 8.59383 19.7338 9.13897 20.1967 9.33184C22.5684 10.32 22.5684 13.6799 20.1967 14.668C19.7338 14.8609 19.5198 15.4061 19.7328 15.8676C20.8657 18.3221 18.3224 20.8654 15.8679 19.7325C15.4063 19.5195 14.8612 19.7336 14.6683 20.1965C13.6801 22.5681 10.3203 22.5681 9.33208 20.1965C9.13921 19.7336 8.59408 19.5195 8.13251 19.7325C5.67799 20.8654 3.13473 18.3221 4.26758 15.8676C4.48061 15.4061 4.26654 14.8609 3.80364 14.668C1.43199 13.6799 1.43199 10.32 3.80364 9.33184C4.26654 9.13897 4.48061 8.59383 4.26758 8.13227C3.13473 5.67775 5.67799 3.13448 8.13251 4.26734C8.59408 4.48037 9.13921 4.26629 9.33208 3.80339ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
      fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd" d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
      fill="currentColor" />
  </svg>
)

export default Cog
