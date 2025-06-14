import React from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import './Button.css'

export const Button = ({ children }: { children: React.ReactNode }) => {
    const theme = useTheme()
    return (
        <button
            className='deepui-button'
        >
            {children}
        </button>
    )
}