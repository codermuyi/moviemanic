import styled from 'styled-components';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import Dialog from '@/src/Dialog';
import Button from '@/src/atoms/Button'
import RightArrowIcon from '../icons/RightArrow';
import breakpoints from 'assets/breakpoints'

const GetStartedTSX = () => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const session = useSession()
  const [username, setUsername] = useState('')

  async function saveUsername(e: any) {
    e.preventDefault()

    const { error, status } = await supabase
      .from('profiles')
      .insert([
        {
          username,
          user_id: session?.user.id
        }
      ])

    if (status === 201) {
      toast.success('Set username successfully')
      router.reload()
    }
    if (error) {
      toast.error('Failed to set username')
    }
  }

  return (
    <>
      <FirstScreen className='flex-center'>
        <p>Get started to add movies and tv shows to your list</p>
        <Dialog
          noButton
          name={<Button>Get Started</Button>}
          title=''
        >
          <NamePrompt className='grid-center'>
            <div style={{ fontSize: '2rem' }}>Enter a username:</div>
            <form className='flex-center' style={{ gap: 10 }} onSubmit={saveUsername}>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button padding='10px'>
                <RightArrowIcon />
              </Button>
            </form>
          </NamePrompt>
        </Dialog>
      </FirstScreen>
    </>
  )
}

const FirstScreen = styled.div`
  padding: 10rem 1rem;
  background-color: rgb(var(-f-bg-color));
  gap: 1rem;
  flex-direction: column;
  
  & > .button {
    --size: 12rem;
    font-size: 2rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    position: relative;
    isolation: isolate;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: rgb(var(--f-bg-color));
      clip-path: circle(0% at 50% 50%);
      transition: clip-path .4s;
    }
    
    &:hover,
    &:focus {
      box-shadow: 0 4px 8px rgb(var(--f-bg-color), .25);
      background-color: white;
      transform: scale(1.1);

      ::before {
        clip-path: circle(100% at 50% 50%);
      } 
    }
  }

  @media ${breakpoints.md} {
    flex-direction: row;
  }
`

const NamePrompt = styled.div`
  text-align: center;
  gap: 1rem;
  padding-block: 2rem;

  input {
    padding: .7rem;
    font-size: 1rem;
    background-color: rgb(255 255 255);
    color: rgb(var(--main-theme-color));
    border: 0;
    border-radius: 10px;
    
    :hover {
      outline-color: rgb(var(--main-theme-color));
    }
  }
`

export default GetStartedTSX
