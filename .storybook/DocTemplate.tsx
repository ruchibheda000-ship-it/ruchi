import React, { useContext } from 'react';
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
  Source,
  DocsContext,
} from '@storybook/blocks';

export const DocTemplate: React.FC = () => {
  const context = useContext(DocsContext);
  const primaryStory = context?.primaryStory || context?.componentStories?.()?.[0];
  const parameters = primaryStory?.parameters || {};
  const figma = parameters.figma;
  const designTokens = parameters.designTokens;

  const stories = context?.componentStories?.() || [];

  return (
    <div className="doc-page-container">
      {/* 1. Component Name (Strongest element) */}
      <Title />

      {/* 2. Short Description */}
      <Description />

      {/* 3. Documentation Metadata (Visually secondary) */}
      {figma && (
        <div className="doc-meta-row">
          {figma.category && (
            <span className="doc-meta-item">
              <span className="doc-meta-label">Category:</span>
              <span className="doc-meta-badge">{figma.category}</span>
            </span>
          )}
          {figma.status && (
            <span className="doc-meta-item">
              <span className="doc-meta-label">Status:</span>
              <span className="doc-meta-badge status-stable">{figma.status}</span>
            </span>
          )}
          {figma.nodeId && (
            <span className="doc-meta-item">
              <span className="doc-meta-label">Figma Node:</span>
              <code className="doc-meta-code">{figma.nodeId}</code>
            </span>
          )}
          {figma.layerName && (
            <span className="doc-meta-item">
              <span className="doc-meta-label">Layer:</span>
              <code className="doc-meta-code">{figma.layerName}</code>
            </span>
          )}
        </div>
      )}

      {/* 4. Component Preview */}
      <section className="doc-section">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Preview</h2>
          <p className="doc-section-subtitle">Interactive component canvas with live props inspection.</p>
        </div>

        {/* Editorial Variant Metadata List */}
        {stories.length > 1 && (
          <div className="doc-variants-metadata">
            <span className="doc-variants-label">Variants</span>
            <div className="doc-variants-list">
              {stories.map((s: any, idx: number) => {
                const isPrimary = s.id === primaryStory?.id;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`doc-variant-link ${isPrimary ? 'is-active' : ''}`}
                    title={`View ${s.name} variant`}
                    onClick={() => {
                      const el = document.getElementById(s.id) || document.querySelector(`[id*="${s.id}"]`);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                  >
                    <span className="doc-variant-indicator" />
                    <span className="doc-variant-name">{s.name || `Variant ${idx + 1}`}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <Primary />
      </section>

      {/* 5. Properties / API */}
      <section className="doc-section">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Properties & API</h2>
          <p className="doc-section-subtitle">Configurable props, callbacks, and available options.</p>
        </div>
        <Controls />
      </section>

      {/* 6. Design Tokens */}
      {designTokens && designTokens.length > 0 && (
        <section className="doc-section">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Design Tokens</h2>
            <p className="doc-section-subtitle">Figma token variables bound to this component.</p>
          </div>
          <div className="doc-token-table-wrapper">
            <table className="doc-token-table">
              <thead>
                <tr>
                  <th>CSS Property</th>
                  <th>Bound Token</th>
                  <th>Value</th>
                  <th>Context</th>
                </tr>
              </thead>
              <tbody>
                {designTokens.map((t: any, i: number) => (
                  <tr key={i}>
                    <td><code>{t.property}</code></td>
                    <td>
                      <span className="token-chip">
                        <span
                          className="token-swatch"
                          style={{ backgroundColor: `var(${t.token}, #14b8a6)` }}
                        />
                        <code>{t.token}</code>
                      </span>
                    </td>
                    <td><span className="token-val">{t.value || 'Theme token'}</span></td>
                    <td><span className="token-context">{t.context || 'Visual styling'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7. Code / Implementation */}
      <section className="doc-section">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Code & Implementation</h2>
          <p className="doc-section-subtitle">JSX usage and component invocation.</p>
        </div>
        <Source />
      </section>

      {/* 8. Variants & States */}
      <section className="doc-section">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Variants & States</h2>
          <p className="doc-section-subtitle">All preserved component variants and interaction states.</p>
        </div>
        <Stories />
      </section>
    </div>
  );
};
