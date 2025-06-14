import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const Card = ({ children, ...rest }: CardProps) => {
    return (
        <div className="deepui-card" {...rest}>
            {children}
        </div>
    )
}
