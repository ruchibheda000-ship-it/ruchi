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
        component: 'Foundational interactive text input control supporting typing, custom labels, helper placeholders, auto-updating status icons, and contextual validation feedback.',
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
    value: { control: { type: 'text' }, description: 'Controlled input text content' },
    defaultValue: { control: { type: 'text' }, description: 'Initial default value for uncontrolled typing' },
    placeholder: { control: { type: 'text' }, description: 'Placeholder hint shown when input is empty' },
    errorMessage: { control: { type: 'text' }, description: 'Validation feedback text displayed in Error state' },
    onChange: { action: 'valueChanged', description: 'Callback fired upon input change' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const DefaultStatus: Story = {
  name: 'Default Status (Typable)',
  args: {
    state: 'Input Field - Status',
    label: 'Full Name',
    placeholder: 'Enter full name...',
  },
};

export const Entered: Story = {
  name: 'Entered State (Editable)',
  args: {
    state: 'Entered',
    label: 'Full Name',
    defaultValue: 'Jane Doe',
  },
};

export const ErrorState: Story = {
  name: 'Error State',
  args: {
    state: 'Error',
    label: 'Full Name',
    defaultValue: 'Invalid Name!',
    errorMessage: 'Please enter a valid full name',
  },
};
