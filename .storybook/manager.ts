import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Anti-Gravity Design System',
  brandUrl: '/',
  brandTarget: '_self',

  // UI surfaces
  appBg: '#09090b',
  appContentBg: '#121215',
  appPreviewBg: '#09090b',
  appBorderColor: '#27272a',
  appBorderRadius: 8,

  // Typography & Text
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'monospace',
  textColor: '#f4f4f5',
  textInverseColor: '#09090b',
  textMutedColor: '#a1a1aa',

  // Top Toolbar & Tabs
  barTextColor: '#a1a1aa',
  barSelectedColor: '#2dd4bf',
  barHoverColor: '#ffffff',
  barBg: '#121215',

  // Controls & Inputs
  inputBg: '#18181b',
  inputBorder: '#27272a',
  inputTextColor: '#f4f4f5',
  inputBorderRadius: 6,

  // Brand Accents
  colorPrimary: '#14b8a6',
  colorSecondary: '#2dd4bf',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
});
