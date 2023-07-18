import TimePeriodcard from ".";
import { ComponentStory } from "@storybook/react";
import bitcoin from '../../../../public/assets/bitcoin.png';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'molecules/TimePeriodcard',
  component: TimePeriodcard,
};

const Template:ComponentStory < typeof TimePeriodcard>= (args) => (
  <TimePeriodcard {...args} />
);

const handleTextClick=() =>{
    alert('Text clicked')
}


export const Primary = Template.bind({});
Primary.args = { 
  width:304,
  height:52,
  onclickText:handleTextClick,
  textColor:'#7D7D89'
};


