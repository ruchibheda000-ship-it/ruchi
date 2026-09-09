import type { Meta, StoryObj } from '@storybook/react';
import { DateComponent } from './Date';

const meta: Meta<typeof DateComponent> = {
  title: 'Primitives & Inputs/Date',
  component: DateComponent,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '10:2569',
      layerName: 'Date',
      category: 'Primitives & Inputs',
      status: 'Stable',
    },
    designTokens: [
      { property: 'background (Selected)', token: '--uedp-teal-500', value: '#14B8A6', context: 'Active selection highlight surface' },
      { property: 'border-radius', token: '--uedp-rounded-2xl', value: '16px', context: 'Vertical capsule corner curvature' },
      { property: 'color (Unselected)', token: '--uedp-slate-600', value: '#475569', context: 'Muted weekday label' },
    ],
    preview: {
      size: 'compact',
      align: 'horizontal',
    },
    docs: {
      description: {
        component: 'Calendar day selector card presenting weekday abbreviation and calendar day number in a vertical interactive pill format.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['As is', 'Selected'],
      description: 'Selection status of the date card',
    },
    day: { control: { type: 'text' }, description: 'Day abbreviation (e.g. Mon, Tue, Wed)' },
    dateNumber: { control: { type: 'number' }, description: 'Calendar day of month integer' },
    onClick: { action: 'clicked', description: 'Callback fired on date selection' },
  },
};

export default meta;
type Story = StoryObj<typeof DateComponent>;

export const Default: Story = {
  args: {
    state: 'As is',
    day: 'Mon',
    dateNumber: 14,
  },
};

export const Selected: Story = {
  args: {
    state: 'Selected',
    day: 'Mon',
    dateNumber: 14,
  },
};
