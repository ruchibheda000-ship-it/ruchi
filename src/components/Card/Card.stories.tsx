import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Cards & Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    figma: {
      nodeId: '9:7795',
      layerName: 'Card',
      category: 'Cards & Data Display',
      status: 'Stable',
    },
    designTokens: [
      { property: 'background', token: '--uedp-amber-100', value: '#FFEDD5', context: 'Warm amber consultation card surface' },
      { property: 'border-color', token: '--uedp-amber-200', value: '#FDE68A', context: 'Subtle container perimeter stroke' },
      { property: 'text-color (Title)', token: '--uedp-zinc-900', value: '#18181B', context: 'High-contrast consultation header typography' },
      { property: 'text-color (Subtitle)', token: '--uedp-zinc-500', value: '#71717A', context: 'Healthcare facility and clinic name' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Primary healthcare consultation card displaying medical specialty, appointment date/time, clinic location, and booking confirmation status.',
      },
    },
  },
  argTypes: {
    title: { control: { type: 'text' }, description: 'Primary consultation heading' },
    subtitle: { control: { type: 'text' }, description: 'Clinic or healthcare facility name' },
    date: { control: { type: 'text' }, description: 'Appointment date string' },
    time: { control: { type: 'text' }, description: 'Appointment scheduled time' },
    location: { control: { type: 'text' }, description: 'Room, wing, or building location' },
    status: {
      control: { type: 'select' },
      options: ['Confirmed', 'Pending', 'Completed'],
      description: 'Current consultation booking state',
    },
    onClick: { action: 'clicked', description: 'Callback fired on card interaction' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Confirmed: Story = {
  args: {
    title: 'General Health Consultation',
    subtitle: 'Apollo Healthcare Hub',
    date: 'Thu, 24 Aug',
    time: '10:30 AM',
    location: 'Building B, Room 402',
    status: 'Confirmed',
  },
};

export const Pending: Story = {
  args: {
    title: 'Cardiology Checkup',
    subtitle: 'KIMS Specialty Hospital',
    date: 'Fri, 25 Aug',
    time: '02:00 PM',
    location: 'Tower A, Level 3',
    status: 'Pending',
  },
};
