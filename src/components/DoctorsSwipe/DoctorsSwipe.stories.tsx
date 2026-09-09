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
      { property: 'border', token: '--uedp-border-black', value: '2px solid #000000', context: 'High-contrast card boundary stroke' },
      { property: 'border-radius', token: '--uedp-rounded-4xl', value: '32px', context: 'Doctor card outer curvature' },
      { property: 'background (Avatar)', token: '--uedp-doctor-avatar-bg', value: '#D1D7E0', context: 'Soft slate-blue physician avatar container fill' },
      { property: 'font-family', token: '--uedp-font-family', value: "'Lufga', 'Inter', sans-serif", context: 'Typography hierarchy typeface' },
      { property: 'border (Action Button)', token: '--uedp-border-black', value: '2px solid #000000', context: 'Circular appointment CTA button perimeter' },
    ],
    preview: {
      size: 'spacious',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Doctor appointment & discovery card from Figma (`❖ Card -1` / `Doctors Swipe`, ID: `12:3550`). Features crisp 2px solid black outline, 32px corner radius, physician avatar on slate-blue circle, Dr. Acharya specialty credentials, affiliated hospital, consultation schedule, and circular diagonal arrow CTA button.',
      },
    },
  },
  argTypes: {
    doctorName: { control: { type: 'text' }, description: 'Doctor full name with title' },
    specialty: { control: { type: 'text' }, description: 'Doctor medical specialty or field' },
    hospital: { control: { type: 'text' }, description: 'Associated hospital or clinical institution' },
    availability: { control: { type: 'text' }, description: 'Weekly availability schedule days' },
    hours: { control: { type: 'text' }, description: 'Consultation schedule timing range' },
    avatarUrl: { control: { type: 'text' }, description: 'Optional external image URL for doctor avatar' },
    onSelectDoctor: { action: 'selectedDoctor', description: 'Callback fired when doctor card is clicked' },
    onAction: { action: 'actionClicked', description: 'Callback fired when circular CTA button is clicked' },
    variant: {
      control: { type: 'select' },
      options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5', 'Selected'],
      description: 'Preserved cycle state variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DoctorsSwipe>;

export const DrAcharya: Story = {
  name: 'Dr. Acharya (Figma ❖ Card -1)',
  args: {
    doctorName: 'Dr. Acharya',
    specialty: 'Nephrologist',
    hospital: 'KIMS Kingsway Hospital',
    availability: 'Available on week days',
    hours: '10:00 AM - 01:00 PM',
  },
};

export const DrSarahJenkins: Story = {
  name: 'Dr. Sarah Jenkins (Cardiology)',
  args: {
    doctorName: 'Dr. Sarah Jenkins',
    specialty: 'Cardiologist',
    hospital: 'Apollo Hospitals City Centre',
    availability: 'Available Mon - Sat',
    hours: '09:00 AM - 12:00 PM',
  },
};

export const CustomAvatar: Story = {
  name: 'With Photo Avatar',
  args: {
    doctorName: 'Dr. Emily Watson',
    specialty: 'Pediatric Specialist',
    hospital: 'Memorial Childrens Hospital',
    availability: 'Available on weekends',
    hours: '11:00 AM - 03:00 PM',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
  },
};
