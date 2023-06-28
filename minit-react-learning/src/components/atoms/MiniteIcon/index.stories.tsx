import type { Meta, StoryObj } from '@storybook/react';

import  MiniteIcon  from './index';

const meta: Meta<typeof MiniteIcon> = {
  component: MiniteIcon,
};

export default meta;
type Story = StoryObj<typeof MiniteIcon>;
const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
 export const Large: Story = {
    render: () => <MiniteIcon iconName='24' color='primary' size='large'/>,
  };

export const Medium: Story = {
  render: () => <MiniteIcon iconName='24' color="primary" size='medium'/>,
};

export const Small: Story = {
    render: () => <MiniteIcon iconName='24' color='primary' size='small'/>,
  };