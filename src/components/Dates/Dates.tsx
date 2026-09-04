import React, { useState } from 'react';
import './Dates.css';
import { DateComponent } from '../Date/Date';

export interface DatesProps {
  /** Array of date items */
  items?: Array<{ day: string; dateNumber: number }>;
  /** Currently selected index */
  selectedIndex?: number;
  /** Selection handler */
  onSelectDate?: (index: number) => void;
}

/**
 * **Dates**
 * 
 * Preserved layer name component from Figma (\`Dates\`, ID: \`11:3366\`).
 * Horizontal date picker carousel strip containing date pills.
 */
export const Dates: React.FC<DatesProps> = ({
  items = [
    { day: 'Mon', dateNumber: 14 },
    { day: 'Tue', dateNumber: 15 },
    { day: 'Wed', dateNumber: 16 },
    { day: 'Thu', dateNumber: 17 },
    { day: 'Fri', dateNumber: 18 },
    { day: 'Sat', dateNumber: 19 },
    { day: 'Sun', dateNumber: 20 },
  ],
  selectedIndex = 0,
  onSelectDate,
}) => {
  const [active, setActive] = useState(selectedIndex);

  const handleSelect = (idx: number) => {
    setActive(idx);
    onSelectDate?.(idx);
  };

  return (
    <div className="uedp-dates-strip" role="region" aria-label="Date selection strip">
      {items.map((item, idx) => (
        <DateComponent
          key={`${item.day}-${item.dateNumber}`}
          day={item.day}
          dateNumber={item.dateNumber}
          state={active === idx ? 'Selected' : 'As is'}
          onClick={() => handleSelect(idx)}
        />
      ))}
    </div>
  );
};

export default Dates;
