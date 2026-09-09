import React, { useState, useEffect } from 'react';
import './Password.css';
import { Eye, EyeOff, Lock, AlertCircle } from 'lucide-react';

export interface PasswordProps {
  /** State variant matching Figma Password component set */
  state?: 'Default' | 'Error' | 'Pressed' | 'Filled';
  /** Field label */
  label?: string;
  /** Controlled password value */
  value?: string;
  /** Default initial password value for uncontrolled usage */
  defaultValue?: string;
  /** Helper/Error message */
  errorMessage?: string;
  /** Value change handler */
  onChange?: (val: string) => void;
}

/**
 * **Password**
 * 
 * Preserved layer name component from Figma (`Password`, ID: `12:3538`).
 * Type-safe password field with masked dots, status rings, and error state.
 */
export const Password: React.FC<PasswordProps> = ({
  state = 'Default',
  label = 'Password',
  value: controlledValue,
  defaultValue,
  errorMessage = 'Password must be at least 8 characters',
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [val, setVal] = useState<string>(() => {
    if (controlledValue !== undefined) return controlledValue;
    if (defaultValue !== undefined) return defaultValue;
    if (state === 'Filled') return 'SuperSecret123!';
    return '';
  });

  useEffect(() => {
    if (controlledValue !== undefined) {
      setVal(controlledValue);
    } else if (defaultValue !== undefined) {
      setVal(defaultValue);
    } else if (state === 'Filled') {
      setVal('SuperSecret123!');
    } else if (state === 'Error') {
      setVal('123');
    } else if (state === 'Default') {
      setVal('');
    }
  }, [controlledValue, defaultValue, state]);

  const isError = state === 'Error';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    setVal(nextVal);
    onChange?.(nextVal);
  };

  return (
    <div className={`uedp-password-field uedp-password-field--${state.toLowerCase()}`}>
      <label className="uedp-password-field__label">{label}</label>

      <div className="uedp-password-field__input-container">
        <Lock size={18} className="uedp-password-field__icon-left" />
        <input
          type={showPassword ? 'text' : 'password'}
          className="uedp-password-field__input"
          value={val}
          placeholder="••••••••••••"
          onChange={handleChange}
        />
        <button
          type="button"
          className="uedp-password-field__toggle-btn"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {isError && (
        <div className="uedp-password-field__error-msg">
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Password;
