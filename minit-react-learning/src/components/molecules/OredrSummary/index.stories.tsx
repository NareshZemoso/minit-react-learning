import OrderSummary from ".";
import { ComponentStory } from "@storybook/react";
import usdcoin from '../../../../public/assets/usdcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/OrderSummary',
  component: OrderSummary,
};

const Template:ComponentStory < typeof OrderSummary>= (args) => (
  <OrderSummary {...args} />
);



export const Primary = Template.bind({});
Primary.args = {  
  height:666,
  width:526,
 
};


