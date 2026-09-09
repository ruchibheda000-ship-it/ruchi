import React from 'react';

export interface ComponentHeaderProps {
  title: string;
  category: string;
  description: string;
  figmaNodeId?: string;
  status?: string;
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  title,
  category,
  description,
  figmaNodeId,
  status = 'Stable',
}) => {
  return (
    <div className="doc-header" style={{ marginBottom: '32px' }}>
      <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 700, letterSpacing: '-0.025em' }}>
        {title}
      </h1>
      <p style={{ margin: '0 0 16px 0', fontSize: '15px', lineHeight: 1.6, color: 'var(--theme-text-secondary, #64748b)' }}>
        {description}
      </p>
      <div className="doc-badges">
        <span className="doc-badge doc-badge-category">{category}</span>
        <span className="doc-badge doc-badge-status">● {status}</span>
        {figmaNodeId && (
          <span className="doc-badge doc-badge-figma">
            Figma Node: {figmaNodeId}
          </span>
        )}
      </div>
    </div>
  );
};

export interface TokenBinding {
  property: string;
  token: string;
  resolvedValue?: string;
  notes?: string;
}

export interface TokenBindingTableProps {
  tokens: TokenBinding[];
  layerName?: string;
}

export const TokenBindingTable: React.FC<TokenBindingTableProps> = ({ tokens, layerName }) => {
  return (
    <div className="doc-card">
      <div className="doc-card-title">
        <span>🎨 Design Token Bindings</span>
        {layerName && (
          <span style={{ marginLeft: 'auto', fontWeight: 400, textTransform: 'none', fontFamily: 'monospace' }}>
            Layer: <code>{layerName}</code>
          </span>
        )}
      </div>
      <table className="doc-table">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>CSS Property</th>
            <th style={{ width: '35%' }}>Bound Token</th>
            <th style={{ width: '20%' }}>Resolved Value</th>
            <th style={{ width: '20%' }}>Context</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((item, index) => (
            <tr key={index}>
              <td>
                <strong style={{ fontFamily: 'monospace', fontSize: '12px' }}>{item.property}</strong>
              </td>
              <td>
                <span className="token-chip">
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRadius: '2px',
                      backgroundColor: `var(${item.token}, #14b8a6)`,
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  />
                  <code>{item.token}</code>
                </span>
              </td>
              <td>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--theme-text-muted, #64748b)' }}>
                  {item.resolvedValue || 'Calculated via theme'}
                </span>
              </td>
              <td style={{ fontSize: '12px', color: 'var(--theme-text-secondary, #475569)' }}>
                {item.notes || 'Automatic theme sync'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export interface VariantCardProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const VariantCard: React.FC<VariantCardProps> = ({ label, description, children }) => {
  return (
    <div
      style={{
        border: '1px solid var(--theme-border, #e2e8f0)',
        borderRadius: '12px',
        background: 'var(--theme-bg-surface, #ffffff)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--theme-text-primary, #0f172a)' }}>
          {label}
        </span>
        {description && (
          <span style={{ fontSize: '11px', color: 'var(--theme-text-muted, #94a3b8)' }}>
            {description}
          </span>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
          background: 'var(--theme-bg-surface-subtle, #f8fafc)',
          borderRadius: '8px',
          minHeight: '80px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const VariantsGallery: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        margin: '20px 0 32px 0',
      }}
    >
      {children}
    </div>
  );
};
