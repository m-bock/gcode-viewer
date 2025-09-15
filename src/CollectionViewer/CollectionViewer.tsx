import React, { ReactNode } from 'react';
import styles from './CollectionViewer.module.css';

type Props = {
    items: ReactNode[]
}

export const CollectionViewer: React.FC<Props> = ({ items }) => {
    return (<div className={styles.root}>
        {items.map((item) => item)}
    </div>)
}