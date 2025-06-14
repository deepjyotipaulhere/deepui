import React from "react";

export interface CardHeader extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string
    children?: React.ReactNode
}

export const CardHeader = ({ title, subtitle, children, ...rest }: CardHeader) => {
    return (
        <div className="deepui-card-header" {...rest}>
            <div className="deepui-card-header-title">{title}</div>
            <div className="deepui-card-header-subtitle">{subtitle}</div>
            {children}
        </div>
    )
}