import { forwardRef } from 'react'

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
  // otherProps?: any
  className?: string
}

const Button = forwardRef(({
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
  // ...otherProps
}: Props, ref) => {
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
        boxShadow: noShadow ? 'none' : undefined,
      }}
      disabled={disabled}
      aria-label={name}
    // {...otherProps}
    >
      {children}
    </button>
  );
})

Button.displayName = "Button";

export default Button;
