import MuiIcon from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MuiIcon',
  component: MuiIcon,
};

const Template:ComponentStory < typeof MuiIcon>= (args) => (
  <MuiIcon {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  url:bitcoin,
  height:24,
  width:24,
};


