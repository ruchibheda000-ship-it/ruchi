import React, { useState, useEffect } from 'react';
import './InputField.css';
import { User, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export interface InputFieldProps {
  /** Figma state variant */
  state?: 'Input Field - Status' | 'Entered' | 'Error' | 'Variant4';
  /** Field Label */
  label?: string;
  /** Controlled input value */
  value?: string;
  /** Default initial value for uncontrolled usage */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error text string */
  errorMessage?: string;
  /** On change callback */
  onChange?: (val: string) => void;
  /** On focus callback */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** On blur callback */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * **Input Field**
 * 
 * Preserved layer name component from Figma (`Input Field`, ID: `12:3542`).
 * Fully typable, interactive text input field supporting controlled and uncontrolled usage,
 * status indicators, validation feedback, and placeholder restoration.
 */
export const InputField: React.FC<InputFieldProps> = ({
  state = 'Input Field - Status',
  label = 'Full Name',
  value: controlledValue,
  defaultValue,
  placeholder = 'Enter full name...',
  errorMessage = 'Please enter a valid full name',
  onChange,
  onFocus,
  onBlur,
}) => {
  // Determine initial value based on explicit prop or state default
  const [internalValue, setInternalValue] = useState<string>(() => {
    if (controlledValue !== undefined) return controlledValue;
    if (defaultValue !== undefined) return defaultValue;
    if (state === 'Entered') return 'Jane Doe';
    if (state === 'Error') return 'Invalid Name!';
    return '';
  });

  // Synchronize internal state when controlledValue, defaultValue, or state updates from parent / Storybook controls
  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    } else if (defaultValue !== undefined) {
      setInternalValue(defaultValue);
    } else if (state === 'Entered') {
      setInternalValue('Jane Doe');
    } else if (state === 'Error') {
      setInternalValue('Invalid Name!');
    } else if (state === 'Input Field - Status') {
      setInternalValue('');
    }
  }, [controlledValue, defaultValue, state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    setInternalValue(nextVal);
    onChange?.(nextVal);
  };

  const isError = state === 'Error';
  const isEntered = state === 'Entered' || internalValue.length > 0;

  return (
    <div className={`uedp-input-field uedp-input-field--${state.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <label className="uedp-input-field__label">{label}</label>

      <div className="uedp-input-field__container">
        <User size={18} className="uedp-input-field__icon-left" />
        <input
          type="text"
          className="uedp-input-field__input"
          value={internalValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isEntered && !isError && (
          <CheckCircle2 size={18} className="uedp-input-field__icon-status uedp-input-field__icon-status--success" />
        )}
        {isError && (
          <XCircle size={18} className="uedp-input-field__icon-status uedp-input-field__icon-status--error" />
        )}
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
