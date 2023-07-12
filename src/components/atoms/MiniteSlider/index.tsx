

import {Stack}from '@mui/material';
import Slider from '@mui/material/Slider';
import React from 'react';



interface MiniteSliderPros{
    sliderOrientation: "horizontal" | "vertical" | undefined;
    value:number;
    defaultValue?:number;
    sliderHeight?:number;
    sliderWidth?:number;    
    handleChange?:() => void;
}

const MiniteSlider: React.FC<MiniteSliderPros> = ({ sliderOrientation,sliderHeight,sliderWidth,value,handleChange,defaultValue}) => {
  return (
    <Stack  height={sliderHeight} width={sliderWidth}>    
    <Slider orientation='vertical' aria-label="Volume" defaultValue={defaultValue} onChange={handleChange} sx={{height:sliderHeight}}/>
  </Stack>
  );
};

export default MiniteSlider;