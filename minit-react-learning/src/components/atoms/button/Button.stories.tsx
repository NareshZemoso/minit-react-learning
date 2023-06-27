import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button onClick={handleNeedHelp} children='Need Help' fgColor='primary'/>,
};

export const Secondary: Story = {
    render: () => <Button onClick={handleNeedHelp} children='Need Help' fgColor='#ff5722'/>,
  };