import styled from 'styled-components'
import { useState } from 'react'

import Meta from '@atoms/Meta'
import RightIcon from '@icons/RightArrow'
import Button from '@atoms/Button'
import useChangePassword from '@/src/hooks/useChangePassword'

const ChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState('')
  const handleChangePassword = useChangePassword(newPassword)

  return (
    <>
      <Meta title="Security | Moviemanic" />
      <PageBody>
        <h1>Reset Password</h1>

        <div className="change-smtn">
          <form onSubmit={handleChangePassword}>
            <input
              className="smtn-input"
              type="text"
              placeholder="New Password"
              value={newPassword}
              onChange={(e: any) => setNewPassword(e.target.value)}
            />
            <Button className="flex-center" padding=".7rem">
              Submit <RightIcon />
            </Button>
          </form>
        </div>
      </PageBody>
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
    margin-block: 5rem 3rem;

    h2 {
      margin-bottom: 1rem;
    }

    form {
      display: grid;
      gap: 1rem;
    }

    .smtn-input {
      padding: 0.7rem;
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
  }
`

export default ChangePasswordPage
