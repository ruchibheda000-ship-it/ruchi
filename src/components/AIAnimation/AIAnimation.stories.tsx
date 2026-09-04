import type { Meta, StoryObj } from '@storybook/react';
import { AIAnimation } from './AIAnimation';

const meta: Meta<typeof AIAnimation> = {
  title: 'Design System/AI Animation',
  component: AIAnimation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`AI Animation\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`9:7423\` |
| **Preserved Layer Name** | \`AI Animation\` |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-full\` |
| **Animation Effects** | Pulsing glow ring & rotating sparkle indicator |

Preserved AI animation component from Figma node \`9:7423\`.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    statusText: { control: { type: 'text' } },
    active: { control: { type: 'boolean' } },
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
