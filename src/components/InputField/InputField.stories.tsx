import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Primitives & Inputs/Input Field',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '12:3542',
      layerName: 'Input Field',
      category: 'Primitives & Inputs',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border-color (Default)', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Inactive input boundary outline' },
      { property: 'border-color (Focus / Entered)', token: '--uedp-zinc-900', value: '#18181B', context: 'Active input focus ring and entered border' },
      { property: 'border-color (Error)', token: '--uedp-red-700', value: '#B91C1C', context: 'Validation error outline and feedback' },
      { property: 'text-color (Label)', token: '--uedp-slate-700', value: '#334155', context: 'Field label header typography' },
    ],
    preview: {
      size: 'compact',
      align: 'form',
    },
    docs: {
      description: {
        component: 'Foundational text input control supporting custom labels, helper placeholders, filled values, and contextual error feedback states.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Input Field - Status', 'Entered', 'Error', 'Variant4'],
      description: 'Figma component variant state reflecting user interaction stage.',
    },
    label: { control: { type: 'text' }, description: 'Descriptive field label above input' },
    value: { control: { type: 'text' }, description: 'Current input text content' },
    placeholder: { control: { type: 'text' }, description: 'Placeholder hint shown when input is empty' },
    errorMessage: { control: { type: 'text' }, description: 'Validation feedback text displayed in Error state' },
    onChange: { action: 'valueChanged', description: 'Callback fired upon input change' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const DefaultStatus: Story = {
  args: {
    state: 'Input Field - Status',
    label: 'Full Name',
    placeholder: 'Enter full name...',
  },
};

export const Entered: Story = {
  args: {
    state: 'Entered',
    label: 'Full Name',
    value: 'Jane Doe',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Full Name',
    value: 'Invalid Name!',
    errorMessage: 'Please enter a valid full name',
  },
};
