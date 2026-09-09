import type { Meta, StoryObj } from '@storybook/react';
import { AllComponent } from './All';

const meta: Meta<typeof AllComponent> = {
  title: 'Navigation & Layout/All',
  component: AllComponent,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '12:3547',
      layerName: 'All',
      category: 'Navigation & Layout',
      status: 'Stable',
    },
    designTokens: [
      { property: 'background (Selected)', token: '--uedp-teal-500', value: '#14B8A6', context: 'Active filter category surface' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Capsule chip perimeter' },
    ],
    preview: {
      size: 'compact',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Interactive pill filter chip used in specialist category navigation rails and appointment filtering controls.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Not Selected'],
      description: 'Filter pill selection state',
    },
    label: { control: { type: 'text' }, description: 'Text label displayed inside filter pill' },
    onClick: { action: 'clicked', description: 'Callback fired on pill click' },
  },
};

export default meta;
type Story = StoryObj<typeof AllComponent>;

export const DefaultSelected: Story = {
  args: {
    state: 'Default',
    label: 'All',
  },
};

export const NotSelected: Story = {
  args: {
    state: 'Not Selected',
    label: 'All',
  },
};
