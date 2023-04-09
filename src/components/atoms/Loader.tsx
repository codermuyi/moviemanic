import styled, { keyframes } from 'styled-components'

interface SpinnerProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  duration?: number;
}

interface LoaderProps extends SpinnerProps {
  paddingBlock?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <Loadr className='flex-center' paddingBlock={props.paddingBlock}>
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

const Loadr = styled.div<LoaderProps>`
  padding-block: ${p => p.paddingBlock ? p.paddingBlock : '4rem'};
`

const SpinnerBody = styled.div<SpinnerProps>`
  height: ${(p) => (p.height ? p.height : "4rem")};
  width: ${(p) => (p.width ? p.width : "4rem")};
  border: ${(p) => (p.borderWidth ? p.borderWidth : "4px")} solid #d1d5db;
  border-top-color: ${(p) => (p.borderColor ? p.borderColor : 'rgb(var(--main-theme-color))')};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

export default Loader
