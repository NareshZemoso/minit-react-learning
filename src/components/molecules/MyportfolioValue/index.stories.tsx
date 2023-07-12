import MyportfolioValue from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/MyportfolioValue',
  component: MyportfolioValue,
};

const Template:ComponentStory < typeof MyportfolioValue>= (args) => (
  <MyportfolioValue {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  url:bitcoin,
  currencyType:'Bitcoin',
  amount:'$ 100',
  height:130,
  width:840,
};


