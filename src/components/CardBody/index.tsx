import React from "react";

export interface CardBody extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const CardBody = ({ children }: CardBody) => (
    <div className="deepui-card-body">
        {children}
    </div>
)