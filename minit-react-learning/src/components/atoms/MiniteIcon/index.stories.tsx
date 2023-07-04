import MiniteIcon from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
import logout from '../../../../public/assets/logout.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'atoms/MiniteIcon',
  component: MiniteIcon,
};

const Template:ComponentStory < typeof MiniteIcon>= (args) => (
  <MiniteIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  iconName:'A'
};


export const Secondary = Template.bind({});
Secondary.args = {
 iconName:'25', 
 size:"large",
 color:'primary'

};

