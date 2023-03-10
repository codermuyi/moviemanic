import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal'
import SimpleBar from 'simplebar-react';
import styled from 'styled-components';
import Button from './global/Button'
import Trailer from './Trailer'

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
  let subtitle: HTMLHeadingElement | null;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // if (subtitle !== null)
    //   subtitle.style.color = '#f00';
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
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          </h2>
          <Button
            border='none'
            cursor='pointer'
            radius='10px'
            padding='.5rem'
            onClick={closeModal}
          >
            Close
          </Button>
        </ModalHeader>
        <ModalBody>
          {filterData.map((vid: any, i: number) => {
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
  background: linear-gradient(120deg, rgb(var(--theme-main-color)), black);
  padding: .7rem 1rem;
`

const ModalBody = styled.div`
  padding: 1rem;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`

const Box = styled.div`
  display: grid;
  margin-top: 2rem;
`

export default MoreVideosModal
