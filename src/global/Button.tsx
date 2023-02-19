
interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  // height: string;
  onClick?: () => void;
  radius: string
  // width: string;
  cursor: string
  padding?: string
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    onClick, 
    radius,
    // height,
    // width
    cursor,
    padding
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         cursor,
         padding,
        //  height,
        //  width
      }}
    >
    {children}
    </button>
  );
}

export default Button;
