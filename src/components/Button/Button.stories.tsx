import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Colors: Story = {
    render: () => (<div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button>Click me</Button>
        <Button color='secondary'>Click me</Button>
    </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Button disabled={true}>Disabled</Button>
    ),
};

export const Loading: Story = {
    render: () => (
        <Button loading>Loading Button</Button>
    ),
};

