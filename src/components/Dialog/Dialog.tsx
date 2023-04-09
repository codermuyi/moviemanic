import * as Dialog from '@radix-ui/react-dialog';
import styles from './Dialog.module.css';
import Button from '@atoms/Button';
import X from '@icons/XIcon'

interface DialogProps {
  name?: string | React.ReactNode
  title?: string | React.ReactNode
  description?: string
  children?: React.ReactNode
  contentStyle?: any
  noButton?: boolean
}

const MyDialog: React.FC<DialogProps> = ({ name, title, description, children, contentStyle, noButton }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {!noButton ? <Button padding='.5rem'>{name}</Button> : name}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent} style={contentStyle}>
        {(title ?? name) && <Dialog.Title className={styles.DialogTitle}>
          {title ?? name}
        </Dialog.Title>}
        {description && <Dialog.Description className={styles.DialogDescription}>
          {description}
        </Dialog.Description>}
        {children}
        <Dialog.Close asChild>
          <div style={{ position: 'fixed', top: 10, right: 10 }}>
            <Button name="Close" padding='.3rem' radius='50%' width='25px' height='25px'>
              <X />
            </Button>
          </div>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MyDialog;
