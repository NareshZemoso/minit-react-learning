import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';
import { Stack } from '@mui/material';

interface IconProps {
  url: string;
  onClickHandler?: React.MouseEventHandler<HTMLImageElement>;
}

const MuiIcon: React.FC<IconProps & CommonProps> = ({ url }) =>
<img height="42" width= "42" data-testid='icon' src={url} alt='' loading="lazy"/>

export default MuiIcon;