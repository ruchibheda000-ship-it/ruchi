import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Tokens', ['Base Color Palette', 'Foundational Tokens'], 'Design System'],
      },
    },
  },
};

export default preview;
