import React from 'react';
import './Easecard.css';
import { Plus, Building2, ShieldCheck, HeartPulse } from 'lucide-react';

export interface EasecardProps {
  /** Figma variant state */
  provider?: 'KIMS' | 'Tata' | 'Metro' | 'Add' | 'formkit:add';
  /** Provider title text */
  name?: string;
  /** Subtitle / Hospital type */
  type?: string;
  /** Click callback */
  onClick?: () => void;
}

/**
 * **Easecard**
 * 
 * Preserved layer name component from Figma (\`Easecard\`, ID: \`9:7343\`).
 * Healthcare network provider badge & card selection component.
 */
export const Easecard: React.FC<EasecardProps> = ({
  provider = 'KIMS',
  name = provider === 'Add' || provider === 'formkit:add' ? 'Add Hospital' : `${provider} Hospital`,
  type = provider === 'Add' || provider === 'formkit:add' ? 'Connect records' : 'Primary Network Provider',
  onClick,
}) => {
  const isAdd = provider === 'Add' || provider === 'formkit:add';

  const renderIcon = () => {
    switch (provider) {
      case 'KIMS':
        return <HeartPulse size={24} className="uedp-easecard__icon uedp-easecard__icon--kims" />;
      case 'Tata':
        return <ShieldCheck size={24} className="uedp-easecard__icon uedp-easecard__icon--tata" />;
      case 'Metro':
        return <Building2 size={24} className="uedp-easecard__icon uedp-easecard__icon--metro" />;
      default:
        return <Plus size={24} className="uedp-easecard__icon uedp-easecard__icon--add" />;
    }
  };

  return (
    <div
      className={`uedp-easecard ${isAdd ? 'uedp-easecard--add' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="uedp-easecard__icon-box">{renderIcon()}</div>
      <div className="uedp-easecard__body">
        <h4 className="uedp-easecard__title">{name}</h4>
        <p className="uedp-easecard__subtitle">{type}</p>
      </div>
    </div>
  );
};

export default Easecard;
