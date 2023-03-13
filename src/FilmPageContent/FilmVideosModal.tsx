import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal'
import SimpleBar from 'simplebar-react';
import styled from 'styled-components';
import Button from '../atoms/Button'
import Trailer from './FilmYoutubeVideo'

const customStyles = {
  content: {
    top: '25px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 2rem)',
    maxWidth: '1000px',
    height: 'calc(100% - 50px)',
    backgroundColor: 'rgb(var(--f-bg-color))',
    border: 'none',
    padding: '0',
  },
};

Modal.defaultStyles.overlay = {
  ...Modal.defaultStyles.overlay,
  backgroundColor: 'rgb(0 0 0 / .8)',
  zIndex: 4000
}

interface ModalInterface {
  modalIsOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  videoData: any
}

const MoreVideosModal: React.FC<ModalInterface> = ({ modalIsOpen, setIsOpen, videoData }) => {
  let element: HTMLElement | null;

  function afterOpenModal() {
    if (element !== null) 
      element.style.transform = 'none'
  }

  function closeModal() {
    setIsOpen(false);
  }

  const filterData = videoData?.filter((data: { site: string }) => data.site === 'YouTube')

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="More Videos"
        ariaHideApp={false}
      >
        <ModalHeader>
          <div></div>
          <Button
            padding='.5rem'
            onClick={closeModal}
          >
            Close
          </Button>
        </ModalHeader>
        <ModalBody ref={(_element) => (element = _element)}>
          {filterData?.map((vid: any, i: number) => {
            return <Box key={i}>
              <p>{vid.type}</p>
              <Trailer id={vid.key} />
            </Box>
          })}
        </ModalBody>
      </Modal>
    </>
  )
}

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(120deg, rgb(var(--theme-main-color)), rgb(var(--f-bg-color)));
  padding: .7rem 1rem;

  .button {
    
  }
`

const ModalBody = styled.div`
  padding: 1rem;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  color: rgb(var(--f-text-color));
  transition-duration: .5s;
  transform: translateX(100%);
`

const Box = styled.div`
  display: grid;
  margin-top: 2rem;
`

export default MoreVideosModal
