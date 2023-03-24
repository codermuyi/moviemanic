import styles from './Signup.module.css'
import { Close } from '@radix-ui/react-dialog';
import Button from '../atoms/Button';

const Signup = () => {
  return (
    <form>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="name">
          Name
        </label>
        <input className={styles.Input} id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="username">
          Username
        </label>
        <input className={styles.Input} id="username" defaultValue="@peduarte" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
        <Close asChild>
          <Button padding='.5rem' className={'button ' + styles.Button}>Save changes</Button>
        </Close>
      </div>
    </form>
  )
}

export default Signup
