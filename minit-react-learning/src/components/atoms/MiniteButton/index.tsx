import React from 'react';
import Button from '@mui/material/Button';



interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: "outlined" |"contained";
  fgColor?:"primary" | "secondary";
  size:"small" | "large" | "medium";
  children: React.ReactNode;
}

const MiniteButton: React.FC<ButtonProps> = ({ onClick, variant ,fgColor, children ,size}) => {
  return (
   
    <Button variant={variant} color={fgColor} onClick={onClick} size={size}> {children} </Button>
   
  );
};

export default MiniteButton;
