import TradeTab from ".";
import { ComponentStory } from "@storybook/react";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organisms/TradeTab',
  component: TradeTab,
};

const Template:ComponentStory < typeof TradeTab>= (args) => (
  <TradeTab {...args} />
);



export const Secondary = Template.bind({});
Secondary.args = {
  
  
};


