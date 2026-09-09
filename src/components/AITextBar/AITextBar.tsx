import React, { useState } from 'react';
import './AITextBar.css';
import { Paperclip } from 'lucide-react';

export interface AITextBarProps {
  /** Input field value */
  value?: string;
  /** Placeholder text (defaults to 'Ask anything...') */
  placeholder?: string;
  /** Callback fired when text changes */
  onChange?: (val: string) => void;
  /** Callback fired when user submits query (e.g. Enter key) */
  onSubmit?: (val: string) => void;
  /** Callback fired when attachment paperclip is clicked */
  onAttachmentClick?: () => void;
  /** Callback fired when voice audio waveform is clicked */
  onVoiceClick?: () => void;
  /** Optional custom CSS class */
  className?: string;
}

const AudioWaveformIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="uedp-ai-text-bar__waveform-icon"
    aria-hidden="true"
  >
    <path d="M2 10v4" />
    <path d="M6 6v12" />
    <path d="M10 3v18" />
    <path d="M14 8v8" />
    <path d="M18 5v14" />
    <path d="M22 10v4" />
  </svg>
);

/**
 * **AI Text Bar / AI Prompt Input**
 * 
 * Bottom conversational AI input capsule pill with attachment trigger on the left,
 * centered 'Ask anything...' placeholder input, and audio waveform on the right.
 */
export const AITextBar: React.FC<AITextBarProps> = ({
  value: controlledValue,
  placeholder = 'Ask anything...',
  onChange,
  onSubmit,
  onAttachmentClick,
  onVoiceClick,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit?.(currentValue);
    }
  };

  return (
    <div
      className={`uedp-ai-text-bar ${className}`}
      role="search"
      aria-label="AI Prompt Input"
    >
      {/* Left Attachment Icon */}
      <button
        type="button"
        className="uedp-ai-text-bar__btn uedp-ai-text-bar__btn--attach"
        onClick={onAttachmentClick}
        aria-label="Attach medical document or image"
      >
        <Paperclip size={20} strokeWidth={2} />
      </button>

      {/* Center Input Area */}
      <div className="uedp-ai-text-bar__input-wrapper">
        <input
          type="text"
          className="uedp-ai-text-bar__input"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>

      {/* Right Voice Waveform Icon */}
      <button
        type="button"
        className="uedp-ai-text-bar__btn uedp-ai-text-bar__btn--voice"
        onClick={onVoiceClick}
        aria-label="Voice dictation prompt"
      >
        <AudioWaveformIcon size={20} />
      </button>
    </div>
  );
};

export default AITextBar;
