import CheckoutSuccess from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import success from '../../../../public/assets/success.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/CheckoutSuccess',
  component: CheckoutSuccess,
};

const Template:ComponentStory < typeof CheckoutSuccess>= (args) => (
  <CheckoutSuccess {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  url:success,
  height:250,
  width:396,
};


