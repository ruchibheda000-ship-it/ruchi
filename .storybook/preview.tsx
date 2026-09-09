import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';
import '../src/styles/theme.css';
import '../src/styles/docs.css';
import { DocTemplate } from './DocTemplate';

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

    // Determine specimen sizing and alignment from story parameters or intelligent defaults
    const previewParams = context.parameters?.preview || {};
    const title = context.title || '';
    const category = context.parameters?.figma?.category || '';

    let size = previewParams.size;
    if (!size) {
      if (
        title.includes('Input Field') ||
        title.includes('Password') ||
        title.includes('Home Button') ||
        title === 'Primitives & Inputs/Date' ||
        title.includes('All') ||
        category === 'Forms'
      ) {
        size = 'compact';
      } else if (
        title.includes('Doctors Swipe') ||
        title.includes('Navigation Menu') ||
        title.includes('AI Animation') ||
        title.includes('Frame 37')
      ) {
        size = 'spacious';
      } else {
        size = 'standard';
      }
    }

    let align = previewParams.align;
    if (!align) {
      if (
        title.includes('Input Field') ||
        title.includes('Password') ||
        category === 'Forms'
      ) {
        align = 'form';
      } else if (title.includes('Date')) {
        align = 'horizontal';
      } else {
        align = 'center';
      }
    }

    const sizeClass = `specimen-${size}`;
    const alignClass = `specimen-align-${align}`;

    if (theme === 'side-by-side') {
      return (
        <div className="theme-comparison-grid">
          {/* Light Theme Panel Specimen */}
          <div className="theme-specimen-panel" data-theme="light">
            <div className="theme-specimen-header">
              <span className="theme-specimen-title">
                <span className="theme-specimen-dot" />
                Light Theme
              </span>
            </div>
            <div className={`theme-specimen-content specimen-stage ${sizeClass} ${alignClass}`}>
              {align === 'form' ? (
                <div className="specimen-form-container">
                  <Story />
                </div>
              ) : (
                <Story />
              )}
            </div>
          </div>

          {/* Dark Theme Panel Specimen */}
          <div className="theme-specimen-panel panel-dark" data-theme="dark">
            <div className="theme-specimen-header">
              <span className="theme-specimen-title">
                <span className="theme-specimen-dot" />
                Dark Theme
              </span>
            </div>
            <div className={`theme-specimen-content specimen-stage ${sizeClass} ${alignClass}`}>
              {align === 'form' ? (
                <div className="specimen-form-container">
                  <Story />
                </div>
              ) : (
                <Story />
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        data-theme={theme}
        className={`specimen-stage ${sizeClass} ${alignClass}`}
      >
        {align === 'form' ? (
          <div className="specimen-form-container">
            <Story />
          </div>
        ) : (
          <Story />
        )}
      </div>
    );
  },
];

const preview: Preview = {
  globalTypes,
  decorators,
  parameters: {
    docs: {
      page: DocTemplate,
      toc: true,
    },
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
    viewport: {
      viewports: {
        mobileSmall: {
          name: 'Mobile Small',
          styles: { width: '320px', height: '568px' },
        },
        mobileLarge: {
          name: 'Mobile Large (iPhone 14)',
          styles: { width: '390px', height: '844px' },
        },
        tablet: {
          name: 'Tablet (iPad Mini)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop Standard',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Foundations & Tokens',
          ['Base Color Palette', 'Foundational Tokens'],
          'Primitives & Inputs',
          ['Input Field', 'Password', 'Navigation - Home Button', 'Date', 'Dates'],
          'Cards & Data Display',
          ['Card', 'Easecard', 'Doctors Swipe'],
          'Navigation & Layout',
          ['Frame 37', 'Navigation Menu', 'Menu', 'All'],
          'Feedback & Motion',
          ['AI Animation'],
        ],
      },
    },
  },
};

export default preview;
