import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './TokenInspector.css';
import { Sliders, RotateCcw, Copy, Check, ExternalLink, Palette, Square, Layers, Move, Type } from 'lucide-react';

export interface DesignTokenItem {
  property: string;
  token: string;
  value?: string;
  context?: string;
}

export interface TokenInspectorProps {
  designTokens: DesignTokenItem[];
  componentTitle?: string;
  layerName?: string;
}

type TokenCategory = 'All' | 'Color' | 'Border' | 'Radius' | 'Spacing' | 'Typography';

interface TokenWithMeta extends DesignTokenItem {
  category: 'Color' | 'Border' | 'Radius' | 'Spacing' | 'Typography';
  tier: 'Foundational' | 'Semantic';
  resolvedValue: string;
}

export const TokenInspector: React.FC<TokenInspectorProps> = ({
  designTokens,
  componentTitle = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TokenCategory>('All');
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Runtime Customization State
  const [customRadius, setCustomRadius] = useState<number | null>(null);
  const [customPrimaryColor, setCustomPrimaryColor] = useState<string | null>(null);
  const [customBorderColor, setCustomBorderColor] = useState<string | null>(null);
  const [customSpacing, setCustomSpacing] = useState<number | null>(null);

  const isCustomized =
    customRadius !== null ||
    customPrimaryColor !== null ||
    customBorderColor !== null ||
    customSpacing !== null;

  // Curated color swatches
  const colorPresets = [
    { name: 'Teal', hex: '#14b8a6' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Zinc', hex: '#18181b' },
    { name: 'Rose', hex: '#f43f5e' },
  ];

  const borderPresets = [
    { name: 'Slate', hex: '#e2e8f0' },
    { name: 'Black', hex: '#000000' },
    { name: 'Amber', hex: '#fde68a' },
    { name: 'Teal', hex: '#14b8a6' },
    { name: 'Zinc', hex: '#3f3f46' },
  ];

  // Apply runtime CSS custom property overrides to documentElement
  useEffect(() => {
    const root = document.documentElement;

    if (customRadius !== null) {
      const radStr = `${customRadius}px`;
      root.style.setProperty('--uedp-input-radius', radStr);
      root.style.setProperty('--uedp-card-radius', radStr);
      root.style.setProperty('--uedp-doctors-radius', radStr);
      root.style.setProperty('--uedp-easecard-radius', radStr);
    } else {
      root.style.removeProperty('--uedp-input-radius');
      root.style.removeProperty('--uedp-card-radius');
      root.style.removeProperty('--uedp-doctors-radius');
      root.style.removeProperty('--uedp-easecard-radius');
    }

    if (customBorderColor !== null) {
      root.style.setProperty('--uedp-input-border', customBorderColor);
      root.style.setProperty('--uedp-card-border', customBorderColor);
      root.style.setProperty('--uedp-doctors-border', customBorderColor);
    } else {
      root.style.removeProperty('--uedp-input-border');
      root.style.removeProperty('--uedp-card-border');
      root.style.removeProperty('--uedp-doctors-border');
    }

    if (customPrimaryColor !== null) {
      root.style.setProperty('--theme-accent-primary', customPrimaryColor);
      root.style.setProperty('--uedp-card-bg', customPrimaryColor);
    } else {
      root.style.removeProperty('--theme-accent-primary');
      root.style.removeProperty('--uedp-card-bg');
    }

    if (customSpacing !== null) {
      const padStr = `${customSpacing}px`;
      root.style.setProperty('--uedp-input-padding', `${Math.max(6, customSpacing - 6)}px ${customSpacing}px`);
      root.style.setProperty('--uedp-card-padding', padStr);
      root.style.setProperty('--uedp-doctors-padding', padStr);
    } else {
      root.style.removeProperty('--uedp-input-padding');
      root.style.removeProperty('--uedp-card-padding');
      root.style.removeProperty('--uedp-doctors-padding');
    }

    return () => {
      // Cleanup on unmount or reset
      root.style.removeProperty('--uedp-input-radius');
      root.style.removeProperty('--uedp-card-radius');
      root.style.removeProperty('--uedp-doctors-radius');
      root.style.removeProperty('--uedp-easecard-radius');
      root.style.removeProperty('--uedp-input-border');
      root.style.removeProperty('--uedp-card-border');
      root.style.removeProperty('--uedp-doctors-border');
      root.style.removeProperty('--theme-accent-primary');
      root.style.removeProperty('--uedp-card-bg');
      root.style.removeProperty('--uedp-input-padding');
      root.style.removeProperty('--uedp-card-padding');
      root.style.removeProperty('--uedp-doctors-padding');
    };
  }, [customRadius, customBorderColor, customPrimaryColor, customSpacing]);

  // Reset tokens to default
  const handleReset = useCallback(() => {
    setCustomRadius(null);
    setCustomPrimaryColor(null);
    setCustomBorderColor(null);
    setCustomSpacing(null);
  }, []);

  // Reset when navigating between components
  useEffect(() => {
    handleReset();
  }, [componentTitle, handleReset]);

  // Copy token to clipboard
  const handleCopyToken = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  // Jump to Foundations Documentation
  const handleJumpToFoundations = () => {
    const el = window.parent?.document?.querySelector('[data-item-id="foundations-tokens-foundational-tokens--docs"]');
    if (el instanceof HTMLElement) {
      el.click();
    } else {
      window.location.hash = '#foundations-tokens-foundational-tokens--docs';
    }
  };

  // Process & Categorize Tokens
  const enrichedTokens: TokenWithMeta[] = useMemo(() => {
    return (designTokens || []).map((t) => {
      const propLower = t.property.toLowerCase();
      const tokenLower = t.token.toLowerCase();

      let category: 'Color' | 'Border' | 'Radius' | 'Spacing' | 'Typography' = 'Color';

      if (propLower.includes('radius') || tokenLower.includes('rounded')) {
        category = 'Radius';
      } else if (propLower.includes('font') || propLower.includes('typography') || propLower.includes('letter-spacing')) {
        category = 'Typography';
      } else if (propLower.includes('gap') || propLower.includes('spacing') || propLower.includes('padding')) {
        category = 'Spacing';
      } else if (propLower.includes('border') && !propLower.includes('radius')) {
        category = 'Border';
      } else {
        category = 'Color';
      }

      const isSemantic =
        tokenLower.startsWith('--theme-') ||
        tokenLower.includes('easecard') ||
        tokenLower.includes('doctor') ||
        t.property.includes('(');

      let liveResolved = t.value || 'Theme token';

      // Reflect live customized values
      if (category === 'Radius' && customRadius !== null) {
        liveResolved = `${customRadius}px (Customized)`;
      } else if (category === 'Border' && customBorderColor !== null && propLower.includes('color')) {
        liveResolved = `${customBorderColor} (Customized)`;
      } else if (category === 'Color' && customPrimaryColor !== null && (propLower.includes('background') || propLower.includes('accent'))) {
        liveResolved = `${customPrimaryColor} (Customized)`;
      } else if (category === 'Spacing' && customSpacing !== null && propLower.includes('padding')) {
        liveResolved = `${customSpacing}px (Customized)`;
      }

      return {
        ...t,
        category,
        tier: isSemantic ? 'Semantic' : 'Foundational',
        resolvedValue: liveResolved,
      };
    });
  }, [designTokens, customRadius, customBorderColor, customPrimaryColor, customSpacing]);

  const filteredTokens = useMemo(() => {
    if (selectedCategory === 'All') return enrichedTokens;
    return enrichedTokens.filter((t) => t.category === selectedCategory);
  }, [enrichedTokens, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<TokenCategory, number> = {
      All: enrichedTokens.length,
      Color: 0,
      Border: 0,
      Radius: 0,
      Spacing: 0,
      Typography: 0,
    };
    enrichedTokens.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, [enrichedTokens]);

  const getCategoryIcon = (cat: TokenCategory) => {
    switch (cat) {
      case 'Color':
        return <Palette size={13} />;
      case 'Border':
        return <Square size={13} />;
      case 'Radius':
        return <Layers size={13} />;
      case 'Spacing':
        return <Move size={13} />;
      case 'Typography':
        return <Type size={13} />;
      default:
        return null;
    }
  };

  return (
    <div className="doc-token-inspector" role="region" aria-label="Design Token Inspector and Live Customizer">
      {/* Top Inspector Header & Controls */}
      <div className="doc-token-inspector__toolbar">
        {/* Category Filter Pills */}
        <div className="doc-token-inspector__filters" role="tablist" aria-label="Token Categories">
          {(['All', 'Color', 'Border', 'Radius', 'Spacing', 'Typography'] as TokenCategory[]).map((cat) => {
            const count = categoryCounts[cat] || 0;
            if (cat !== 'All' && count === 0) return null;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`doc-token-filter-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
                <span className="doc-token-filter-btn__count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="doc-token-inspector__actions">
          {isCustomized && (
            <button
              type="button"
              className="doc-token-action-btn doc-token-action-btn--reset"
              onClick={handleReset}
              title="Reset all token overrides back to design system defaults"
              aria-label="Reset tokens"
            >
              <RotateCcw size={13} />
              <span>Reset Tokens</span>
            </button>
          )}

          <button
            type="button"
            className={`doc-token-action-btn doc-token-action-btn--customize ${isCustomizeOpen ? 'is-active' : ''}`}
            onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
            aria-expanded={isCustomizeOpen}
            aria-label="Toggle live token customization controls"
          >
            <Sliders size={13} />
            <span>{isCustomizeOpen ? 'Hide Customizer' : 'Customize Tokens'}</span>
          </button>
        </div>
      </div>

      {/* Controlled Live Token Customizer Panel */}
      {isCustomizeOpen && (
        <div className="doc-token-customizer-panel">
          <div className="doc-token-customizer-panel__header">
            <span className="doc-token-customizer-title">Live Token Customizer (Runtime Simulation)</span>
            <span className="doc-token-customizer-badge">Temporary Override</span>
          </div>

          <p className="doc-token-customizer-desc">
            Adjust curated tokens below to observe how the real component specimen updates instantly in the canvas above.
          </p>

          <div className="doc-token-customizer-grid">
            {/* Control 1: Corner Radius */}
            <div className="doc-customizer-control">
              <div className="doc-customizer-control__label-row">
                <label htmlFor="token-slider-radius" className="doc-customizer-control__label">
                  Corner Radius
                </label>
                <span className="doc-customizer-control__val">
                  {customRadius !== null ? `${customRadius}px` : 'Default'}
                </span>
              </div>
              <input
                id="token-slider-radius"
                type="range"
                min="0"
                max="36"
                step="2"
                value={customRadius ?? 10}
                onChange={(e) => setCustomRadius(Number(e.target.value))}
                aria-label="Corner radius token slider"
                className="doc-customizer-slider"
              />
            </div>

            {/* Control 2: Primary / Accent Color */}
            <div className="doc-customizer-control">
              <div className="doc-customizer-control__label-row">
                <label className="doc-customizer-control__label">Primary / Surface Color</label>
                <span className="doc-customizer-control__val">{customPrimaryColor || 'Default'}</span>
              </div>
              <div className="doc-customizer-swatches">
                {colorPresets.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    className={`doc-customizer-swatch ${customPrimaryColor === p.hex ? 'is-selected' : ''}`}
                    style={{ backgroundColor: p.hex }}
                    onClick={() => setCustomPrimaryColor(p.hex)}
                    title={`Apply ${p.name} (${p.hex})`}
                    aria-label={`Color swatch ${p.name}`}
                  />
                ))}
                <input
                  type="color"
                  value={customPrimaryColor || '#14b8a6'}
                  onChange={(e) => setCustomPrimaryColor(e.target.value)}
                  className="doc-customizer-color-picker"
                  title="Pick custom color"
                  aria-label="Pick custom accent color"
                />
              </div>
            </div>

            {/* Control 3: Border Color */}
            <div className="doc-customizer-control">
              <div className="doc-customizer-control__label-row">
                <label className="doc-customizer-control__label">Border Color</label>
                <span className="doc-customizer-control__val">{customBorderColor || 'Default'}</span>
              </div>
              <div className="doc-customizer-swatches">
                {borderPresets.map((b) => (
                  <button
                    key={b.name}
                    type="button"
                    className={`doc-customizer-swatch ${customBorderColor === b.hex ? 'is-selected' : ''}`}
                    style={{ backgroundColor: b.hex }}
                    onClick={() => setCustomBorderColor(b.hex)}
                    title={`Apply ${b.name} (${b.hex})`}
                    aria-label={`Border swatch ${b.name}`}
                  />
                ))}
                <input
                  type="color"
                  value={customBorderColor || '#e2e8f0'}
                  onChange={(e) => setCustomBorderColor(e.target.value)}
                  className="doc-customizer-color-picker"
                  title="Pick custom border color"
                  aria-label="Pick custom border color"
                />
              </div>
            </div>

            {/* Control 4: Spacing / Padding */}
            <div className="doc-customizer-control">
              <div className="doc-customizer-control__label-row">
                <label htmlFor="token-slider-spacing" className="doc-customizer-control__label">
                  Container Spacing
                </label>
                <span className="doc-customizer-control__val">
                  {customSpacing !== null ? `${customSpacing}px` : 'Default'}
                </span>
              </div>
              <input
                id="token-slider-spacing"
                type="range"
                min="8"
                max="36"
                step="2"
                value={customSpacing ?? 16}
                onChange={(e) => setCustomSpacing(Number(e.target.value))}
                aria-label="Container spacing slider"
                className="doc-customizer-slider"
              />
            </div>
          </div>
        </div>
      )}

      {/* Categorized Token Hierarchy & Lineage Table */}
      <div className="doc-token-inspector__table-container">
        <table className="doc-token-table doc-token-inspector__table">
          <thead>
            <tr>
              <th>Role & Property</th>
              <th>Bound CSS Token</th>
              <th>Tier</th>
              <th>Live Resolved</th>
              <th>Design Context</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTokens.map((t, idx) => {
              const isCopied = copiedToken === t.token;
              const isColorSwatch = t.category === 'Color' || t.property.includes('color');
              return (
                <tr key={idx} className={`doc-token-row doc-token-row--${t.category.toLowerCase()}`}>
                  <td>
                    <div className="doc-token-role-cell">
                      <span className="doc-token-cat-icon" title={t.category}>
                        {getCategoryIcon(t.category)}
                      </span>
                      <span className="token-property-name">{t.property}</span>
                    </div>
                  </td>

                  <td>
                    <div className="token-chip">
                      {isColorSwatch && (
                        <span
                          className="token-swatch"
                          style={{ backgroundColor: `var(${t.token}, #14b8a6)` }}
                        />
                      )}
                      <code>{t.token}</code>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`doc-token-tier-badge doc-token-tier-badge--${t.tier.toLowerCase()}`}
                    >
                      {t.tier}
                    </span>
                  </td>

                  <td>
                    <span className="token-val">{t.resolvedValue}</span>
                  </td>

                  <td>
                    <span className="token-context">{t.context || 'Visual styling'}</span>
                  </td>

                  <td>
                    <div className="doc-token-actions-cell">
                      <button
                        type="button"
                        className="doc-token-icon-btn"
                        onClick={() => handleCopyToken(t.token)}
                        title="Copy CSS variable name"
                        aria-label={`Copy ${t.token}`}
                      >
                        {isCopied ? <Check size={12} color="#0f766e" /> : <Copy size={12} />}
                      </button>

                      <button
                        type="button"
                        className="doc-token-icon-btn"
                        onClick={handleJumpToFoundations}
                        title="View token definition in Foundations"
                        aria-label={`View ${t.token} in Foundations`}
                      >
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenInspector;
