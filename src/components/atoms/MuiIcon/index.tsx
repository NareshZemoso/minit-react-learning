import React from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';


interface IconProps {
  url: string;
  onClick?:() => void;
  height:number;
  width:number;

}

const MuiIcon: React.FC<IconProps & CommonProps> = ({ url,height,width,onClick }) =>
<img height={height} width= {width} data-testid='icon' src={url} alt='' loading="lazy" onClick={onClick}/>

export default MuiIcon;