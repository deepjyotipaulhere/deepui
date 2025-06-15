import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './index';

const meta: Meta<typeof TextInput> = {
    component: TextInput,
    title: 'Components/TextInput',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const PlaceholderAndLabel: Story = {
    render: () => (<div style={{ display: 'flex', gap: '1em' }}>
        <TextInput />
        <TextInput type='password' placeholder='Password' />
        <TextInput placeholder='With Placeholder' />
        <TextInput label='With Label' />
        <TextInput label='With Label' placeholder='and Placeholder' />
    </div>
    ),
};

export const PrependAndAppend: Story = {
    render: () => (<div style={{ display: 'flex', gap: '1em' }}>
        <TextInput prepend='$' placeholder='Prepended text' />
        <TextInput append='Million' placeholder='Appended text' />
        <TextInput prepend='$' append='Million' placeholder='Prepended and Appended' />
    </div>)
}

export const HelperText: Story = {
    render: () => (<div style={{ display: 'flex', gap: '1em' }}>
        <TextInput helperText="Helper Text" />
    </div>)
}