import style from './Toast.module.css';
import * as Toast from '@radix-ui/react-toast';

import Button from 'src/atoms/Button'
import X from '@/src/icons/XIcon'

const MyToast = ({ open, setOpen, message}: any) => {
  return (
    <div>
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className={style.ToastRoot}
          duration={2500}
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Description className={style.ToastDescription}>
            {message}
          </Toast.Description>
          <Toast.Action className={style.ToastAction} asChild altText="Close toast">
            <Button padding='10px'>
              <X />
            </Button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className={style.ToastViewport} />
      </Toast.Provider>
    </div>
  )
}

export default MyToast
