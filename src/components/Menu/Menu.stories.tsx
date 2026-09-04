import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Design System/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Menu\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`9:4628\` |
| **Preserved Layer Name** | \`Menu\` |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-full\` |

Top header navigation bar preserving Figma node \`9:4628\`.
        `,
      },
    },
  },
  argTypes: {
    userName: { control: { type: 'text' } },
    locationText: { control: { type: 'text' } },
    notificationsCount: { control: { type: 'number' } },
    onNotificationClick: { action: 'notificationClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    userName: 'Alex Morgan',
    locationText: 'San Francisco, CA',
    notificationsCount: 3,
  },
};
