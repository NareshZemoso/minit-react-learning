import type { Meta, StoryObj } from '@storybook/react';

import  MiniteAvatar  from './index';

const meta: Meta<typeof MiniteAvatar> = {
  component: MiniteAvatar,
};

export default meta;
type Story = StoryObj<typeof MiniteAvatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <MiniteAvatar imageUrl='https://randomuser.me/api/portraits/men/51.jpg' size={50} altText='altText'/>,
};