import React, { ReactNode } from 'react';

type Props = {
    items: ReactNode[]
}

export const CollectionViewer: React.FC<Props> = ({ items }) => {
    return (<div>
        {items.map((item) => item)}
    </div>)
}