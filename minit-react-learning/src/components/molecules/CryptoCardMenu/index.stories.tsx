import type { Meta, StoryObj } from '@storybook/react';

import  CryptoCardMenu  from './index';

const meta: Meta<typeof CryptoCardMenu> = {
  component: CryptoCardMenu,
};
type Story = StoryObj<typeof CryptoCardMenu>;
export default meta;


 export const Primary: Story = {
    render: () => <CryptoCardMenu maxWidth={100} />
  };

 

