import type { Meta, StoryObj } from '@storybook/react';

import  Typography  from './index';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Typography variant='h1' children='Hi' />,
};

export const Secondary: Story = {
    render: () => <Typography variant='h6' children='Hi' />,
  };

  export const Caption: Story = {
    render: () => <Typography variant='caption' children='Caption' />,
  };