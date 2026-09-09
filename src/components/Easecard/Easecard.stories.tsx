import type { Meta, StoryObj } from '@storybook/react';
import { Easecard } from './Easecard';

const meta: Meta<typeof Easecard> = {
  title: 'Cards & Data Display/Easecard',
  component: Easecard,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '9:7343',
      layerName: 'Easecard',
      category: 'Cards & Data Display',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border-radius', token: '--uedp-rounded-2xl', value: '16px', context: 'Provider card perimeter radius' },
      { property: 'border-color', token: '--uedp-slate-200', value: '#E2E8F0', context: 'Boundary outline stroke' },
      { property: 'text-color (Title)', token: '--uedp-slate-900', value: '#0F172A', context: 'Hospital facility typography header' },
      { property: 'background (Icon Box)', token: '--uedp-slate-100', value: '#F1F5F9', context: 'Provider emblem container fill' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Branded hospital network integration tile displaying certified provider emblems, official network status, and connection action triggers.',
      },
    },
  },
  argTypes: {
    provider: {
      control: { type: 'select' },
      options: ['KIMS', 'Tata', 'Metro', 'Add', 'formkit:add'],
      description: 'Healthcare provider variant identifying logo and visual branding style',
    },
    name: { control: { type: 'text' }, description: 'Hospital or clinic facility name' },
    type: { control: { type: 'text' }, description: 'Network classification subtitle' },
    onClick: { action: 'clicked', description: 'Callback triggered when card is clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Easecard>;

export const KIMS: Story = {
  args: {
    provider: 'KIMS',
    name: 'KIMS Hospital',
    type: 'Primary Network Provider',
  },
};

export const Tata: Story = {
  args: {
    provider: 'Tata',
    name: 'Tata Medical Center',
    type: 'Specialty Network',
  },
};

export const AddProvider: Story = {
  args: {
    provider: 'Add',
    name: 'Add Hospital',
    type: 'Connect records',
  },
};
