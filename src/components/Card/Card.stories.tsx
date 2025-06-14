import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { CardHeader } from '../CardHeader';
import { CardBody } from '../CardBody';

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
            <CardHeader title="Card Title" subtitle='A long sub title' />
            <CardBody>
                <span style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardBody>
        </Card>
    ),
};
