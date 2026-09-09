import type { Meta, StoryObj } from '@storybook/react';
import { AIAnimation } from './AIAnimation';

const meta: Meta<typeof AIAnimation> = {
  title: 'Feedback & Motion/AI Animation',
  component: AIAnimation,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '9:7423',
      layerName: 'AI Animation',
      category: 'Feedback & Motion',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Circular spherical boundary curvature' },
      { property: 'background (Lavender)', token: '--uedp-pastel-lavender', value: '#E0E7FF', context: 'Translucent organic layer gradient' },
      { property: 'background (Peach)', token: '--uedp-pastel-peach', value: '#FCE7F3', context: 'Translucent warm layer gradient' },
      { property: 'background (Sky)', token: '--uedp-pastel-sky', value: '#E0F2FE', context: 'Translucent light blue layer gradient' },
      { property: 'filter (Blur)', token: '--uedp-blur-2xl', value: '20px - 28px', context: 'Soft feathered edge diffusion' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Soft, translucent circular AI assistant presence orb from Figma (`AI Animation`, ID: `9:7423`). Composed of multiple delicate pastel layers (lavender, peach, sky blue, and soft mint) with gentle, organic breathing movement suitable for calming healthcare interactions.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Physical diameter scaling of the AI orb',
    },
    active: {
      control: { type: 'boolean' },
      description: 'Toggles organic living breathing motion vs calm static standby',
    },
    statusText: {
      control: { type: 'text' },
      description: 'Optional status text displayed underneath the orb',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AIAnimation>;

export const Active: Story = {
  name: 'Active (Living Presence)',
  args: {
    size: 'medium',
    active: true,
    statusText: 'Listening to your query...',
  },
};

export const Idle: Story = {
  name: 'Idle (Standby)',
  args: {
    size: 'medium',
    active: false,
    statusText: 'Eva is ready to assist',
  },
};
