import type { Meta, StoryObj } from '@storybook/react';
import { Frame37 } from './Frame37';

const meta: Meta<typeof Frame37> = {
  title: 'Navigation & Layout/Frame 37',
  component: Frame37,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '11:3457',
      layerName: 'Frame 37',
      category: 'Navigation & Layout',
      status: 'Stable',
    },
    designTokens: [
      { property: 'gap', token: '--uedp-gap-4', value: '16px', context: 'Horizontal spacing between doctor card items' },
      { property: 'color (Heading)', token: '--uedp-slate-900', value: '#0F172A', context: 'Section title header color' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Composite section container coordinating a prominent category title with a horizontal specialists carousel rail.',
      },
    },
  },
  argTypes: {
    heading: { control: { type: 'text' }, description: 'Section title displayed above the carousel' },
  },
};

export default meta;
type Story = StoryObj<typeof Frame37>;

export const Default: Story = {
  args: {
    heading: 'Recommended Specialists',
  },
};
