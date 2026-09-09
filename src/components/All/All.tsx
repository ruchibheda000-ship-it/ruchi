import React, { useState, useEffect } from 'react';
import './All.css';

export interface AllProps {
  /** Variant property matching Figma Property 1 (`Default` is Selected, `Not Selected` is Inactive) */
  state?: 'Default' | 'Not Selected';
  /** Filter tag label text */
  label?: string;
  /** Optional icon displayed before label */
  icon?: React.ReactNode;
  /** On click handler */
  onClick?: () => void;
}

/**
 * **All**
 * 
 * Preserved layer name component from Figma (`All`, ID: `12:3547`).
 * Category filter pill tag selection component supporting selected (`Default`) and unselected (`Not Selected`) visual states.
 */
export const AllComponent: React.FC<AllProps> = ({
  state = 'Default',
  label = 'All',
  icon,
  onClick,
}) => {
  const [internalSelected, setInternalSelected] = useState(state === 'Default');

  useEffect(() => {
    setInternalSelected(state === 'Default');
  }, [state]);

  const handleClick = () => {
    setInternalSelected((prev) => !prev);
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`uedp-all-pill ${
        internalSelected ? 'uedp-all-pill--selected' : 'uedp-all-pill--not-selected'
      }`}
      onClick={handleClick}
      aria-pressed={internalSelected}
      aria-label={`Filter category: ${label}, ${internalSelected ? 'selected' : 'not selected'}`}
    >
      {icon && <span className="uedp-all-pill__icon">{icon}</span>}
      <span className="uedp-all-pill__label">{label}</span>
    </button>
  );
};

export default AllComponent;
