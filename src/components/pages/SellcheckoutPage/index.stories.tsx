import SellcheckoutPage from ".";
import { ComponentStory } from "@storybook/react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";
import Mainbar from "../../organisms/Mainbar";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'pages/SellcheckoutPage',
  component: SellcheckoutPage,
};

const Template:ComponentStory < typeof SellcheckoutPage>= (args) => (
  <SellcheckoutPage {...args} />
);



export const Primary = Template.bind({});
Primary.args = {

};


