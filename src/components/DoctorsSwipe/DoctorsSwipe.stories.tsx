import type { Meta, StoryObj } from '@storybook/react';
import { DoctorsSwipe } from './DoctorsSwipe';

const meta: Meta<typeof DoctorsSwipe> = {
  title: 'Cards & Data Display/Doctors Swipe',
  component: DoctorsSwipe,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '12:3550',
      layerName: 'Doctors Swipe',
      category: 'Cards & Data Display',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border-radius', token: '--uedp-rounded-3xl', value: '24px', context: 'Doctor card outer curvature' },
      { property: 'background (Score Badge)', token: '--uedp-amber-100', value: '#FFEDD5', context: 'Patient rating pill surface' },
      { property: 'text-color (Header)', token: '--uedp-zinc-900', value: '#18181B', context: 'Physician title typography and controls' },
      { property: 'border-color', token: '--uedp-slate-100', value: '#F1F5F9', context: 'Card perimeter outline stroke' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Interactive practitioner discovery card presenting doctor credentials, experience badges, patient review ratings, and quick query inputs.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5', 'Selected'],
      description: 'Swipe cycle state of the doctor preview card',
    },
    doctorName: { control: { type: 'text' }, description: 'Doctor full name with title' },
    specialty: { control: { type: 'text' }, description: 'Specialty field and experience duration' },
    rating: { control: { type: 'number', min: 1, max: 5, step: 0.1 }, description: 'Aggregated review rating (1.0 - 5.0)' },
    promptText: { control: { type: 'text' }, description: 'Interactive chat question prompt placeholder or input' },
    onSelectDoctor: { action: 'selectedDoctor', description: 'Callback fired when doctor is selected' },
  },
};

export default meta;
type Story = StoryObj<typeof DoctorsSwipe>;

export const Default: Story = {
  args: {
    variant: 'Default',
    doctorName: 'Dr. Sarah Jenkins',
    specialty: 'Cardiologist • 12 Yrs Exp',
    rating: 4.9,
    promptText: 'Ask anything...',
  },
};

export const Selected: Story = {
  args: {
    variant: 'Selected',
    doctorName: 'Dr. Marcus Vance',
    specialty: 'Neurologist • 15 Yrs Exp',
    rating: 5.0,
    promptText: 'What|',
  },
};
