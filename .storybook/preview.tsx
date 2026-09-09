import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';
import '../src/styles/theme.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch between Light Mode, Dark Mode, or Side-by-Side comparison',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'sun', title: 'Light Mode' },
        { value: 'dark', icon: 'moon', title: 'Dark Mode' },
        { value: 'side-by-side', icon: 'sidebyside', title: 'Side by Side' },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story: any, context: any) => {
    const theme = context.globals.theme || 'light';

    useEffect(() => {
      const root = document.documentElement;
      if (theme === 'side-by-side') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', theme);
      }
    }, [theme]);

    if (theme === 'side-by-side') {
      return (
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            width: '100%',
            boxSizing: 'border-box',
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}
        >
          {/* Light Theme Panel */}
          <div
            data-theme="light"
            style={{
              flex: '1 1 360px',
              backgroundColor: '#f8fafc',
              color: '#0f172a',
              padding: '32px 24px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#475569',
                padding: '4px 12px',
                background: '#ffffff',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                alignSelf: 'flex-start',
              }}
            >
              ☀️ Light Theme
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                minHeight: '120px',
              }}
            >
              <Story />
            </div>
          </div>

          {/* Dark Theme Panel */}
          <div
            data-theme="dark"
            style={{
              flex: '1 1 360px',
              backgroundColor: '#09090b',
              color: '#f4f4f5',
              padding: '32px 24px',
              borderRadius: '16px',
              border: '1px solid #27272a',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#2dd4bf',
                padding: '4px 12px',
                background: '#18181b',
                borderRadius: '9999px',
                border: '1px solid #27272a',
                alignSelf: 'flex-start',
              }}
            >
              🌙 Dark Theme
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                minHeight: '120px',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      );
    }

    const isDark = theme === 'dark';
    return (
      <div
        data-theme={theme}
        style={{
          minHeight: '100%',
          width: '100%',
          backgroundColor: isDark ? '#09090b' : '#f8fafc',
          color: isDark ? '#f4f4f5' : '#0f172a',
          padding: '24px',
          boxSizing: 'border-box',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    );
  },
];

const preview: Preview = {
  globalTypes,
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#09090b' },
        { name: 'white', value: '#ffffff' },
        { name: 'slate', value: '#0f172a' },
      ],
    },
    options: {
      storySort: {
        order: ['Tokens', ['Base Color Palette', 'Foundational Tokens'], 'Design System'],
      },
    },
  },
};

export default preview;
