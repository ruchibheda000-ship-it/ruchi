import type { Meta, StoryObj } from '@storybook/react';
import { Password } from './Password';

const meta: Meta<typeof Password> = {
  title: 'Primitives & Inputs/Password',
  component: Password,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '12:3538',
      layerName: 'Password',
      category: 'Primitives & Inputs',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border-color (Default)', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Inactive input boundary outline' },
      { property: 'border-color (Active / Focus)', token: '--uedp-zinc-900', value: '#18181B', context: 'Active input focus ring and pressed border' },
      { property: 'border-color (Error)', token: '--uedp-red-700', value: '#B91C1C', context: 'Validation error outline and feedback' },
      { property: 'text-color (Label)', token: '--uedp-slate-700', value: '#334155', context: 'Field label header typography' },
    ],
    preview: {
      size: 'compact',
      align: 'form',
    },
    docs: {
      description: {
        component: 'Secure credential entry input featuring toggleable visibility obfuscation, integrated label headers, and contextual validation error handling.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Error', 'Pressed', 'Filled'],
      description: 'Component interaction state variant',
    },
    label: { control: { type: 'text' }, description: 'Field header label' },
    value: { control: { type: 'text' }, description: 'Current password string value' },
    errorMessage: { control: { type: 'text' }, description: 'Validation feedback text shown when in error state' },
    onChange: { action: 'valueChanged', description: 'Callback fired on password modification' },
  },
};

export default meta;
type Story = StoryObj<typeof Password>;

export const Default: Story = {
  args: {
    state: 'Default',
    label: 'Password',
  },
};

export const Filled: Story = {
  args: {
    state: 'Filled',
    label: 'Password',
    value: 'SuperSecret123!',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Password',
    value: '123',
    errorMessage: 'Password must be at least 8 characters',
  },
};
