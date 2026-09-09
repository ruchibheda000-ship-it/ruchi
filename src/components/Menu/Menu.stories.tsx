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
      { property: 'border-radius', token: '--uedp-rounded-2xl', value: '16px', context: 'Header navigation container curvature' },
      { property: 'border-color', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Container boundary outline stroke' },
      { property: 'text-color (Title)', token: '--uedp-slate-900', value: '#0F172A', context: 'User full name typography' },
      { property: 'background (Badge)', token: '--uedp-zinc-900', value: '#18181B', context: 'Unread notification pill surface' },
      { property: 'background (Avatar)', token: '--uedp-teal-100', value: '#CCFBF1', context: 'Circular user emblem surface' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Primary application top navigation bar preserving Figma node (`Menu`, ID: `9:4628`). Features logged-in user greeting context, localized clinic location, instant search action trigger, and unread notification counter badge.',
      },
    },
  },
  argTypes: {
    userName: { control: { type: 'text' }, description: 'Logged-in user full name' },
    locationText: { control: { type: 'text' }, description: 'Current user clinic or city location' },
    notificationsCount: { control: { type: 'number' }, description: 'Unread alert counter displayed on bell badge' },
    avatarUrl: { control: { type: 'text' }, description: 'Optional custom photo avatar URL' },
    onNotificationClick: { action: 'notificationClicked', description: 'Callback fired on notification bell click' },
    onSearchClick: { action: 'searchClicked', description: 'Callback fired on search button click' },
    onProfileClick: { action: 'profileClicked', description: 'Callback fired on profile avatar click' },
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

export const CustomPhoto: Story = {
  name: 'With Photo Avatar',
  args: {
    userName: 'Dr. Sarah Jenkins',
    locationText: 'Nagpur Hospital • Ward 4',
    notificationsCount: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
  },
};
