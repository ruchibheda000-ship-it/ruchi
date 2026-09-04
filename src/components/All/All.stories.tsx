import type { Meta, StoryObj } from '@storybook/react';
import { AllComponent } from './All';

const meta: Meta<typeof AllComponent> = {
  title: 'Design System/All',
  component: AllComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`All\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`12:3547\` |
| **Preserved Layer Name** | \`All\` |
| **Variant Property** | \`Property 1\` (\`Default\` \| \`Not Selected\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-full\` |

Category tag filter pill preserving Figma node \`12:3547\`.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Not Selected'],
      description: 'Figma component state variant',
    },
    label: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
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
