import MiniteAvatar from ".";
import { ComponentStory } from "@storybook/react";
import avatar from '../../../../public/assets/avatar.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteAvatar',
  component: MiniteAvatar,
};

const Template:ComponentStory < typeof MiniteAvatar>= (args) => (
  <MiniteAvatar {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  imageUrl:avatar,
  size:32,
};


