import TotalBalance from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/TotalBalance',
  component: TotalBalance,
};

const Template:ComponentStory < typeof TotalBalance>= (args) => (
  <TotalBalance {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
 
  iconUrl:bitcoin,
  width:650,
  height:200,
};


