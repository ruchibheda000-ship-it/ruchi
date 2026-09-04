import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Design System/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Navigation Menu\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`12:3546\` |
| **Preserved Layer Name** | \`Navigation Menu\` |
| **Variant Property** | \`Property 1\` (\`Navigation Menu - Home\` \| \`Navigation Menu - Add Docs\` \| \`Navigation Menu - Report\` \| \`Navigation Menu - Schedule\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-3xl\`, \`--uedp-base-white\` |
| **Unbound Properties** | \`padding: 10px 16px\`, \`box-shadow: 0 10px 30px rgba(0,0,0,0.08)\` |

Mobile bottom navigation component preserving Figma node \`12:3546\`.
        `,
      },
    },
  },
  argTypes: {
    activeTab: {
      control: { type: 'select' },
      options: ['Home', 'Add Docs', 'Report', 'Schedule'],
      description: 'Active navigation tab state',
    },
    onTabChange: { action: 'tabChanged' },
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
