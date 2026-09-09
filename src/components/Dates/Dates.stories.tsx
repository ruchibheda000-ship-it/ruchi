import type { Meta, StoryObj } from '@storybook/react';
import { Dates } from './Dates';

const meta: Meta<typeof Dates> = {
  title: 'Primitives & Inputs/Dates',
  component: Dates,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '11:3366',
      layerName: 'Dates',
      category: 'Primitives & Inputs',
      status: 'Stable',
    },
    designTokens: [
      { property: 'gap', token: '--uedp-gap-2', value: '8px', context: 'Spacing between horizontal date items' },
      { property: 'border-radius', token: '--uedp-rounded-3xl', value: '24px', context: 'Overall date rail corner radius' },
      { property: 'background', token: '--uedp-slate-50', value: '#F8FAFC', context: 'Date carousel container surface' },
      { property: 'border-color', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Rail perimeter outline stroke' },
    ],
    preview: {
      size: 'standard',
      align: 'horizontal',
    },
    docs: {
      description: {
        component: 'Horizontal sequence date selector rail for multi-day calendar scheduling and appointment booking workflows.',
      },
    },
  },
  argTypes: {
    selectedIndex: { control: { type: 'number', min: 0, max: 6 }, description: 'Index of the actively selected calendar date' },
    onSelectDate: { action: 'dateSelected', description: 'Callback fired when a date item is tapped' },
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
