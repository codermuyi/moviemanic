
interface Props {
  border?: string;
  color?: string
  bgColor?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
  cursor?: string
  padding?: string
  margin?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  border,
  color,
  bgColor,
  children,
  onClick,
  radius,
  height,
  width,
  cursor,
  padding,
  margin,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor ? bgColor :'rgb(var(--theme-main-color)',
        color,
        borderRadius: radius,
        padding,
        margin,
        height,
        width,
        cursor: 'pointer',
        border: '0',
        transitionDuration: '.2s',
      }}
      disabled={disabled}
      className='button'
    >
      {children}
    </button>
  );
}

export default Button;
