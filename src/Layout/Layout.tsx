import React from 'react';

type Props = {
    children?: React.ReactNode,
    viewErrors?: React.ReactNode,
    viewInfo?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children, viewErrors, viewInfo }) => {
    return (
        <div>
            <div>{children}</div>
            <div>{viewErrors}</div>
            <div>{viewInfo}</div>
        </div>)
}