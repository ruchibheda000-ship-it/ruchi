import React from 'react';
import './Frame37.css';
import { DoctorsSwipe } from '../DoctorsSwipe/DoctorsSwipe';
import { ChevronRight } from 'lucide-react';

export interface Frame37Props {
  /** Section heading title (from Figma: Recommended Specialists) */
  heading?: string;
  /** Optional action trigger text (e.g. See all) */
  actionText?: string;
  /** Callback fired when action trigger is clicked */
  onActionClick?: () => void;
  /** Callback fired when any doctor card is selected */
  onSelectDoctor?: (doctorName: string) => void;
}

/**
 * **Frame 37**
 * 
 * Preserved layer name component from Figma (`Frame 37`, ID: `11:3457`).
 * Recommended specialists carousel section coordinating section header typography with a horizontal doctor appointment card rail.
 */
export const Frame37: React.FC<Frame37Props> = ({
  heading = 'Recommended Specialists',
  actionText = 'See all',
  onActionClick,
  onSelectDoctor,
}) => {
  return (
    <section className="uedp-frame37" aria-label={heading}>
      <div className="uedp-frame37__header">
        <h3 className="uedp-frame37__heading">{heading}</h3>
        {actionText && (
          <button
            type="button"
            className="uedp-frame37__action-btn"
            onClick={onActionClick}
            aria-label={`${actionText} ${heading}`}
          >
            <span>{actionText}</span>
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      <div className="uedp-frame37__carousel" role="region" aria-label="Doctors carousel">
        <div className="uedp-frame37__card-item">
          <DoctorsSwipe
            doctorName="Dr. Acharya"
            specialty="Nephrologist"
            hospital="KIMS Kingsway Hospital"
            availability="Available on week days"
            hours="10:00 AM - 01:00 PM"
            onSelectDoctor={() => onSelectDoctor?.('Dr. Acharya')}
          />
        </div>
        <div className="uedp-frame37__card-item">
          <DoctorsSwipe
            doctorName="Dr. Sarah Jenkins"
            specialty="Cardiologist"
            hospital="Apollo Hospitals City Centre"
            availability="Available Mon - Sat"
            hours="09:00 AM - 12:00 PM"
            onSelectDoctor={() => onSelectDoctor?.('Dr. Sarah Jenkins')}
          />
        </div>
        <div className="uedp-frame37__card-item">
          <DoctorsSwipe
            doctorName="Dr. Emily Watson"
            specialty="Pediatric Specialist"
            hospital="Memorial Childrens Hospital"
            availability="Available on weekends"
            hours="11:00 AM - 03:00 PM"
            onSelectDoctor={() => onSelectDoctor?.('Dr. Emily Watson')}
          />
        </div>
      </div>
    </section>
  );
};

export default Frame37;
