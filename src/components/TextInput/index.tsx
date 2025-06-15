import React, { useState, ReactNode } from 'react'

export interface TextInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    prepend?: ReactNode
    append?: ReactNode
    helperText?: ReactNode
}

export function TextInput({ label, type, placeholder, value: propValue, onChange, prepend, append, helperText, ...rest }: TextInput) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(propValue ?? '');
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange && onChange(e);
    };

    // Use propValue if controlled, otherwise use local value
    const inputValue = propValue !== undefined ? propValue : value;

    // Hide placeholder if label exists and not focused
    const inputPlaceholder = label && !focused ? '' : placeholder;

    // Determine input type for password toggle
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type || 'text';

    return (
        <div className='deepui-textinput'>
            {label && (
                <label
                    className={`deepui-floating-label${(focused || inputValue) ? ' floating' : ''}`}
                >
                    {label}
                </label>
            )}
            <div className='deepui-input-wrapper'>
                {prepend && <span className='deepui-prepend'>{prepend}</span>}
                <input
                    type={inputType}
                    placeholder={inputPlaceholder}
                    {...rest}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="deepui-append deepui-password-toggle"
                        tabIndex={-1}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword((v) => !v)}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </button>
                )}
                {append && <span className='deepui-append'>{append}</span>}
            </div>
            {helperText && <label className='deepui-helper-text'>{helperText}</label>}
        </div>
    )
}