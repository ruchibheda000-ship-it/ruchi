import React from 'react';
import './Easecard.css';
import { Plus } from 'lucide-react';

export interface EasecardProps {
  /** Figma variant / provider theme */
  provider?: 'KIMS' | 'Tata' | 'Metro' | 'Add' | 'formkit:add';
  /** Provider title text (defaults to KIMS KINGSWAY / TATA AIG / METROPOLIS) */
  name?: string;
  /** Subtitle / Hospital type */
  type?: string;
  /** Patient / Member Name */
  patientName?: string;
  /** Card member number sequence */
  cardNumber?: string;
  /** Click callback */
  onClick?: () => void;
}

const NfcContactlessIcon: React.FC = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    className="uedp-easecard__nfc-icon"
  >
    <path d="M2.5 6C1.5 7.5 1.5 12.5 2.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5.5 4C3.8 6.2 3.8 13.8 5.5 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M9.5 10C9 8 10.5 6.5 12 8.5C13.5 6.5 15 8 14.5 10C14 12 12 13.5 12 13.5C12 13.5 10 12 9.5 10Z"
      fill="currentColor"
    />
    <path d="M18.5 4C20.2 6.2 20.2 13.8 18.5 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M21.5 6C22.5 7.5 22.5 12.5 21.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BarcodeGraphic: React.FC = () => (
  <svg
    width="84"
    height="24"
    viewBox="0 0 84 24"
    fill="currentColor"
    className="uedp-easecard__barcode"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="3" height="24" />
    <rect x="5" y="0" width="1.5" height="24" />
    <rect x="8" y="0" width="3.5" height="24" />
    <rect x="13" y="0" width="2" height="24" />
    <rect x="17" y="0" width="1.5" height="24" />
    <rect x="20" y="0" width="4" height="24" />
    <rect x="26" y="0" width="1.5" height="24" />
    <rect x="29" y="0" width="3" height="24" />
    <rect x="34" y="0" width="2" height="24" />
    <rect x="38" y="0" width="3.5" height="24" />
    <rect x="43" y="0" width="1.5" height="24" />
    <rect x="46" y="0" width="3" height="24" />
    <rect x="51" y="0" width="2" height="24" />
    <rect x="55" y="0" width="4" height="24" />
    <rect x="61" y="0" width="1.5" height="24" />
    <rect x="64" y="0" width="3" height="24" />
    <rect x="69" y="0" width="2" height="24" />
    <rect x="73" y="0" width="4" height="24" />
    <rect x="79" y="0" width="3" height="24" />
  </svg>
);

/**
 * **Easecard**
 * 
 * Preserved layer name component from Figma (`Easecard`, ID: `9:7343` / `❖ KIMS Kingsway`).
 * Digital healthcare access card displaying member identity, provider branding, NFC indicator, and barcode.
 */
export const Easecard: React.FC<EasecardProps> = ({
  provider = 'KIMS',
  name,
  type,
  patientName = 'RUCHI BHEDA',
  cardNumber = '123  456  7890',
  onClick,
}) => {
  const isAdd = provider === 'Add' || provider === 'formkit:add';

  // Default provider titles from Figma screenshot
  const resolvedTitle = name || (
    provider === 'KIMS' ? 'KIMS KINGSWAY' :
    provider === 'Tata' ? 'TATA AIG' :
    provider === 'Metro' ? 'METROPOLIS' :
    'ADD HOSPITAL'
  );

  const providerThemeClass = `uedp-easecard--${provider.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  if (isAdd) {
    return (
      <div
        className="uedp-easecard uedp-easecard--add"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label="Add new health card"
      >
        <div className="uedp-easecard__add-content">
          <div className="uedp-easecard__add-icon-box">
            <Plus size={24} />
          </div>
          <span className="uedp-easecard__add-label">{name || 'Add Health Card'}</span>
          {type && <span className="uedp-easecard__add-subtitle">{type}</span>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`uedp-easecard ${providerThemeClass}`}
      onClick={onClick}
      role="article"
      tabIndex={0}
      aria-label={`${resolvedTitle} health pass for ${patientName}`}
    >
      <div className="uedp-easecard__header">
        <NfcContactlessIcon />
      </div>

      <div className="uedp-easecard__body">
        <span className="uedp-easecard__patient-name">{patientName}</span>
        <h3 className="uedp-easecard__provider-title">{resolvedTitle}</h3>
      </div>

      <div className="uedp-easecard__footer">
        <span className="uedp-easecard__number">{cardNumber}</span>
        <BarcodeGraphic />
      </div>
    </div>
  );
};

export default Easecard;
