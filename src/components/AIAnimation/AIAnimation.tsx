import React from 'react';
import './AIAnimation.css';

export interface AIAnimationProps {
  /** Size variant controlling the orb diameter */
  size?: 'small' | 'medium' | 'large';
  /** Active living breathing state vs idle standby */
  active?: boolean;
  /** Optional status text displayed below the orb */
  statusText?: string;
  /** Optional custom CSS class */
  className?: string;
}

/**
 * **AI Animation**
 * 
 * Preserved layer name component from Figma (`AI Animation`, ID: `9:7423`).
 * Central healthcare AI assistant presence rendered as a soft, translucent circular orb
 * of overlapping pastel tones (lavender, peach, sky blue, soft mint) with calm organic motion.
 */
export const AIAnimation: React.FC<AIAnimationProps> = ({
  size = 'medium',
  active = true,
  statusText,
  className = '',
}) => {
  return (
    <div
      className={`uedp-ai-animation uedp-ai-animation--${size} ${
        active ? 'uedp-ai-animation--active' : 'uedp-ai-animation--idle'
      } ${className}`}
      role="img"
      aria-label={`AI Assistant presence (${active ? 'Active' : 'Standby'})`}
    >
      <div className="uedp-ai-animation__glow" />
      <div className="uedp-ai-animation__orb">
        <div className="uedp-ai-animation__layer uedp-ai-animation__layer--lavender" />
        <div className="uedp-ai-animation__layer uedp-ai-animation__layer--peach" />
        <div className="uedp-ai-animation__layer uedp-ai-animation__layer--sky" />
        <div className="uedp-ai-animation__layer uedp-ai-animation__layer--mint" />
        <div className="uedp-ai-animation__layer uedp-ai-animation__layer--core" />
      </div>
      {statusText && <span className="uedp-ai-animation__status">{statusText}</span>}
    </div>
  );
};

export default AIAnimation;
