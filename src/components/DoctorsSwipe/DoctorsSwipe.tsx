import React from 'react';
import './DoctorsSwipe.css';
import { Sparkles, Mic, Search, Star, User } from 'lucide-react';

export interface DoctorsSwipeProps {
  /** Figma variant state */
  variant?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Selected';
  /** Doctor Name */
  doctorName?: string;
  /** Doctor Specialty */
  specialty?: string;
  /** Rating score */
  rating?: number;
  /** Prompt query placeholder */
  promptText?: string;
  /** On click doctor card */
  onSelectDoctor?: () => void;
}

/**
 * **Doctors Swipe**
 * 
 * Preserved layer name component from Figma (\`Doctors Swipe\`, ID: \`12:3550\`).
 * Interactive doctor swipe card with AI voice/text input box and doctor credentials.
 */
export const DoctorsSwipe: React.FC<DoctorsSwipeProps> = ({
  variant = 'Default',
  doctorName = 'Dr. Sarah Jenkins',
  specialty = 'Cardiologist • 12 Yrs Exp',
  rating = 4.9,
  promptText = variant === 'Selected' ? 'What|' : 'Ask anything...',
  onSelectDoctor,
}) => {
  return (
    <div className={`uedp-doctors-swipe uedp-doctors-swipe--${variant.toLowerCase()}`}>
      <div className="uedp-doctors-swipe__card" onClick={onSelectDoctor}>
        <div className="uedp-doctors-swipe__avatar-wrapper">
          <div className="uedp-doctors-swipe__avatar">
            <User size={32} className="uedp-doctors-swipe__avatar-icon" />
          </div>
          <span className="uedp-doctors-swipe__badge">
            <Star size={12} fill="currentColor" /> {rating}
          </span>
        </div>

        <div className="uedp-doctors-swipe__info">
          <h4 className="uedp-doctors-swipe__name">{doctorName}</h4>
          <p className="uedp-doctors-swipe__specialty">{specialty}</p>
        </div>
      </div>

      <div className="uedp-doctors-swipe__ai-bar">
        <Sparkles size={16} className="uedp-doctors-swipe__ai-icon" />
        <input
          type="text"
          className="uedp-doctors-swipe__input"
          value={promptText}
          readOnly
          placeholder="Ask anything..."
        />
        <div className="uedp-doctors-swipe__voice-btn" title="Voice AI fill">
          <Mic size={16} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsSwipe;
