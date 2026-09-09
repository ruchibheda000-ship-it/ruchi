import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Navigation & Layout/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '9:4628',
      layerName: 'Menu',
      category: 'Navigation & Layout',
      status: 'Stable',
    },
    designTokens: [
      { property: 'accent / badge', token: '--uedp-teal-500', value: '#14B8A6', context: 'Notification counter badge' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Circular avatar and notification bell' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Primary top header navigation bar featuring user identity greeting, localized clinic location, and unread notification alert counter.',
      },
    },
  },
  argTypes: {
    userName: { control: { type: 'text' }, description: 'Logged-in user full name' },
    locationText: { control: { type: 'text' }, description: 'Current user clinic or city location' },
    notificationsCount: { control: { type: 'number' }, description: 'Unread alert counter displayed on bell badge' },
    onNotificationClick: { action: 'notificationClicked', description: 'Callback fired on notification bell click' },
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
