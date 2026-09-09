import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
      { property: 'border-radius', token: '--uedp-easecard-radius', value: '16px', context: 'Digital health pass outer corner radius' },
      { property: 'background (KIMS)', token: '--uedp-easecard-kims-bg', value: '#B8C8EA', context: 'KIMS Kingsway lavender/periwinkle tint fill' },
      { property: 'background (Tata AIG)', token: '--uedp-easecard-tata-bg', value: '#A5B074', context: 'Tata AIG sage/olive green tint fill' },
      { property: 'background (Metropolis)', token: '--uedp-easecard-metro-bg', value: '#EFD576', context: 'Metropolis pastel gold/yellow tint fill' },
      { property: 'font-family', token: '--uedp-font-family', value: "'Lufga', 'Inter', sans-serif", context: 'Member title & provider name typeface' },
      { property: 'letter-spacing', token: '--uedp-easecard-letter-spacing', value: '0.04em - 0.22em', context: 'Spaced uppercase typography & card number sequence' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Digital healthcare membership & insurance access pass from Figma (`❖ KIMS Kingsway`, `Easecard`, ID: `9:7343`). Features contactless NFC wave iconography, patient member name, prominent provider branding, spaced card number sequence, and a barcode asset.',
      },
    },
  },
  argTypes: {
    provider: {
      control: { type: 'select' },
      options: ['KIMS', 'Tata', 'Metro', 'Add', 'formkit:add'],
      description: 'Healthcare provider variant identifying visual color theme and default branding',
    },
    name: { control: { type: 'text' }, description: 'Healthcare provider facility / insurance entity name' },
    patientName: { control: { type: 'text' }, description: 'Enrolled member / patient name' },
    cardNumber: { control: { type: 'text' }, description: 'Card membership identification number sequence' },
    onClick: { action: 'clicked', description: 'Callback triggered when card is clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Easecard>;

export const KIMSKingsway: Story = {
  name: 'KIMS Kingsway',
  args: {
    provider: 'KIMS',
    name: 'KIMS KINGSWAY',
    patientName: 'RUCHI BHEDA',
    cardNumber: '1 2 3   4 5 6   7 8 9 0',
  },
};

export const TataAIG: Story = {
  name: 'Tata AIG',
  args: {
    provider: 'Tata',
    name: 'TATA AIG',
    patientName: 'RUCHI BHEDA',
    cardNumber: '1 2 3   4 5 6   7 8 9 0',
  },
};

export const Metropolis: Story = {
  name: 'Metropolis',
  args: {
    provider: 'Metro',
    name: 'METROPOLIS',
    patientName: 'RUCHI BHEDA',
    cardNumber: '1 2 3   4 5 6   7 8 9 0',
  },
};

export const StackedCards: Story = {
  name: 'Stacked Membership Passes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', padding: '16px 0' }}>
      <Easecard
        provider="KIMS"
        name="KIMS KINGSWAY"
        patientName="RUCHI BHEDA"
        cardNumber="1 2 3   4 5 6   7 8 9 0"
      />
      <Easecard
        provider="Tata"
        name="TATA AIG"
        patientName="RUCHI BHEDA"
        cardNumber="1 2 3   4 5 6   7 8 9 0"
      />
      <Easecard
        provider="Metro"
        name="METROPOLIS"
        patientName="RUCHI BHEDA"
        cardNumber="1 2 3   4 5 6   7 8 9 0"
      />
    </div>
  ),
};

export const AddProvider: Story = {
  name: 'Add Health Card',
  args: {
    provider: 'Add',
    name: 'Add Health Card',
    type: 'Link another insurance or hospital pass',
  },
};
