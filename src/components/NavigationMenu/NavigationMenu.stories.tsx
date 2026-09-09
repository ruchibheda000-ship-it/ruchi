import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Navigation & Layout/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '12:3546',
      layerName: 'Navigation Menu',
      category: 'Navigation & Layout',
      status: 'Stable',
    },
    designTokens: [
      { property: 'accent', token: '--uedp-teal-500', value: '#14B8A6', context: 'Active destination pill highlight' },
      { property: 'border-radius', token: '--uedp-rounded-3xl', value: '24px', context: 'Floating navigation capsule curvature' },
      { property: 'background', token: '--uedp-base-white', value: '#FFFFFF / #18181B', context: 'Bar surface background' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Primary mobile application bottom navigation bar providing seamless switching between core app destinations with active pill highlighting.',
      },
    },
  },
  argTypes: {
    activeTab: {
      control: { type: 'select' },
      options: ['Home', 'Add Docs', 'Report', 'Schedule'],
      description: 'Active navigation destination tab state',
    },
    onTabChange: { action: 'tabChanged', description: 'Callback fired on navigation tab switch' },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const HomeActive: Story = {
  args: {
    activeTab: 'Home',
  },
};

export const AddDocsActive: Story = {
  args: {
    activeTab: 'Add Docs',
  },
};

export const ReportActive: Story = {
  args: {
    activeTab: 'Report',
  },
};

export const ScheduleActive: Story = {
  args: {
    activeTab: 'Schedule',
  },
};
