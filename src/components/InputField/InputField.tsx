import React from 'react';
import './InputField.css';
import { User, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export interface InputFieldProps {
  /** Figma state variant */
  state?: 'Input Field - Status' | 'Entered' | 'Error' | 'Variant4';
  /** Field Label */
  label?: string;
  /** Input value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error text string */
  errorMessage?: string;
  /** On change callback */
  onChange?: (val: string) => void;
}

/**
 * **Input Field**
 * 
 * Preserved layer name component from Figma (\`Input Field\`, ID: \`12:3542\`).
 * Type-safe text input field with status indicators and error states.
 */
export const InputField: React.FC<InputFieldProps> = ({
  state = 'Input Field - Status',
  label = 'Full Name',
  value = state === 'Entered' ? 'Jane Doe' : state === 'Error' ? 'Invalid Name!' : '',
  placeholder = 'Enter full name...',
  errorMessage = 'Please enter a valid full name',
  onChange,
}) => {
  const isError = state === 'Error';
  const isEntered = state === 'Entered';

  return (
    <div className={`uedp-input-field uedp-input-field--${state.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <label className="uedp-input-field__label">{label}</label>

      <div className="uedp-input-field__container">
        <User size={18} className="uedp-input-field__icon-left" />
        <input
          type="text"
          className="uedp-input-field__input"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {isEntered && <CheckCircle2 size={18} className="uedp-input-field__icon-status uedp-input-field__icon-status--success" />}
        {isError && <XCircle size={18} className="uedp-input-field__icon-status uedp-input-field__icon-status--error" />}
      </div>

      {isError && (
        <div className="uedp-input-field__error-msg">
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
