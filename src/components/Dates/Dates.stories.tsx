import type { Meta, StoryObj } from '@storybook/react';
import { Dates } from './Dates';

const meta: Meta<typeof Dates> = {
  title: 'Design System/Dates',
  component: Dates,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Dates\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`11:3366\` |
| **Preserved Layer Name** | \`Dates\` |
| **Bound CSS Tokens** | \`--uedp-gap-2\`, \`--uedp-rounded-3xl\`, \`--uedp-teal-500\` |

Date strip scroll container component preserving Figma node \`11:3366\`.
        `,
      },
    },
  },
  argTypes: {
    selectedIndex: { control: { type: 'number', min: 0, max: 6 } },
    onSelectDate: { action: 'dateSelected' },
  },
};

export default meta;
type Story = StoryObj<typeof Dates>;

export const Default: Story = {
  args: {
    selectedIndex: 0,
  },
};

export const WednesdaySelected: Story = {
  args: {
    selectedIndex: 2,
  },
};
