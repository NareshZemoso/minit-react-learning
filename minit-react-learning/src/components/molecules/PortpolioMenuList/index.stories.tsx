import PortpolioMenuList from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import success from '../../../../public/assets/success.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/PortpolioMenuList',
  component: PortpolioMenuList,
};

const Template:ComponentStory < typeof PortpolioMenuList>= (args) => (
  <PortpolioMenuList {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
  url:bitcoin,
  currencyType:'Bitcoin',
  amount:'$ 100',
  height:244,
  width:370,
};


