import styles from './Signup.module.css'
import Button from '../atoms/Button';
import { useState } from 'react'
import MyDialog from '../Dialog'
import Login from './Login';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange() {

  }

  return (
    <MyDialog
      name='Sign Up'
      description='Create an account to bookmark movies and tv series.'
    >
      <form>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.Input}
            id="name"
            placeholder='Samuel Adepoju'
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.Input}
            id="email"
            placeholder='codermuyi@duck.com'
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Password
          </label>
          <input
            type='password'
            className={styles.Input}
            id="name"
            placeholder='************'
          />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Button padding='.5rem' className={'button ' + styles.Button}>Submit</Button>
        </div>
        <div>
          <p style={{ fontSize: '.8rem' }}>
            Already have an account?
            {' '}
            <Login />
          </p>
        </div>
      </form>
    </MyDialog>
  )
}

export default Signup
