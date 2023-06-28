import type { Meta, StoryObj } from '@storybook/react';

import  MiniteButton  from './index';

const meta: Meta<typeof MiniteButton> = {
  component: MiniteButton,
};

export default meta;
type Story = StoryObj<typeof MiniteButton>;
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
  render: () => <MiniteButton variant='contained' onClick={handleNeedHelp} children='SELL' fgColor='primary' size='large'/>,
};

export const Secondary: Story = {
    render: () => <MiniteButton variant='outlined' onClick={handleNeedHelp} children='Need Help' fgColor='primary' size='medium'/>,
  };

 