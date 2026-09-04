import React from 'react';
import './All.css';

export interface AllProps {
  /** Variant property matching Figma Property 1 */
  state?: 'Default' | 'Not Selected';
  /** Filter label */
  label?: string;
  /** On click handler */
  onClick?: () => void;
}

/**
 * **All**
 * 
 * Preserved layer name component from Figma (\`All\`, ID: \`12:3547\`).
 * Filter pill tag selection component.
 */
export const AllComponent: React.FC<AllProps> = ({
  state = 'Default',
  label = 'All',
  onClick,
}) => {
  const isSelected = state === 'Default';

  return (
    <button
      type="button"
      className={`uedp-all-pill ${isSelected ? 'uedp-all-pill--selected' : 'uedp-all-pill--not-selected'}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      <span className="uedp-all-pill__label">{label}</span>
    </button>
  );
};

export default AllComponent;
