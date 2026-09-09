import React, { useState, useEffect } from 'react';
import './NavigationHomeButton.css';
import { Home } from 'lucide-react';

export interface NavigationHomeButtonProps {
  /** Variant state matching Figma component set */
  state?: 'Selected' | 'As is';
  /** Label text for the button */
  label?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * **Navigation - Home Button**
 * 
 * Preserved layer name component from Figma (`Navigation - Home Button`, ID: `8:4123`).
 * Supports variant state bound variables (`Selected`, `As is`).
 */
export const NavigationHomeButton: React.FC<NavigationHomeButtonProps> = ({
  state = 'As is',
  label = 'Home',
  onClick,
}) => {
  const [internalSelected, setInternalSelected] = useState(state === 'Selected');

  useEffect(() => {
    setInternalSelected(state === 'Selected');
  }, [state]);

  const handleClick = () => {
    setInternalSelected((prev) => !prev);
    onClick?.();
  };

  const resolvedState = internalSelected ? 'Selected' : 'As is';

  return (
    <button
      type="button"
      className={`uedp-nav-home-btn uedp-nav-home-btn--${resolvedState.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={handleClick}
      aria-pressed={internalSelected}
    >
      <Home className="uedp-nav-home-btn__icon" size={20} />
      <span className="uedp-nav-home-btn__label">{label}</span>
    </button>
  );
};

export default NavigationHomeButton;
