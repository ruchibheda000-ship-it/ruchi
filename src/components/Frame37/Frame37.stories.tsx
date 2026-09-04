import type { Meta, StoryObj } from '@storybook/react';
import { Frame37 } from './Frame37';

const meta: Meta<typeof Frame37> = {
  title: 'Design System/Frame 37',
  component: Frame37,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Frame 37\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`11:3457\` |
| **Preserved Layer Name** | \`Frame 37\` |
| **Bound CSS Tokens** | \`--uedp-gap-4\`, \`--uedp-slate-900\` |

Doctor card list frame container matching Figma node \`11:3457\`.
        `,
      },
    },
  },
  argTypes: {
    heading: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof Frame37>;

export const Default: Story = {
  args: {
    heading: 'Recommended Specialists',
  },
};
