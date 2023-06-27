import { IconButton } from '@mui/material';
import Button from '@mui/material';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  fgColor?:string;
  children: React.ReactNode;
}

const MiniteButton: React.FC<ButtonProps> = ({ onClick, disabled = false, className = '',fgColor, children }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled} color="red" >
      {children}
    </button>
   
  );
};

export default MiniteButton;
