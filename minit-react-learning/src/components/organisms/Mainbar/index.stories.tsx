import Mainbar from ".";
import { ComponentStory } from "@storybook/react";
import usdcoin from '../../../../public/assets/usdcoin.png';
import CheckoutSuccess from "../../molecules/CheckoutSuccess";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organisms/Mainbar',
  component: Mainbar,
};

const Template:ComponentStory < typeof Mainbar>= (args) => (
  <Mainbar {...args} />
);



export const Primary = Template.bind({});
Primary.args = {  
  height:1270,
  width:1476,
  bgclor:'#fafcff'

 
};


