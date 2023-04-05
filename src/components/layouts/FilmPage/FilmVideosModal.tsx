import styled from 'styled-components';
import Video from './FilmYoutubeVideo'
import ScrollBar from '@atoms/ScrollBar'
import Dialog from '@components/Dialog'
import PlayIcon from '@icons/Play';

interface ModalInterface {
  videoData: any
}

const MoreVideosModal: React.FC<ModalInterface> = ({ videoData }) => {
  const filterData = videoData?.filter((data: { site: string }) => data.site === 'YouTube')

  return (
    <Dialog
      name={<>
        <span>Videos</span>
        <span className='icon'>
          <PlayIcon />
        </span>
      </>}
      title='Videos'
      contentStyle={{
        maxWidth: '1200px',
      }}
    >
      <ScrollBar style={{ height: '70vh', padding: 0 }}>
        <DialogBody>
          {filterData?.map((vid: any, i: number) => {
            return <Box key={i}>
              <p>{vid.name}</p>
              <Video id={vid.key} isSmall />
            </Box>
          })}
        </DialogBody>
      </ScrollBar>
    </Dialog>
  )
}

const DialogBody = styled.div`
  padding-right: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  color: rgb(var(--f-text-color));
  transition-duration: .5s;

  p {
    font-size: .8rem;
  }
`

const Box = styled.div`
  display: grid;
  margin-top: 2rem;
  max-height: 300px;

  p {
    margin-bottom: 10px;
  }
`

export default MoreVideosModal