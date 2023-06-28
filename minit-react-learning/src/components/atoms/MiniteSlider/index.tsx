

import Slider from '@mui/joy/Slider';
import Stack from '@mui/joy/Stack';
import React from 'react';



interface MiniteSliderPros{
    sliderOrientation?: "horizontal" | "vertical" | undefined;
    sliderHeight?:number;
    sliderWidth?:number;
}

const MiniteSlider: React.FC<MiniteSliderPros> = ({ sliderOrientation,sliderHeight,sliderWidth}) => {
  return (
    <Stack spacing={2} margin={10} height={sliderHeight} width={sliderWidth}> 
   <Slider  aria-label="Small steps"
   orientation={sliderOrientation}
   defaultValue={3}   
   step={1}
   marks
   min={1}
   max={10}
   variant='solid'
   size='sm'
   valueLabelDisplay="auto"/>
  </Stack>
  );
};

export default MiniteSlider;