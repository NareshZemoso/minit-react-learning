import Dropdown from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/Dropdown',
  component: Dropdown,
};

const Template:ComponentStory < typeof Dropdown>= (args) => (
  <Dropdown {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  propfile:'',
};


