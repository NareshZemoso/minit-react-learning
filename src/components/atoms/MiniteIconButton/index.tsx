import { Button, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';
import MuiIcon from '../MuiIcon';


interface MiniteIconButtonProps {
  icon: string;
  onClick: () => void; 
  height:number;
  width:number;
}

const MiniteIconButton: React.FC<MiniteIconButtonProps> = ({ icon,onClick, height,width }) => {
  return (   
   
   
    <IconButton onClick={onClick} size='small'>
    <MuiIcon  url={icon} height={height} width={width} />
    </IconButton>
    
  );
};

export default MiniteIconButton;
