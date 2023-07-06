import PortpolioMenu from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import success from '../../../../public/assets/success.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/PortpolioMenu',
  component: PortpolioMenu,
};

const Template:ComponentStory < typeof PortpolioMenu>= (args) => (
  <PortpolioMenu {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
  url:bitcoin,
  currencyType:'Bitcoin',
  amount:'$ 100',
  code:'BTC',
  increment:'+ 1.000%',
  height:58,
  width:370,
};


