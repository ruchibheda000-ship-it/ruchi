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
      { property: 'border-color (Active)', token: '--uedp-teal-500', value: '#14B8A6', context: 'Accent focus outline' },
      { property: 'border-color (Error)', token: '--uedp-red-500', value: '#EF4444', context: 'Credential validation error border' },
      { property: 'border-radius', token: '--uedp-rounded-xl', value: '12px', context: 'Input boundary curvature' },
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
