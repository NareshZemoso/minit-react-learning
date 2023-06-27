import type { Meta, StoryObj } from '@storybook/react';

import  IconAtom  from './index';

const meta: Meta<typeof IconAtom> = {
  component: IconAtom,
};

export default meta;
type Story = StoryObj<typeof IconAtom>;
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
    render: () => <IconAtom iconName='24' color='primary' size='large'/>,
  };

export const Medium: Story = {
  render: () => <IconAtom iconName='24' color="primary" size='medium'/>,
};

export const Small: Story = {
    render: () => <IconAtom iconName='24' color='primary' size='small'/>,
  };