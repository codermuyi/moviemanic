import styles from './Signup.module.css'
import Button from '../atoms/Button';
import { useState } from 'react'
import MyDialog from '../Dialog'
import Login from './Login';

// import { supabase } from 'api'
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange(e: any) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    // const { error } = await supabase.auth.signUp({
    //   email: formData.email,
    //   password: formData.password,
    // })
    // router.push('/bookmark')
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.Input}
          name='name'
          id="name"
          placeholder='Kevin Powell'
          value={formData.name}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="email">
          Email
        </label>
        <input
          type='email'
          className={styles.Input}
          name='email'
          id="email"
          placeholder='codermuyi@duck.com'
          value={formData.email}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="password">
          Password
        </label>
        <input
          type='password'
          name='password'
          id="password"
          className={styles.Input}
          placeholder='************'
          value={formData.password}
          onChange={handleChange}
        />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
        <Button
          padding='.5rem'
          className={'button ' + styles.Button}
        >Submit</Button>
      </div>
      <div>
        <p style={{ fontSize: '.8rem' }}>
          Already have an account?
          {' '}
          <MyDialog name='Login'>
            <Login />
          </MyDialog>
        </p>
      </div>
    </form>
  )
}

export default Signup
