import { forwardRef, ReactNode } from 'react'

interface Props {
  color?: string
  bgColor?: string
  children?: ReactNode
  height?: string
  onClick?: () => void
  radius?: string
  width?: string
  padding?: string
  margin?: string
  disabled?: boolean
  name?: string
  noShadow?: boolean
  [key: string]: any
}

const Button = forwardRef(
  (
    {
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
      ...otherProps
    }: Props,
    ref,
  ) => {
    return (
      <button
        {...otherProps}
        className={`
          ${otherProps.className ? `button ${otherProps.className}` : 'button'}
        `}
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
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
