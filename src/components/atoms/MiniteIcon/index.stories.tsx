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

const handleClick = () => {
  console.log("Need help");
  alert('Clicked');
};



export const Primary = Template.bind({});
Primary.args = {
  iconName:'A'
};


export const Secondary = Template.bind({});
Secondary.args = {
 iconName:'1H', 
 size:"large",
 color:'primary',
 onclick:handleClick

};


