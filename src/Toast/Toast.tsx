import style from './Toast.module.css';
import * as Toast from '@radix-ui/react-toast';
import { useState, useRef, useEffect } from 'react';

import Button from 'src/atoms/Button'
import X from '@/src/icons/XIcon'

const MyToast = ({ title, description, open, setOpen }: any) => {
  const [open, setOpen] = useState(false);
  // const eventDateRef = useRef(new Date());
  // const timerRef = useRef(0);

  useEffect(() => {
    // var current = timerRef.current
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <Toast.Provider swipeDirection="right">
        {/* <Button
          padding='1rem'
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          }}
        >
          Add to calendar
        </Button> */}

        <Toast.Root className={style.ToastRoot} open={open} onOpenChange={setOpen}>
          <Toast.Title className={style.ToastTitle}>Scheduled: Catch up</Toast.Title>
          <Toast.Description asChild>
            <time className={style.ToastDescription} dateTime={eventDateRef.current.toISOString()}>
              {prettyDate(eventDateRef.current)}
            </time>
          </Toast.Description>
          <Toast.Action className={style.ToastAction} asChild altText="Goto schedule to undo">
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

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export default MyToast
