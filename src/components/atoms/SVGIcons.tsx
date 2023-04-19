const ProfileIcon = (props: any) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
    fill="none"
  >
    <path
      d="M22 12c0-5.51-4.49-10-10-10S2 6.49 2 12c0 2.9 1.25 5.51 3.23 7.34 0 .01 0 .01-.01.02.1.1.22.18.32.27.06.05.11.1.17.14.18.15.38.29.57.43l.2.14c.19.13.39.25.6.36.07.04.15.09.22.13.2.11.41.21.63.3.08.04.16.08.24.11.22.09.44.17.66.24.08.03.16.06.24.08.24.07.48.13.72.19.07.02.14.04.22.05.28.06.56.1.85.13.04 0 .08.01.12.02.34.03.68.05 1.02.05.34 0 .68-.02 1.01-.05.04 0 .08-.01.12-.02.29-.03.57-.07.85-.13.07-.01.14-.04.22-.05.24-.06.49-.11.72-.19.08-.03.16-.06.24-.08.22-.08.45-.15.66-.24.08-.03.16-.07.24-.11.21-.09.42-.19.63-.3.08-.04.15-.09.22-.13.2-.12.4-.23.6-.36.07-.04.13-.09.2-.14.2-.14.39-.28.57-.43.06-.05.11-.1.17-.14.11-.09.22-.18.32-.27 0-.01 0-.01-.01-.02C20.75 17.51 22 14.9 22 12Zm-5.06 4.97c-2.71-1.82-7.15-1.82-9.88 0-.44.29-.8.63-1.1 1A8.48 8.48 0 0 1 3.5 12c0-4.69 3.81-8.5 8.5-8.5 4.69 0 8.5 3.81 8.5 8.5 0 2.32-.94 4.43-2.46 5.97-.29-.37-.66-.71-1.1-1Z"
      style={{ fill: props.fill }}
    />
    <path
      d="M12 6.93c-2.07 0-3.75 1.68-3.75 3.75 0 2.03 1.59 3.68 3.7 3.74h.18a3.743 3.743 0 0 0 3.62-3.74c0-2.07-1.68-3.75-3.75-3.75Z"
      style={{ fill: props.fill }}
    />
  </svg>
)

const GridIcon = (props: any) => (
  <svg
    className="active-link"
    fill="currentColor"
    width={800}
    height={800}
    viewBox="0 0 24 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
  </svg>
)

const MainIcon = (props: any) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.054 3 8.387 8h5.892l1.667-5h-5.892Z" style={{ fill: props.fill }} />
    <path
      d="M7.946 3 6.279 8H2v2h20V8h-5.613l1.667-5H20.6A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3h4.546Z"
      style={{ fill: props.fill }}
    />
  </svg>
)

const MovieIcon = (props: any) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z"
      fill={props.fill}
    />
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2h14a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v3h3V8H1zm0 5v3h3v-3H1zm0 5v3h3v-3H1zM20 8v3h3V8h-3zm0 5v3h3v-3h-3zm0 5v3h3v-3h-3z"
      fill={props.fill}
    />
  </svg>
)

const TVIcon = (props: any) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="iconify iconify--emojione-monotone"
    {...props}
  >
    <path d="M59.104 19.983c-2.054-2.609-9.974-4.152-19.161-4.665.005-.064.026-.127.026-.193 0-1.356-.985-2.574-2.552-3.43l7.029-7.029a1.395 1.395 0 0 0 1.591-.265 1.407 1.407 0 0 0-1.989-1.989 1.395 1.395 0 0 0-.264 1.591l-7.264 7.264c-1.285-.521-2.842-.829-4.521-.829s-3.235.308-4.521.829l-7.264-7.264a1.395 1.395 0 0 0-.264-1.591 1.407 1.407 0 0 0-1.989 1.989 1.395 1.395 0 0 0 1.591.265l7.029 7.029c-1.566.855-2.552 2.073-2.552 3.43 0 .103.03.199.04.301-8.739.606-16.283 2.136-18.642 4.558-4.572 4.69-4.573 32.468 0 37.16.496.509 1.224.979 2.142 1.409C6.455 59.409 5.75 60.635 5.75 62H17c0-.366-.056-.721-.151-1.063C21.616 61.644 27.283 62 32.909 62c4.996 0 9.957-.281 14.225-.849l-.038.005c-.06.274-.096.555-.096.844h11.25c0-1.234-.577-2.354-1.512-3.19-.016.008-.034.014-.05.021 1.098-.503 1.924-1.063 2.415-1.688 3.864-4.907 3.861-32.256.001-37.16m-1.474 36c-1.58 2.008-10.781 4.143-24.721 4.143-14.415 0-24.059-2.158-26.137-4.29-1.44-1.479-2.897-7.886-2.897-17.273s1.458-15.794 2.897-17.271c2.077-2.132 11.721-4.29 26.137-4.29 13.939 0 23.141 2.134 24.721 4.142 1.24 1.574 2.494 8.063 2.495 17.42S58.87 54.409 57.63 55.983" />
    <path d="M9.26 24.441c-3.43 3.567-3.431 24.675 0 28.242 4.667 4.855 36.379 4.989 40.256 0 2.896-3.729 2.895-24.514 0-28.242-3.876-4.989-35.59-4.853-40.256 0" />
    <circle cx={55.688} cy={29.188} r={2.813} />
    <circle cx={55.688} cy={37.625} r={2.813} />
  </svg>
)

const SearchIcon = (props: any) => (
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

const MenuIcon = (props: any) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
)

const DropdownIcon = (props: any) => (
  <svg
    style={{ fill: "rgb(var(--main-text-color))" }}
    width="800px"
    height="800px"
    viewBox="-6.5 0 32 32"
    {...props}
  >
    <title>dropdown</title>
    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
  </svg>
)

export {
  ProfileIcon,
  GridIcon,
  MainIcon,
  MovieIcon,
  TVIcon,
  SearchIcon,
  MenuIcon,
  DropdownIcon,
}
