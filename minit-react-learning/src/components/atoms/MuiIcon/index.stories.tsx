import type { Meta, StoryObj } from '@storybook/react';
import  MuiIcon  from './index';






const meta: Meta<typeof MuiIcon> = {
  component: MuiIcon,
};
type Story = StoryObj<typeof MuiIcon>;
export default meta;


 export const Primary: Story = {
    render: () => <MuiIcon url={'https://randomuser.me/api/portraits/men/51.jpg'}  />
  };

  export const Bitcoin: Story = {
    render: () => <MuiIcon url="./bitcoin.jpg"/>
  };


 

