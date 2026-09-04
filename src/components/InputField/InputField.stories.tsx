import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Design System/Input Field',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specification: \`Input Field\`

| Attribute | Details |
| :--- | :--- |
| **Figma Node ID** | \`12:3542\` |
| **Preserved Layer Name** | \`Input Field\` |
| **Variant Property** | \`State\` (\`Input Field - Status\` \| \`Entered\` \| \`Error\` \| \`Variant4\`) |
| **Bound CSS Tokens** | \`--uedp-teal-500\`, \`--uedp-red-500\`, \`--uedp-rounded-xl\` |

Form text input component set preserving Figma node \`12:3542\`.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Input Field - Status', 'Entered', 'Error', 'Variant4'],
      description: 'Figma component variant state',
    },
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    onChange: { action: 'valueChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const DefaultStatus: Story = {
  args: {
    state: 'Input Field - Status',
    label: 'Full Name',
    placeholder: 'Enter full name...',
  },
};

export const Entered: Story = {
  args: {
    state: 'Entered',
    label: 'Full Name',
    value: 'Jane Doe',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    label: 'Full Name',
    value: 'Invalid Name!',
    errorMessage: 'Please enter a valid full name',
  },
};
