import type { Meta, StoryObj } from '@storybook/react';
import { DateComponent } from './Date';

const meta: Meta<typeof DateComponent> = {
  title: 'Design System/Date',
  component: DateComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Date\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`10:2569\` |
| **Preserved Layer Name** | \`Date\` |
| **Variant Property** | \`Property 1\` (\`As is\` \| \`Selected\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-2xl\`, \`--uedp-base-white\` |

Calendar date item pill component preserving Figma node \`10:2569\`.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['As is', 'Selected'],
      description: 'Figma component variant state',
    },
    day: { control: { type: 'text' } },
    dateNumber: { control: { type: 'number' } },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof DateComponent>;

export const Default: Story = {
  args: {
    state: 'As is',
    day: 'Mon',
    dateNumber: 14,
  },
};

export const Selected: Story = {
  args: {
    state: 'Selected',
    day: 'Mon',
    dateNumber: 14,
  },
};
