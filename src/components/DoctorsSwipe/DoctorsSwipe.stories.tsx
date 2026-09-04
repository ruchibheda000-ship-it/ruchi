import type { Meta, StoryObj } from '@storybook/react';
import { DoctorsSwipe } from './DoctorsSwipe';

const meta: Meta<typeof DoctorsSwipe> = {
  title: 'Design System/Doctors Swipe',
  component: DoctorsSwipe,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Doctors Swipe\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`12:3550\` / \`9:4969\` |
| **Preserved Layer Name** | \`Doctors Swipe\` |
| **Variant Property** | \`Property 1\` (\`Default\` \| \`Variant2\` \| \`Variant3\` \| \`Variant4\` \| \`Variant5\` \| \`Selected\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-3xl\`, \`--uedp-slate-900\` |

Swipe doctor card component preserving Figma node \`12:3550\`.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5', 'Selected'],
      description: 'Figma component variant state',
    },
    doctorName: { control: { type: 'text' } },
    specialty: { control: { type: 'text' } },
    rating: { control: { type: 'number', min: 1, max: 5, step: 0.1 } },
    promptText: { control: { type: 'text' } },
    onSelectDoctor: { action: 'selectedDoctor' },
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
