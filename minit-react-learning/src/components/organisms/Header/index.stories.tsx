import Header from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organisms/Header',
  component: Header,
};

const Template:ComponentStory < typeof Header>= (args) => (
  <Header {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
 headertext:'Dashboard',
  height:82,
  width:1286,
};


