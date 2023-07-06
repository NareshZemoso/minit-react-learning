import AmountDetails from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/AmountDetails',
  component: AmountDetails,
};

const Template:ComponentStory < typeof AmountDetails>= (args) => (
  <AmountDetails {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
  width:710,
  height:318,
};


