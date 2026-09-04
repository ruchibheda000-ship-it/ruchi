import React from 'react';
import './Frame37.css';
import { DoctorsSwipe } from '../DoctorsSwipe/DoctorsSwipe';

export interface Frame37Props {
  /** Section heading */
  heading?: string;
}

/**
 * **Frame 37**
 * 
 * Preserved layer name component from Figma (\`Frame 37\`, ID: \`11:3457\`).
 * Doctor list carousel container layout matching Figma frame node \`11:3457\`.
 */
export const Frame37: React.FC<Frame37Props> = ({
  heading = 'Recommended Specialists',
}) => {
  return (
    <div className="uedp-frame37">
      <h3 className="uedp-frame37__heading">{heading}</h3>
      <div className="uedp-frame37__carousel">
        <DoctorsSwipe variant="Selected" doctorName="Dr. Sarah Jenkins" specialty="Cardiologist • 12 Yrs" rating={4.9} />
        <DoctorsSwipe variant="Default" doctorName="Dr. Marcus Vance" specialty="Neurologist • 15 Yrs" rating={5.0} />
        <DoctorsSwipe variant="Default" doctorName="Dr. Elena Rostova" specialty="Pediatrician • 8 Yrs" rating={4.8} />
      </div>
    </div>
  );
};

export default Frame37;
