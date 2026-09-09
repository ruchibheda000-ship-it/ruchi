import React from 'react';
import './DoctorsSwipe.css';
import { ArrowUpRight } from 'lucide-react';

export interface DoctorsSwipeProps {
  /** Doctor full name with credentials (from Figma: Dr. Acharya) */
  doctorName?: string;
  /** Medical specialty (from Figma: Nephrologist) */
  specialty?: string;
  /** Associated hospital / clinic facility (from Figma: KIMS Kingsway Hospital) */
  hospital?: string;
  /** Days of availability (from Figma: Available on week days) */
  availability?: string;
  /** Consultation hours (from Figma: 10:00 AM - 01:00 PM) */
  hours?: string;
  /** Optional custom image avatar URL */
  avatarUrl?: string;
  /** Callback fired when doctor card or CTA arrow is clicked */
  onSelectDoctor?: () => void;
  /** Callback fired specifically when the CTA arrow button is clicked */
  onAction?: () => void;
  /** Preserved Figma variant / cycle state */
  variant?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Selected';
  /** Preserved rating score for backward compatibility */
  rating?: number;
  /** Preserved prompt text for backward compatibility */
  promptText?: string;
}

const DoctorAvatarGraphic: React.FC<{ size?: number }> = ({ size = 68 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 68 68"
    fill="none"
    className="uedp-doctors-swipe__avatar-svg"
    aria-hidden="true"
  >
    {/* Soft slate-blue circular background from Figma */}
    <circle cx="34" cy="34" r="34" fill="#D1D7E0" />
    {/* Medical white coat */}
    <path
      d="M16 66C16 52 24 47 34 47C44 47 52 52 52 66"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="1.6"
    />
    {/* Shirt collar & inner detail */}
    <path d="M29 48L34 55L39 48" stroke="#000000" strokeWidth="1.5" fill="#E2E8F0" />
    {/* Stethoscope */}
    <path
      d="M26 50C26 58 31 63 34 63C37 63 42 58 42 50"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="34" cy="62" r="2.5" fill="#000000" />
    {/* Neck */}
    <rect x="30" y="38" width="8" height="10" fill="#FADBC8" />
    {/* Face */}
    <ellipse cx="34" cy="30" rx="12" ry="13.5" fill="#FADBC8" />
    {/* Hair */}
    <path
      d="M22 28C22 18 27 15 34 15C41 15 46 18 46 28C44 23 40 21 34 21C28 21 24 23 22 28Z"
      fill="#262626"
    />
    {/* Eyeglasses */}
    <rect x="25" y="27" width="7" height="6" rx="2" stroke="#000000" strokeWidth="1.3" fill="none" />
    <rect x="36" y="27" width="7" height="6" rx="2" stroke="#000000" strokeWidth="1.3" fill="none" />
    <line x1="32" y1="30" x2="36" y2="30" stroke="#000000" strokeWidth="1.3" />
    <line x1="22" y1="28.5" x2="25" y2="29.5" stroke="#000000" strokeWidth="1.3" />
    <line x1="43" y1="29.5" x2="46" y2="28.5" stroke="#000000" strokeWidth="1.3" />
    {/* Subtle smile */}
    <path
      d="M31 38C32.5 39.5 35.5 39.5 37 38"
      stroke="#9A4838"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * **Doctors Swipe** (`❖ Card -1`)
 * 
 * Preserved layer name component from Figma (`❖ Card -1` / `Doctors Swipe`, ID: `12:3550`).
 * Practitioner discovery and appointment card with 2px solid black border, 32px rounded corners,
 * doctor avatar, specialty credentials, hospital affiliate, consultation schedule, and diagonal CTA button.
 */
export const DoctorsSwipe: React.FC<DoctorsSwipeProps> = ({
  doctorName = 'Dr. Acharya',
  specialty = 'Nephrologist',
  hospital = 'KIMS Kingsway Hospital',
  availability = 'Available on week days',
  hours = '10:00 AM - 01:00 PM',
  avatarUrl,
  onSelectDoctor,
  onAction,
  variant = 'Default',
}) => {
  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAction) {
      onAction();
    } else if (onSelectDoctor) {
      onSelectDoctor();
    }
  };

  return (
    <div
      className={`uedp-doctors-swipe uedp-doctors-swipe--${variant.toLowerCase()}`}
      onClick={onSelectDoctor}
      role="article"
      tabIndex={0}
      aria-label={`${doctorName}, ${specialty} at ${hospital}`}
    >
      {/* Top Header: Doctor Avatar + Name & Specialty */}
      <div className="uedp-doctors-swipe__header">
        <div className="uedp-doctors-swipe__avatar-container">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={doctorName}
              className="uedp-doctors-swipe__avatar-img"
            />
          ) : (
            <DoctorAvatarGraphic size={68} />
          )}
        </div>
        <div className="uedp-doctors-swipe__doctor-info">
          <h3 className="uedp-doctors-swipe__name">{doctorName}</h3>
          <p className="uedp-doctors-swipe__specialty">{specialty}</p>
        </div>
      </div>

      {/* Middle: Hospital Facility Affiliation */}
      <div className="uedp-doctors-swipe__middle">
        <h4 className="uedp-doctors-swipe__hospital">{hospital}</h4>
      </div>

      {/* Bottom Footer: Availability & Timings + Action Button */}
      <div className="uedp-doctors-swipe__footer">
        <div className="uedp-doctors-swipe__schedule">
          <span className="uedp-doctors-swipe__availability">{availability}</span>
          <span className="uedp-doctors-swipe__hours">{hours}</span>
        </div>

        <button
          type="button"
          className="uedp-doctors-swipe__action-btn"
          onClick={handleActionClick}
          aria-label={`Book appointment with ${doctorName}`}
        >
          <ArrowUpRight size={26} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
};

export default DoctorsSwipe;
