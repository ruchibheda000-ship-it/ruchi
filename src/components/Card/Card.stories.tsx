import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Card\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`9:7795\` |
| **Preserved Layer Name** | \`Card\` |
| **Bound CSS Tokens** | \`--uedp-rounded-3xl\`, \`--uedp-base-white\`, \`--uedp-teal-500\` |
| **Unbound Properties** | \`padding: 20px\`, \`box-shadow: 0 8px 24px rgba(0,0,0,0.04)\` |

Preserved health card component from Figma canvas node \`9:7795\`.
        `,
      },
    },
  },
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    date: { control: { type: 'text' } },
    time: { control: { type: 'text' } },
    location: { control: { type: 'text' } },
    status: {
      control: { type: 'select' },
      options: ['Confirmed', 'Pending', 'Completed'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Confirmed: Story = {
  args: {
    title: 'General Health Consultation',
    subtitle: 'Apollo Healthcare Hub',
    date: 'Thu, 24 Aug',
    time: '10:30 AM',
    location: 'Building B, Room 402',
    status: 'Confirmed',
  },
};

export const Pending: Story = {
  args: {
    title: 'Cardiology Checkup',
    subtitle: 'KIMS Specialty Hospital',
    date: 'Fri, 25 Aug',
    time: '02:00 PM',
    location: 'Tower A, Level 3',
    status: 'Pending',
  },
};
