import React from 'react';
import { Chip, IconButton, IconButtonProps } from '@mui/material';
import { Icon } from '@mui/material';

interface MiniteIconProps extends IconButtonProps {
  iconName: string;
  onclick?:() => void;
}

const MiniteIcon: React.FC<MiniteIconProps> = ({ iconName,onClick, ...rest }) => {
  return (
    <IconButton  onClick={onClick} sx={{height:32,widows:32}} {...rest}>
      <Chip variant='filled' label={iconName}  sx={{height:32,widows:32}}></Chip>
    </IconButton>
  );
};

export default MiniteIcon;