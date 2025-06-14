import React from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import './Button.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    loading?: boolean
    color?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    disabled,
    loading,
    type = 'button',
    style,
    color = 'primary',
    ...rest
}) => {
    const theme = useTheme()
    return (
        <button
            className={`deepui-button deepui-button--${color}${className ? ` ${className}` : ''}`}
            disabled={disabled || loading}
            type={type}
            style={style}
            {...rest}
        >
            <div>
                <span>
                    {children}
                </span>
                <span className="deepui-button-spinner-container">
                    {loading ? <span className="deepui-button-spinner"></span> : null}
                </span>
            </div>
        </button>
    )
}