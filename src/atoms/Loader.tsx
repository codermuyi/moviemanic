import styled, { keyframes } from 'styled-components'

interface SpinnerProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  duration?: number;
}

const Loader = (props: SpinnerProps) => {
  return (
    <Loadr>
      <SpinnerBody {...props} />
    </Loadr>
  )
}

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loadr = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 10rem;
  grid-column: 1 / -1;
`

const SpinnerBody = styled.div<SpinnerProps>`
  height: ${(p) => (p.height ? p.height : "4rem")};
  width: ${(p) => (p.width ? p.width : "4rem")};
  border: ${(p) => (p.borderWidth ? p.borderWidth : "4px")} solid #d1d5db;
  border-top-color: ${(p) => (p.borderColor ? p.borderColor : "#3b82f6")};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

Loader.defaultProps = {
  width: '150px',
  height: '150px',
  borderWidth: '20px',
  borderColor: 'rgb(var(--theme-main-color))',
}

export default Loader
