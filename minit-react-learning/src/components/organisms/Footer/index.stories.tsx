import Footer from ".";
import { ComponentStory } from "@storybook/react";
import usdcoin from '../../../../public/assets/usdcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organisms/Footer',
  component: Footer,
};

const Template:ComponentStory < typeof Footer>= (args) => (
  <Footer {...args} />
);



export const Primary = Template.bind({});
Primary.args = {  
  height:100,
  width:1286,
  bgcolor:'FAFCFF'
 
};


