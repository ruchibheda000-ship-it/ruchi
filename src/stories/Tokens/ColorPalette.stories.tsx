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
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '900px' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>Base Color Palette Design Tokens</h2>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        Extracted directly from <code>base-palette-tokens.json</code> mapped to Figma <code>com.figma.variableId</code>.
      </p>

      {families.map((family) => (
        <div key={family.name} style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '16px' }}>{family.name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
            {family.shades.map((shade) => (
              <div
                key={shade.varName}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    height: '64px',
                    backgroundColor: `var(${shade.varName}, ${shade.hex})`,
                    borderBottom: '1px solid #f1f5f9',
                  }}
                />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', color: '#0f172a' }}>{shade.label}</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace', marginTop: '2px' }}>
                    {shade.varName}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{shade.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/Base Color Palette',
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
