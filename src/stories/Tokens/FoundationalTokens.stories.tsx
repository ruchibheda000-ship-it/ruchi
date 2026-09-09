import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

export const FoundationalTokensGallery: React.FC = () => {
  const radii = [
    { label: 'rounded-none', val: '0px', varName: '--uedp-rounded-none' },
    { label: 'rounded-sm', val: '2px', varName: '--uedp-rounded-sm' },
    { label: 'rounded', val: '4px', varName: '--uedp-rounded' },
    { label: 'rounded-md', val: '6px', varName: '--uedp-rounded-md' },
    { label: 'rounded-lg', val: '8px', varName: '--uedp-rounded-lg' },
    { label: 'rounded-xl', val: '12px', varName: '--uedp-rounded-xl' },
    { label: 'rounded-2xl', val: '16px', varName: '--uedp-rounded-2xl' },
    { label: 'rounded-3xl', val: '24px', varName: '--uedp-rounded-3xl' },
    { label: 'rounded-full', val: '9999px', varName: '--uedp-rounded-full' },
  ];

  const spacing = [
    { label: 'gap-1 / padding-1', val: '4px', varName: '--uedp-gap-1' },
    { label: 'gap-2 / padding-2', val: '8px', varName: '--uedp-gap-2' },
    { label: 'gap-3 / padding-3', val: '12px', varName: '--uedp-gap-3' },
    { label: 'gap-4 / padding-4', val: '16px', varName: '--uedp-gap-4' },
    { label: 'gap-6 / padding-6', val: '24px', varName: '--uedp-gap-6' },
    { label: 'gap-8 / padding-8', val: '32px', varName: '--uedp-gap-8' },
  ];

  return (
    <div className="doc-page-container" style={{ padding: '8px 0' }}>
      <div className="doc-page-header">
        <h1 className="doc-page-title">Foundational Tokens</h1>
        <p className="doc-page-description">
          System-wide geometric primitives, border radii, and spacing scales extracted from foundational Figma design tokens. These tokens define spatial rhythm, boundary curvatures, and component density.
        </p>
        <div className="doc-meta-row">
          <span className="doc-meta-item">
            <span className="doc-meta-label">Category:</span>
            <span className="doc-meta-badge">Foundations & Tokens</span>
          </span>
          <span className="doc-meta-item">
            <span className="doc-meta-label">Source:</span>
            <code className="doc-meta-code">foundational-tokens.json</code>
          </span>
          <span className="doc-meta-item">
            <span className="doc-meta-label">Status:</span>
            <span className="doc-meta-badge status-stable">Active Foundation</span>
          </span>
        </div>
      </div>

      <div className="token-arch-grid">
        <div className="token-arch-card">
          <div className="token-arch-title">Curvature Scale (Radii)</div>
          <p className="token-arch-desc">Progressive rounding hierarchy promoting an approachable clinical feel, from 12px input controls to 24px healthcare consultation cards and 9999px pill capsules.</p>
        </div>
        <div className="token-arch-card">
          <div className="token-arch-title">Layout & Spacing Grid</div>
          <p className="token-arch-desc">4px baseline incremental scale establishing harmonic vertical rhythm, internal button padding, and multi-component grid gaps.</p>
        </div>
      </div>

      <div className="token-gallery-wrapper">
        <div className="token-family-section">
          <h3 className="token-family-title">
            Border Radii
            <span className="token-family-count">{radii.length} scales</span>
          </h3>
          <div className="token-specimen-grid">
            {radii.map((item) => (
              <div
                key={item.label}
                className="token-specimen-card"
                style={{ borderRadius: item.val }}
              >
                <span className="token-specimen-label">{item.label}</span>
                <span className="token-specimen-val">{item.val}</span>
                <code style={{ fontSize: '10px', color: 'var(--theme-text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{item.varName}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="token-family-section">
          <h3 className="token-family-title">
            Spacing & Geometry Scales
            <span className="token-family-count">{spacing.length} scales</span>
          </h3>
          <div className="token-spacing-list">
            {spacing.map((item) => (
              <div key={item.label} className="token-spacing-row">
                <div
                  className="token-spacing-bar"
                  style={{ width: item.val }}
                />
                <div className="token-spacing-meta">
                  <span className="token-spacing-label">{item.label}</span>
                  <span className="token-spacing-val">{item.val}</span>
                  <code style={{ fontSize: '11px', color: 'var(--theme-text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{item.varName}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensGallery> = {
  title: 'Foundations & Tokens/Foundational Tokens',
  component: FoundationalTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Foundational border radii, spacing, and geometry tokens gallery from Figma JSON.',
      },
    },
  },
};

export default meta;

export const FoundationalGallery: StoryObj<typeof FoundationalTokensGallery> = {};
