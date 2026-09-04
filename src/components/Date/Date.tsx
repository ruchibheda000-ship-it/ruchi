import React from 'react';
import './Date.css';

export interface DateProps {
  /** Variant property matching Figma Property 1 */
  state?: 'As is' | 'Selected';
  /** Day of week abbrev (e.g. Mon, Tue) */
  day?: string;
  /** Date number (e.g. 14, 24) */
  dateNumber?: number | string;
  /** On click callback */
  onClick?: () => void;
}

/**
 * **Date**
 * 
 * Preserved layer name component from Figma (\`Date\`, ID: \`10:2569\`).
 * Calendar date picker pill item with active selected highlighting.
 */
export const DateComponent: React.FC<DateProps> = ({
  state = 'As is',
  day = 'Mon',
  dateNumber = 14,
  onClick,
}) => {
  const isSelected = state === 'Selected';

  return (
    <button
      type="button"
      className={`uedp-date-pill ${isSelected ? 'uedp-date-pill--selected' : 'uedp-date-pill--as-is'}`}
      onClick={onClick}
      aria-selected={isSelected}
    >
      <span className="uedp-date-pill__day">{day}</span>
      <span className="uedp-date-pill__number">{dateNumber}</span>
    </button>
  );
};

export default DateComponent;
