import React from 'react';
import './AIAnimation.css';
import { Bot, Sparkles } from 'lucide-react';

export interface AIAnimationProps {
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Status indicator label */
  statusText?: string;
  /** Active pulsating state */
  active?: boolean;
}

/**
 * **AI Animation**
 * 
 * Preserved layer name component from Figma (\`AI Animation\`, ID: \`9:7423\`).
 * Micro-animated AI assistant indicator with pulsing glowing ring animations.
 */
export const AIAnimation: React.FC<AIAnimationProps> = ({
  size = 'medium',
  statusText = 'AI Health Assistant Active',
  active = true,
}) => {
  return (
    <div className={`uedp-ai-animation uedp-ai-animation--${size} ${active ? 'uedp-ai-animation--active' : ''}`}>
      <div className="uedp-ai-animation__pulse-ring" />
      <div className="uedp-ai-animation__core">
        <Bot size={24} className="uedp-ai-animation__bot-icon" />
        <Sparkles size={14} className="uedp-ai-animation__sparkle" />
      </div>
      {statusText && <span className="uedp-ai-animation__label">{statusText}</span>}
    </div>
  );
};

export default AIAnimation;
