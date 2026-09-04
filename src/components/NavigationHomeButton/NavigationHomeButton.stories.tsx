import type { Meta, StoryObj } from '@storybook/react';
import { NavigationHomeButton } from './NavigationHomeButton';

const meta: Meta<typeof NavigationHomeButton> = {
  title: 'Design System/Navigation - Home Button',
  component: NavigationHomeButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Navigation - Home Button\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`8:4123\` |
| **Preserved Layer Name** | \`Navigation - Home Button\` |
| **Variant Property** | \`State\` (\`Selected\` \| \`As is\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-2xl\`, \`--uedp-base-white\` |
| **Unbound Properties** | \`padding: 10px 20px\`, \`font-size: 14px\`, \`font-weight: 600\` |

This component is derived directly from the Figma design canvas matching layer ID \`8:4123\`.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Selected', 'As is'],
      description: 'Figma component variant state',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text label',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationHomeButton>;

export const Default: Story = {
  args: {
    state: 'As is',
    label: 'Home',
  },
};

export const Selected: Story = {
  args: {
    state: 'Selected',
    label: 'Home',
  },
};
