import MiniteTemplate from ".";
import { ComponentStory } from "@storybook/react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Mainbar from "../../organisms/Mainbar";
import Navbar from "../../organisms/Navbar";
import { useNavigate } from "react-router-dom";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'templates/MiniteTemplate',
  component: MiniteTemplate,
};


const handleSellButtonClick = () => {
  alert("Hi")
};

const Template:ComponentStory < typeof MiniteTemplate>= (args) => (
  <MiniteTemplate {...args} />
);



export const Primary = Template.bind({});
Primary.args = {
  header:<Header height={82} width={1286} headertext='Dashboard' bgclor="#ffffff" onClick={handleSellButtonClick}/>,
  footer:<Footer height={100} width={1286} bgcolor="#ffffff"/>,
  children:<Mainbar children={undefined} height={1200} width={1286} bgclor="#fafcff"/>,
  navbar:<Navbar height={1356} width={60} bgclor="#ffffff"/>,
  templateColor:'#ffffff'

  
};


