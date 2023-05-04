import styled from 'styled-components'
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

import Meta from '@atoms/Meta';
import CheckForUsername from '@atoms/CheckForUsername';
import RightIcon from '@icons/RightArrow';
import Button from '@atoms/Button'
import useChangeUsername from '@hooks/useChangeUsername';
import useChangePassword from '@hooks/useChangePassword';
import useChangeEmail from '@hooks/useChangeEmail';
import { routeGuard } from '@/src/routeGuard';
import { Profile } from '@/src/types'

const SecurityPage = ({ profile }: { profile: Profile }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const handleChangeUsername = useChangeUsername(newUsername)
  const handleChangePassword = useChangePassword(newPassword)
  const handleChangeEmail = useChangeEmail(newEmail)

  return (
    <>
      <Meta title='Security | Moviemanic' />
      <CheckForUsername profile={profile}>
        <PageBody>
          <h1>Security</h1>

          <div className='change-smtn'>
            <h2>Change Username</h2>
            <form onSubmit={handleChangeUsername}>
              <input
                className='smtn-input'
                type='text'
                placeholder='New Username'
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
              />
              <Button className='flex-center' padding='.7rem'>
                Submit {' '}
                <RightIcon />
              </Button>
            </form>
          </div>

          <div className='change-smtn'>
            <h2>Change Passsword</h2>
            <form onSubmit={handleChangePassword}>
              <input
                className='smtn-input'
                type='password'
                placeholder='New Password'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value.trim())}
              />
              <Button className='flex-center' padding='.7rem'>
                Submit {' '}
                <RightIcon />
              </Button>
            </form>
          </div>

          <div className='change-smtn'>
            <div className='overlay'></div>
            <h2>Change Email</h2>
            <form onSubmit={handleChangeEmail}>
              <input
                className='smtn-input'
                type='text'
                placeholder='New Email'
                value={newEmail}
                onChange={e => setNewEmail(e.target.value.toLowerCase())}
              />
              <Button className='flex-center' padding='.7rem'>
                Change Email {' '}
                <RightIcon />
              </Button>
            </form>
          </div>

          <p className='delete-message'>
            If you wish to delete your account, send an email to {' '}
            <a href='mailto:tlllghy9@duck.com'>tlllghy9@duck.com</a> {' '}
            with your username and registered email.
          </p>
        </PageBody>
      </CheckForUsername>
    </>
  )
}

const PageBody = styled.div`
  padding-inline: 1rem;

  h1 {
    padding-block: 2rem;
    text-align: center;
  }

  .change-smtn {
    max-width: 25rem;
    margin-inline: auto;
    margin-block: 1rem 3rem;
    position: relative;
    padding: 1rem;

    h2 {
      margin-bottom: 1rem;
    }

    & > form {
      display: grid;
      gap: 1rem;
    }
    
    .smtn-input {
      padding: .7rem;
      font-size: 1rem;
      background-color: rgb(var(--dark-theme-color));
      color: rgb(var(--main-theme-color));
      border: 0;

      :focus {
        outline-color: rgb(var(--main-theme-color)) !important;
      }
    }
    
    .button {
      width: 10rem;
      justify-self: center;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgb(0 0 0 / .5);
    }
  }

  .delete-message {
    background-color: red;
    max-width: 65ch;
    padding: 1rem;
    margin: 1rem auto;
    
    a {
      color: rgb(var(--dark-theme-color));
    }
  }
`

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await routeGuard(ctx, false)
}

export default SecurityPage
