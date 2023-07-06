import Dashboard from ".";
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
  title: 'pages/Dashboard',
  component: Dashboard,
};

const Template:ComponentStory < typeof Dashboard>= (args) => (
  <Dashboard {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
  header:<Header height={66} width={1476} headertext='Dashboard' bgclor='#fafcff'/>,
  footer:<Footer height={66} width={1476} bgcolor='#fafcff'/>,
  navabar:<Navbar height={800} width={60} bgclor='#fafcff'/>,
  mainbar:<Mainbar height={760} width={1476} children={undefined} bgclor='#fafcff'/>
};


