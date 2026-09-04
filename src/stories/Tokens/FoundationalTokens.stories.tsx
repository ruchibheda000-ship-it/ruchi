import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

export const FoundationalTokensGallery: React.FC = () => {
  const radii = [
    { label: 'rounded-none', val: '0px' },
    { label: 'rounded-sm', val: '2px' },
    { label: 'rounded', val: '4px' },
    { label: 'rounded-md', val: '6px' },
    { label: 'rounded-lg', val: '8px' },
    { label: 'rounded-xl', val: '12px' },
    { label: 'rounded-2xl', val: '16px' },
    { label: 'rounded-3xl', val: '24px' },
    { label: 'rounded-full', val: '9999px' },
  ];

  const spacing = [
    { label: 'gap-1 / padding-1', val: '4px' },
    { label: 'gap-2 / padding-2', val: '8px' },
    { label: 'gap-3 / padding-3', val: '12px' },
    { label: 'gap-4 / padding-4', val: '16px' },
    { label: 'gap-6 / padding-6', val: '24px' },
    { label: 'gap-8 / padding-8', val: '32px' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '900px' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>Foundational Design Tokens</h2>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        Extracted directly from foundational-tokens.json mapped to Figma variable IDs.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '16px' }}>Border Radii</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
          {radii.map((item) => (
            <div
              key={item.label}
              style={{
                border: '1px solid #cbd5e1',
                padding: '16px',
                borderRadius: item.val,
                backgroundColor: '#f8fafc',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>{item.label}</span>
              <span style={{ fontSize: '12px', color: '#14b8a6', fontWeight: 'bold', marginTop: '4px' }}>
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '16px' }}>Spacing & Geometry Scales</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {spacing.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
              }}
            >
              <div
                style={{
                  width: item.val,
                  height: '24px',
                  backgroundColor: '#14b8a6',
                  borderRadius: '4px',
                }}
              />
              <div>
                <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>{item.label}</span>
                <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '12px' }}>{item.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensGallery> = {
  title: 'Tokens/Foundational Tokens',
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
