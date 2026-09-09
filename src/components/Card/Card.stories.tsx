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
      { property: 'border-radius', token: '--uedp-rounded-3xl', value: '24px', context: 'Outer container corner radius' },
      { property: 'background', token: '--uedp-base-white', value: '#FFFFFF / #18181B', context: 'Surface background (adaptive in dark mode)' },
      { property: 'accent / badge', token: '--uedp-teal-500', value: '#14B8A6', context: 'Confirmed booking status indicator' },
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
