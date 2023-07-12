import MiniteIconButton from ".";
import { ComponentStory } from "@storybook/react";
import dashboard from '../../../../public/assets/dashboard.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteIconButton',
  component: MiniteIconButton,
};

const Template:ComponentStory < typeof MiniteIconButton>= (args) => (
  <MiniteIconButton {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  icon:dashboard,
  height:12,
  width:12,
  
};


