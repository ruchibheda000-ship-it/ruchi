import type { Meta, StoryObj } from '@storybook/react';
import { Password } from './Password';

const meta: Meta<typeof Password> = {
  title: 'Design System/Password',
  component: Password,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Password\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`12:3538\` |
| **Preserved Layer Name** | \`Password\` |
| **Variant Property** | \`State\` (\`Default\` \| \`Error\` \| \`Pressed\` \| \`Filled\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-red-500\`, \`--uedp-rounded-xl\` |

Preserved password component set preserving Figma node \`12:3538\`.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Error', 'Pressed', 'Filled'],
      description: 'Figma component state variant',
    },
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    onChange: { action: 'valueChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof Password>;

export const Default: Story = {
  args: {
    state: 'Default',
    label: 'Password',
  },
};

export const Filled: Story = {
  args: {
    state: 'Filled',
    label: 'Password',
    value: 'SuperSecret123!',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Password',
    value: '123',
    errorMessage: 'Password must be at least 8 characters',
  },
};
