import DepositTo from ".";
import { ComponentStory } from "@storybook/react";
import usdcoin from '../../../../public/assets/usdcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/DepositTo',
  component: DepositTo,
};

const Template:ComponentStory < typeof DepositTo>= (args) => (
  <DepositTo {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
 
  iconUrl:usdcoin,
  width:666,
  height:200,
};


