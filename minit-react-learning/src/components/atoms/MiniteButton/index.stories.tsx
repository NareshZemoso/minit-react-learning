import type { ComponentStory, Meta, StoryObj } from '@storybook/react';
import theme from '../../../theme';

import  MiniteButton  from './index';
import { Children } from 'react';
import MiniteTypography from '../Typography';

const meta: Meta<typeof MiniteButton> = {
  component: MiniteButton,
};

interface MiniteButtonProps{
  primary:string;
}

const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

  export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'atoms/MiniteButton',
    component: MiniteButton,
  };
  
  const Template:ComponentStory < typeof MiniteButton>= (args) => (
    <MiniteButton {...args} />
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
   onClick: handleNeedHelp,
   variant:'contained',
   fgColor: 'primary',
   size:'large',
   children:<MiniteTypography variant='body1' color={'white'}>BUY</MiniteTypography>
 
  };
  
  
  export const Secondary = Template.bind({});
  Secondary.args = {
   onClick: handleNeedHelp,
   variant:'contained',
   fgColor: 'secondary',
   size:'large',
   children:<MiniteTypography variant='body1' color={'white'}>SELL</MiniteTypography>
 
  };
  