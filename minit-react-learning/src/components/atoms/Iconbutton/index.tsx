import { Button } from '@mui/material';
import React, { ReactNode } from 'react';


interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: () => void;
  children: ReactNode;
}

const IconButton: React.FC<ButtonIconProps> = ({ icon,onClick, children }) => {
  return (   
   
    <button onClick={onClick}>
      {icon}
      {children}
    </button>
    
  );
};

export default IconButton;
