import React from 'react'

export interface Alert extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    message: string
    type?: 'success' | 'error' | 'warning' | 'info'
}

export function Alert({ title, message, type, ...rest }: Alert) {
    const typeClass = type ? `deepui-alert-${type}` : '';
    return (
        <div className={`deepui-alert ${typeClass}`} {...rest}>
            {title && <div className='deepui-alert-title'>{title}</div>}
            <span>{message}</span>
        </div>
    )
}