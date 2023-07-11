import Success from ".";
import { ComponentStory } from "@storybook/react";
import Header from "../../organisms/Header";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'pages/Success',
  component: Success,
};

const Template:ComponentStory < typeof Success>= (args) => (
  <Success {...args} />
);



export const Primary = Template.bind({});
Primary.args = {

  
};


