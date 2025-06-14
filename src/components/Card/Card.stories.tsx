import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'Components/Card',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const WithContent: Story = {
    render: () => (
        <Card>
            <h2 className="text-lg font-bold">Card Title</h2>
            <p>This is card content.</p>
        </Card>
    ),
};
