

import Stack from '@mui/joy/Stack';
import Slider from '@mui/material/Slider';
import React from 'react';



interface MiniteSliderPros{
    sliderOrientation: "horizontal" | "vertical" | undefined;
    sliderHeight?:number;
    sliderWidth?:number;
    value:number;
    handleChange?:() => void;
}

const MiniteSlider: React.FC<MiniteSliderPros> = ({ sliderOrientation,sliderHeight,sliderWidth,value,handleChange}) => {
  return (
    <Stack  height={sliderHeight} width={sliderWidth}> 
    <Slider orientation='vertical' aria-label="Volume" />
  </Stack>
  );
};

export default MiniteSlider;