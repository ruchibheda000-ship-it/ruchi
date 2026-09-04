import React from 'react';
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
  const isSelected = state === 'Selected';

  return (
    <button
      type="button"
      className={`uedp-nav-home-btn uedp-nav-home-btn--${state.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      <Home className="uedp-nav-home-btn__icon" size={20} />
      <span className="uedp-nav-home-btn__label">{label}</span>
    </button>
  );
};

export default NavigationHomeButton;
