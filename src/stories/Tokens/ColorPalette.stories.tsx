import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const ColorSwatchGallery: React.FC = () => {
  const families = [
    {
      name: 'Slate',
      shades: [
        { label: '50', varName: '--uedp-slate-50', hex: '#F8FAFC' },
        { label: '100', varName: '--uedp-slate-100', hex: '#F1F5F9' },
        { label: '200', varName: '--uedp-slate-200', hex: '#E2E8F0' },
        { label: '300', varName: '--uedp-slate-300', hex: '#CBD5E1' },
        { label: '400', varName: '--uedp-slate-400', hex: '#94A3B8' },
        { label: '500', varName: '--uedp-slate-500', hex: '#64748B' },
        { label: '600', varName: '--uedp-slate-600', hex: '#475569' },
        { label: '700', varName: '--uedp-slate-700', hex: '#334155' },
        { label: '800', varName: '--uedp-slate-800', hex: '#1E293B' },
        { label: '900', varName: '--uedp-slate-900', hex: '#0F172A' },
      ],
    },
    {
      name: 'Teal & Emerald',
      shades: [
        { label: '50', varName: '--uedp-teal-50', hex: '#F0FDFA' },
        { label: '100', varName: '--uedp-teal-100', hex: '#CCFBF1' },
        { label: '300', varName: '--uedp-teal-300', hex: '#5EEAD4' },
        { label: '500', varName: '--uedp-teal-500', hex: '#14B8A6' },
        { label: '700', varName: '--uedp-teal-700', hex: '#0F766E' },
        { label: '900', varName: '--uedp-teal-900', hex: '#134E4A' },
      ],
    },
    {
      name: 'Gray & Zinc',
      shades: [
        { label: '100', varName: '--uedp-gray-100', hex: '#F3F4F6' },
        { label: '300', varName: '--uedp-gray-300', hex: '#D1D5DB' },
        { label: '500', varName: '--uedp-gray-500', hex: '#6B7280' },
        { label: '700', varName: '--uedp-gray-700', hex: '#374151' },
        { label: '900', varName: '--uedp-gray-900', hex: '#111827' },
      ],
    },
    {
      name: 'Base Neutrals',
      shades: [
        { label: 'Black', varName: '--uedp-base-black', hex: '#000000' },
        { label: 'White', varName: '--uedp-base-white', hex: '#FFFFFF' },
      ],
    },
  ];

  return (
    <div className="doc-page-container" style={{ padding: '8px 0' }}>
      <div className="doc-page-header">
        <h1 className="doc-page-title">Base Color Palette</h1>
        <p className="doc-page-description">
          Core foundational color families and tint scales extracted directly from Figma design variables. These tokens form the visual baseline for all healthcare component surfaces, textual hierarchies, and interactive states.
        </p>
        <div className="doc-meta-row">
          <span className="doc-meta-item">
            <span className="doc-meta-label">Category:</span>
            <span className="doc-meta-badge">Foundations & Tokens</span>
          </span>
          <span className="doc-meta-item">
            <span className="doc-meta-label">Source:</span>
            <code className="doc-meta-code">base-palette-tokens.json</code>
          </span>
          <span className="doc-meta-item">
            <span className="doc-meta-label">Status:</span>
            <span className="doc-meta-badge status-stable">Active Foundation</span>
          </span>
        </div>
      </div>

      <div className="token-arch-grid">
        <div className="token-arch-card">
          <div className="token-arch-title">Neutral Hierarchy (Slate)</div>
          <p className="token-arch-desc">Governs primary body text, muted secondary labels, and structural dividing borders with rigorous contrast ratios.</p>
        </div>
        <div className="token-arch-card">
          <div className="token-arch-title">Clinical Accent (Teal)</div>
          <p className="token-arch-desc">Signature healthcare color for primary action triggers, active navigation indicators, and verified provider badges.</p>
        </div>
        <div className="token-arch-card">
          <div className="token-arch-title">Secondary Scale (Zinc)</div>
          <p className="token-arch-desc">Provides subdued background fills, disabled states, and dark mode surface adaptations.</p>
        </div>
        <div className="token-arch-card">
          <div className="token-arch-title">Base Neutrals</div>
          <p className="token-arch-desc">Foundational anchor values (pure white and absolute black) serving high-contrast viewport boundaries.</p>
        </div>
      </div>

      <div className="token-gallery-wrapper">
        {families.map((family) => (
          <div key={family.name} className="token-family-section">
            <h3 className="token-family-title">
              {family.name}
              <span className="token-family-count">{family.shades.length} tints</span>
            </h3>
            <div className="token-swatch-grid">
              {family.shades.map((shade) => (
                <div key={shade.varName} className="token-swatch-card">
                  <div
                    className="token-swatch-rect"
                    style={{
                      backgroundColor: `var(${shade.varName}, ${shade.hex})`,
                    }}
                  />
                  <div className="token-swatch-body">
                    <span className="token-swatch-label">{shade.label}</span>
                    <span className="token-swatch-var">{shade.varName}</span>
                    <span className="token-swatch-hex">{shade.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations & Tokens/Base Color Palette',
  component: ColorSwatchGallery,
  parameters: {
    docs: {
      description: {
        component: 'Base palette swatches generated from local Figma tokens JSON file.',
      },
    },
  },
};

export default meta;

export const PaletteGallery: StoryObj = {};
