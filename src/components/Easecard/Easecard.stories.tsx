import type { Meta, StoryObj } from '@storybook/react';
import { Easecard } from './Easecard';

const meta: Meta<typeof Easecard> = {
  title: 'Design System/Easecard',
  component: Easecard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Easecard\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`9:7343\` |
| **Preserved Layer Name** | \`Easecard\` |
| **Variant Property** | \`Property 1\` (\`KIMS\` \| \`Tata\` \| \`Metro\` \| \`Add\` \| \`formkit:add\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-rounded-2xl\`, \`--uedp-slate-900\` |

Hospital network provider card component preserving Figma node \`9:7343\`.
        `,
      },
    },
  },
  argTypes: {
    provider: {
      control: { type: 'select' },
      options: ['KIMS', 'Tata', 'Metro', 'Add', 'formkit:add'],
      description: 'Figma component variant provider',
    },
    name: { control: { type: 'text' } },
    type: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
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
