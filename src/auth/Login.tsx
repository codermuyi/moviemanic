import styles from './Signup.module.css'
import Button from '../atoms/Button';
import { useState } from 'react'
import Signup from './Signup';
import MyDialog from '../Dialog'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange() {

  }
  return (
    <MyDialog name='Login'>
      <form>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.Input}
            id="email"
            placeholder='Enter your email address'
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Password
          </label>
          <input
            className={styles.Input}
            id="name"
            placeholder='Enter your password'
          />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Button padding='.5rem' className={'button ' + styles.Button}>Submit</Button>
        </div>
        <div>
          <p style={{ fontSize: '.8rem' }}>
            Don&apos;t have an account?
            {' '}
            <Signup />
          </p>
        </div>
      </form>
    </MyDialog>
  )
}

export default Login