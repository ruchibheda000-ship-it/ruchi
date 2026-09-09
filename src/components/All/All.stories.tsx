import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AllComponent } from './All';
import { Sparkles, Heart } from 'lucide-react';

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
      { property: 'background (Selected)', token: '--uedp-zinc-900', value: '#18181B', context: 'Active filter pill dark surface' },
      { property: 'color (Selected)', token: '--uedp-slate-50', value: '#F8FAFC', context: 'Active filter label text' },
      { property: 'background (Not Selected)', token: '--uedp-amber-50', value: '#FFFBEB', context: 'Unselected filter pill warm cream surface' },
      { property: 'border (Not Selected)', token: '--uedp-amber-200', value: '#FDE68A', context: 'Unselected boundary stroke' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Capsule chip perimeter' },
    ],
    preview: {
      size: 'compact',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Interactive category filter pill chip from Figma (`All`, ID: `12:3547`). Used in specialist category rails and appointment search filters with distinct selected and unselected states.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Not Selected'],
      description: 'Filter pill selection state (Default is selected)',
    },
    label: { control: { type: 'text' }, description: 'Text label displayed inside filter pill' },
    onClick: { action: 'clicked', description: 'Callback fired on pill click' },
  },
};

export default meta;
type Story = StoryObj<typeof AllComponent>;

export const DefaultSelected: Story = {
  name: 'Default (Selected)',
  args: {
    state: 'Default',
    label: 'All',
  },
};

export const NotSelected: Story = {
  name: 'Not Selected',
  args: {
    state: 'Not Selected',
    label: 'All',
  },
};

export const CategoryPillsRail: Story = {
  name: 'Specialist Category Rail',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', padding: '8px 0' }}>
      <AllComponent state="Default" label="All" />
      <AllComponent state="Not Selected" label="Cardiologist" icon={<Heart size={14} />} />
      <AllComponent state="Not Selected" label="Nephrologist" />
      <AllComponent state="Not Selected" label="Pediatrician" />
      <AllComponent state="Not Selected" label="Specialist AI" icon={<Sparkles size={14} />} />
    </div>
  ),
};
