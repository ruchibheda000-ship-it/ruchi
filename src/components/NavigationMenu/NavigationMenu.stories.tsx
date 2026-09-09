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
      { property: 'background (Active)', token: '--uedp-zinc-900', value: '#18181B', context: 'Active destination pill highlight' },
      { property: 'text-color (Active)', token: '--uedp-amber-100', value: '#FFEDD5', context: 'Selected destination label and icon' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Floating navigation capsule curvature' },
      { property: 'background (Surface)', token: '--uedp-base-white', value: '#FFFFFF', context: 'Bar surface background' },
      { property: 'border-color', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Bar boundary outline stroke' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Primary mobile application bottom navigation bar preserving Figma node (`Navigation Menu`, ID: `12:3546`). Provides seamless switching between core app destinations (Home, Add Docs, Report, Schedule) with active pill highlighting.',
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
