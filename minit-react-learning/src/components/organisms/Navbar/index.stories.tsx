import Navbar from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organisms/Navbar',
  component: Navbar,
};

const Template:ComponentStory < typeof Navbar>= (args) => (
  <Navbar {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  
  height:1100,
  width:60,
};


