

import Stack from '@mui/joy/Stack';
import Slider from '@mui/material/Slider';
import React from 'react';



interface MiniteSliderPros{
    sliderOrientation: "horizontal" | "vertical" | undefined;
    sliderHeight?:number;
    sliderWidth?:number;
}

const MiniteSlider: React.FC<MiniteSliderPros> = ({ sliderOrientation,sliderHeight,sliderWidth}) => {
  return (
    <Stack spacing={2} margin={10} height={sliderHeight} width={sliderWidth}> 
    <Slider orientation='vertical'/>
  </Stack>
  );
};

export default MiniteSlider;