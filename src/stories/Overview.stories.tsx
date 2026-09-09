import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const OverviewPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '16px 8px', color: 'var(--theme-text-primary, #0f172a)' }}>
      {/* Hero Header */}
      <div style={{ borderBottom: '1px solid var(--theme-border, #e2e8f0)', paddingBottom: '32px', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '9999px', background: 'rgba(20, 184, 166, 0.1)', color: '#0f766e', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Anti-Gravity Design System v1.0
        </div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0', lineHeight: 1.15 }}>
          Design System & Component Library
        </h1>
        <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--theme-text-secondary, #475569)', maxWidth: '780px', margin: 0 }}>
          The single source of truth for the Anti-Gravity application interface. Bridges Figma design tokens directly to React components with verified token bindings, multi-theme support, and live interactive state inspection.
        </p>
      </div>

      {/* Quick Architecture Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
        <div style={{ border: '1px solid var(--theme-border, #e2e8f0)', borderRadius: '14px', padding: '24px', background: 'var(--theme-bg-surface, #ffffff)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>🎨</div>
          <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Design Tokens</h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--theme-text-secondary, #64748b)', margin: 0 }}>
            Extracted directly from Figma token variables. Supports base palettes, foundational scales (spacing, radius, typography), and semantic theme bindings.
          </p>
        </div>

        <div style={{ border: '1px solid var(--theme-border, #e2e8f0)', borderRadius: '14px', padding: '24px', background: 'var(--theme-bg-surface, #ffffff)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>🌗</div>
          <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Light & Dark Themes</h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--theme-text-secondary, #64748b)', margin: 0 }}>
            Seamless contrast and color switching via <code>data-theme="light"</code> and <code>data-theme="dark"</code> with side-by-side verification tools.
          </p>
        </div>

        <div style={{ border: '1px solid var(--theme-border, #e2e8f0)', borderRadius: '14px', padding: '24px', background: 'var(--theme-bg-surface, #ffffff)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>📐</div>
          <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Figma Synchronization</h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--theme-text-secondary, #64748b)', margin: 0 }}>
            Every component tracks its exact Figma canvas Node ID and preserved layer name, making design-to-code traceability effortless.
          </p>
        </div>
      </div>

      {/* Component Organization Section */}
      <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
        Component Catalog Breakdown
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '48px' }}>
        <div style={{ padding: '16px 20px', borderRadius: '10px', background: 'var(--theme-bg-surface-subtle, #f8fafc)', border: '1px solid var(--theme-border, #e2e8f0)' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f766e', marginBottom: '6px' }}>
            Primitives & Inputs
          </div>
          <div style={{ fontSize: '13px', color: 'var(--theme-text-secondary, #64748b)' }}>
            Input Field, Password, Navigation Home Button, Date, Dates
          </div>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: '10px', background: 'var(--theme-bg-surface-subtle, #f8fafc)', border: '1px solid var(--theme-border, #e2e8f0)' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f766e', marginBottom: '6px' }}>
            Cards & Data Display
          </div>
          <div style={{ fontSize: '13px', color: 'var(--theme-text-secondary, #64748b)' }}>
            General Health Card, Easecard, Doctors Swipe
          </div>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: '10px', background: 'var(--theme-bg-surface-subtle, #f8fafc)', border: '1px solid var(--theme-border, #e2e8f0)' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f766e', marginBottom: '6px' }}>
            Navigation & Layout
          </div>
          <div style={{ fontSize: '13px', color: 'var(--theme-text-secondary, #64748b)' }}>
            Frame 37 Top Bar, Navigation Menu, Action Menu, All Pill
          </div>
        </div>

        <div style={{ padding: '16px 20px', borderRadius: '10px', background: 'var(--theme-bg-surface-subtle, #f8fafc)', border: '1px solid var(--theme-border, #e2e8f0)' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f766e', marginBottom: '6px' }}>
            Feedback & Motion
          </div>
          <div style={{ fontSize: '13px', color: 'var(--theme-text-secondary, #64748b)' }}>
            AI Animation & Pulsing Status
          </div>
        </div>
      </div>

      {/* Usage Tips */}
      <div style={{ background: 'var(--theme-bg-surface-subtle, #f8fafc)', border: '1px solid var(--theme-border, #e2e8f0)', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 8px 0' }}>💡 Navigating the Documentation</h3>
        <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--theme-text-secondary, #64748b)', margin: 0 }}>
          Use the top toolbar to switch between <strong>Light Mode</strong>, <strong>Dark Mode</strong>, or <strong>Side-by-Side</strong> comparison. Each component page provides a live interactive playground, property controls, variant state matrix, and bound design token specifications.
        </p>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Overview',
  component: OverviewPage,
  parameters: {
    docs: {
      description: {
        component: 'Welcome to the Anti-Gravity Design System documentation.',
      },
    },
  },
};

export default meta;

export const Introduction: StoryObj = {};
