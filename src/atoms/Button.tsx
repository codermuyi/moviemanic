
interface Props {
  color?: string
  bgColor?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
  padding?: string
  margin?: string
  disabled?: boolean
  name?: string
  noShadow?: boolean
}

const Button: React.FC<Props> = ({
  color,
  bgColor,
  children,
  height,
  onClick,
  radius,
  width,
  padding,
  margin,
  disabled,
  name,
  noShadow,
}) => {
  return (
    <button
      className='button'
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius: radius,
        padding,
        margin,
        height,
        width,
        boxShadow: noShadow ? 'none' : '',
      }}
      disabled={disabled}
      aria-label={name}
    >
      {children}
    </button>
  );
}

export default Button;
