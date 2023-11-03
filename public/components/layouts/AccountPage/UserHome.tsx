import styled from 'styled-components'
import Link from 'next/link'

import BookmarkFilledIcon from '@icons/BookmarkFilled'
import CogIcon from '@icons/Cog'
import DetailsIcon from '@icons/Details'
import useSignOut from '@hooks/useSignOut'

const pageLinks = [
  {
    name: 'My list',
    href: 'my-account/list',
    icon: <BookmarkFilledIcon width="30px" height="30px" />,
    text: 'Personal list of movies and tv series',
  },
  {
    name: 'Account details',
    href: 'my-account/details',
    icon: <DetailsIcon width="25px" height="28px" />,
    text: 'Your current details e.g. email',
  },
  {
    name: 'Settings & security',
    href: 'my-account/security',
    icon: <CogIcon width="30px" height="30px" />,
    text: 'Change password and email',
  },
  {
    name: 'Sign out',
    href: '',
    // text: 'Personal list of movies and tv series',
  },
]

const UserHome = ({ username }: { username: string | undefined }) => {
  const signOut = useSignOut()

  return (
    <Home>
      <h1 className="username">{username}</h1>
      <div className="page-items">
        {pageLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="king-link"
            onClick={() => link.name === 'Sign out' && signOut()}
          >
            <div>
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </div>
            {link.text && <p>{link.text}</p>}
          </Link>
        ))}
      </div>
    </Home>
  )
}

const Home = styled.div`
  .username {
    padding: 5rem 1rem;
    display: flex;
    background-color: rgb(var(--main-theme-color));
    font-weight: normal;
    border-radius: 30px;
    isolation: isolate;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
    }
    &::before {
      z-index: -2;
      background-image: url('/moviemanic-512x512.png');
    }
    &::after {
      z-index: -1;
      background-color: rgb(var(--main-theme-color), 0.9);
    }
  }

  .page-items {
    padding: 4rem 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .king-link {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2rem 1rem;
      background-color: rgb(var(--main-text-color));
      color: rgb(var(--dark-theme-color));
      border-radius: 10px;
      width: 20rem;
      transition-duration: 0.3s;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition-duration: 0.3s;
      }

      :hover,
      :focus-visible {
        div {
          color: rgb(var(--main-theme-color));
        }
      }

      p {
        font-size: 0.8rem;
        padding-top: 0.5rem;
      }
    }
  }
`

export default UserHome
