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
      { property: 'gap', token: '--uedp-gap-4', value: '16px', context: 'Horizontal spacing between doctor card items in carousel' },
      { property: 'font-family', token: '--uedp-font-family', value: "'Lufga', 'Inter', sans-serif", context: 'Section heading and action typography' },
      { property: 'text-color (Heading)', token: '--uedp-zinc-900', value: '#000000', context: 'Section title header color' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Composite category section container from Figma (`Frame 37`, ID: `11:3457`). Coordinates a prominent section heading with an action trigger and a horizontal scrollable doctor appointment cards carousel rail.',
      },
    },
  },
  argTypes: {
    heading: { control: { type: 'text' }, description: 'Section title displayed above the carousel' },
    actionText: { control: { type: 'text' }, description: 'Action link text displayed on the right of the header' },
    onActionClick: { action: 'actionClicked', description: 'Callback fired when action link is clicked' },
    onSelectDoctor: { action: 'doctorSelected', description: 'Callback fired when doctor card is selected' },
  },
};

export default meta;
type Story = StoryObj<typeof Frame37>;

export const Default: Story = {
  args: {
    heading: 'Recommended Specialists',
    actionText: 'See all',
  },
};
