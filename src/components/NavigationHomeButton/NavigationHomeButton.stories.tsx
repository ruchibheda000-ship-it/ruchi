import type { Meta, StoryObj } from '@storybook/react';
import { NavigationHomeButton } from './NavigationHomeButton';

const meta: Meta<typeof NavigationHomeButton> = {
  title: 'Primitives & Inputs/Navigation - Home Button',
  component: NavigationHomeButton,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '8:4123',
      layerName: 'Navigation - Home Button',
      category: 'Primitives & Inputs',
      status: 'Stable',
    },
    designTokens: [
      { property: 'background (Selected)', token: '--uedp-teal-500', value: '#14B8A6', context: 'Primary active selection surface' },
      { property: 'color (Selected)', token: '--uedp-base-white', value: '#FFFFFF', context: 'High-contrast text label' },
      { property: 'border-radius', token: '--uedp-rounded-2xl', value: '16px', context: 'Pill capsule geometry' },
    ],
    preview: {
      size: 'compact',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Curved interactive pill button designed for primary top-level return actions and bottom navigation centers with toggleable active state.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Selected', 'As is'],
      description: 'Active selection status of the button',
    },
    label: {
      control: { type: 'text' },
      description: 'Text label accompanying the home icon',
    },
    onClick: { action: 'clicked', description: 'Click trigger callback' },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationHomeButton>;

export const Default: Story = {
  args: {
    state: 'As is',
    label: 'Home',
  },
};

export const Selected: Story = {
  args: {
    state: 'Selected',
    label: 'Home',
  },
};
