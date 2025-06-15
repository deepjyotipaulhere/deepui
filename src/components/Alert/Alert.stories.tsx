import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'Components/Alert',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const SimpleAlert: Story = {
    render: () => <div style={{ display: 'flex', gap: '1em', flexDirection:'column' }}>
        <Alert message='Message Only' />
        <Alert message='Alert With Title' title='Alert Title'/>
    </div>
}

export const AlertTypes: Story ={
    render:()=><div style={{ display: 'flex', gap: '1em', flexDirection:'column' }}>
        <Alert message='Success Alert' type='success' title='Success Alert'/>
        <Alert message='Error Alert' type='error'/>
    </div>
}