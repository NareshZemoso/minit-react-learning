import MiniteSlider from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteSlider',
  component: MiniteSlider,
};

const Template:ComponentStory < typeof MiniteSlider>= (args) => (
  <MiniteSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
 sliderHeight:100,
 sliderWidth:2,
 sliderOrientation:'vertical',
 value:2,
 
};


export const Secondary = Template.bind({});
Secondary.args = {

};


