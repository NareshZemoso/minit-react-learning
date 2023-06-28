import type { Meta, StoryObj } from '@storybook/react';

import  MiniteSlider  from './index';

const meta: Meta<typeof MiniteSlider> = {
  component: MiniteSlider,
};
type Story = StoryObj<typeof MiniteSlider>;
export default meta;


 export const Primary: Story = {
    render: () => <MiniteSlider sliderHeight={50} sliderOrientation='horizontal' sliderWidth={50}/>
  };

  export const Secondary: Story = {
    render: () => <MiniteSlider sliderHeight={50} sliderOrientation='vertical'/>
  };


