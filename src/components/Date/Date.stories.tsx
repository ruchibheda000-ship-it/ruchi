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
      { property: 'background (Selected)', token: '--uedp-zinc-900', value: '#18181B', context: 'Active selection pill surface' },
      { property: 'color (Selected Text)', token: '--uedp-amber-100', value: '#FFEDD5', context: 'Selected date number and day label' },
      { property: 'border-radius', token: '--uedp-rounded-xl', value: '12px', context: 'Vertical capsule corner curvature' },
      { property: 'border-color (Unselected)', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Boundary stroke in unselected state' },
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
