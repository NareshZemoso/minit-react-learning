import ChooseCryptocard from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import success from '../../../../public/assets/success.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/ChooseCryptocard',
  component: ChooseCryptocard,
};

const Template:ComponentStory < typeof ChooseCryptocard>= (args) => (
  <ChooseCryptocard {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  height:400,
  width:700,
  text:'Choose crypto'
};


