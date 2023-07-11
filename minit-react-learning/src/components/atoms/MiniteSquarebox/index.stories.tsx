import MiniteSquarebox from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteSquarebox',
  component: MiniteSquarebox,
};
const handkeClick=() =>{
    alert('Hi box');
}

const Template:ComponentStory < typeof MiniteSquarebox>= (args) => (
  <MiniteSquarebox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text:'1H',
  variant:'h1',
  onclickText:handkeClick
 
};


export const Secondary = Template.bind({});
Secondary.args = {
  text:'1W',
  variant:'h6',
  onclickText:handkeClick,
  textColor:'#E8E8F7'
 
};


