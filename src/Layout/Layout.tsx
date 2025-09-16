import React from 'react';
import * as pkgJson from '../../package.json';
import * as corePkgJson from '@m-bock/gcode-viewer-core/package.json';
import * as styles from './Layout.module.css';

type Props = {
    children?: React.ReactNode,
    viewErrors?: React.ReactNode,
    viewInfo?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children, viewErrors, viewInfo }) => {
    return (
        <div className={styles.root}>
            <div>{children}</div>
            <div>{viewErrors}</div>
            <div>{viewInfo}</div>
            <div className={styles.version}>{pkgJson.version} - {corePkgJson.version}</div>
        </div>)
}