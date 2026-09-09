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
      { property: 'accent / aura', token: '--uedp-teal-500', value: '#14B8A6', context: 'Concentric aura and particle illumination' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Spherical glow ring curvature' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Health assistant animated indicator signaling listening, computation, and interactive standby voice states.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Physical dimensions of the AI aura indicator',
    },
    statusText: { control: { type: 'text' }, description: 'Descriptive status text displayed below animation' },
    active: { control: { type: 'boolean' }, description: 'Toggles active pulsing animation vs idle standby' },
  },
};

export default meta;
type Story = StoryObj<typeof AIAnimation>;

export const Active: Story = {
  args: {
    size: 'medium',
    statusText: 'AI Health Assistant Active',
    active: true,
  },
};

export const Idle: Story = {
  args: {
    size: 'medium',
    statusText: 'AI Standby',
    active: false,
  },
};
