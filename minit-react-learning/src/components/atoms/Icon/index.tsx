import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { Icon } from '@mui/material';

interface IconAtomProps extends IconButtonProps {
  iconName: string;
}

const IconAtom: React.FC<IconAtomProps> = ({ iconName, ...rest }) => {
  return (
    <IconButton {...rest}>
      <Icon >{iconName}</Icon>
    </IconButton>
  );
};

export default IconAtom;