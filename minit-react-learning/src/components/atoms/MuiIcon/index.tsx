import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';


interface IconProps {
  url: string;
  onClickHandler?: React.MouseEventHandler<HTMLImageElement>;
  height:number;
  width:number;

}

const MuiIcon: React.FC<IconProps & CommonProps> = ({ url,height,width }) =>
<img height={height} width= {width} data-testid='icon' src={url} alt='' loading="lazy"/>

export default MuiIcon;