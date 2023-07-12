import MiniteTypography from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteTypography',
  component: MiniteTypography,
};

const Template:ComponentStory < typeof MiniteTypography>= (args) => (
  <MiniteTypography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant:'h1',
  children:'select '
};


export const Secondary = Template.bind({});
Secondary.args = {
  variant:'h6',
  children:'select '
};


