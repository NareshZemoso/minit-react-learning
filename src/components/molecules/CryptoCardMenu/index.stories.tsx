import CryptoCardMenu from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import success from '../../../../public/assets/success.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/CryptoCardMenu',
  component: CryptoCardMenu,
};

const Template:ComponentStory < typeof CryptoCardMenu>= (args) => (
  <CryptoCardMenu {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  url:bitcoin,
  currencyType:'Bitcoin',
  amount:'$ 100',
  height:150,
  width:150,
};


