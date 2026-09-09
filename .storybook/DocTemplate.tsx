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

      {/* 2. Purpose / Description */}
      <Description />

      {/* 3. Component Preview */}
      <section className="doc-section doc-section-preview">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Preview</h2>
          <p className="doc-section-subtitle">Interactive component specimen canvas with live props inspection.</p>
        </div>
        <Primary />
      </section>

      {/* 4. Variants */}
      {stories.length > 1 && (
        <section className="doc-section doc-section-variants">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Variants</h2>
            <p className="doc-section-subtitle">Interaction states and design permutations supported by this component.</p>
          </div>

          <div className="doc-variants-metadata">
            <span className="doc-variants-label">Available Variants</span>
            <div className="doc-variants-list">
              {stories.map((s: any, idx: number) => {
                const isPrimary = s.id === primaryStory?.id;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`doc-variant-link ${isPrimary ? 'is-active' : ''}`}
                    title={`Jump to ${s.name} variant`}
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

          <Stories />
        </section>
      )}

      {/* 5. Properties & API */}
      <section className="doc-section doc-section-api">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Properties & API</h2>
          <p className="doc-section-subtitle">Configurable props, callbacks, and available options.</p>
        </div>
        <Controls />
      </section>

      {/* 6. Design Tokens */}
      {designTokens && designTokens.length > 0 && (
        <section className="doc-section doc-section-tokens">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Design Tokens</h2>
            <p className="doc-section-subtitle">Design system CSS custom property bindings and theme values.</p>
          </div>
          <div className="doc-token-table-wrapper">
            <table className="doc-token-table">
              <thead>
                <tr>
                  <th>Property / Role</th>
                  <th>Bound Token (CSS Variable)</th>
                  <th>Resolved Value</th>
                  <th>Design Context</th>
                </tr>
              </thead>
              <tbody>
                {designTokens.map((t: any, i: number) => (
                  <tr key={i}>
                    <td><span className="token-property-name">{t.property}</span></td>
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

      {/* 7. Code & Implementation */}
      <section className="doc-section doc-section-code">
        <div className="doc-section-header">
          <h2 className="doc-section-title">Code & Implementation</h2>
          <p className="doc-section-subtitle">JSX usage reference and component invocation.</p>
        </div>
        <Source />
      </section>

      {/* 8. Technical Metadata & Figma Traceability */}
      {figma && (
        <section className="doc-section doc-section-traceability">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Figma & Design System Traceability</h2>
            <p className="doc-section-subtitle">Source lineage between Figma canvas and codebase implementation.</p>
          </div>
          <div className="doc-traceability-card">
            <div className="doc-traceability-grid">
              {figma.category && (
                <div className="doc-traceability-item">
                  <span className="doc-traceability-label">Category</span>
                  <span className="doc-traceability-val">{figma.category}</span>
                </div>
              )}
              {figma.status && (
                <div className="doc-traceability-item">
                  <span className="doc-traceability-label">Status</span>
                  <span className="doc-meta-badge status-stable">{figma.status}</span>
                </div>
              )}
              {figma.nodeId && (
                <div className="doc-traceability-item">
                  <span className="doc-traceability-label">Figma Node ID</span>
                  <code className="doc-meta-code">{figma.nodeId}</code>
                </div>
              )}
              {figma.layerName && (
                <div className="doc-traceability-item">
                  <span className="doc-traceability-label">Figma Layer</span>
                  <code className="doc-meta-code">{figma.layerName}</code>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
