import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import React, { ReactNode } from 'react';
import * as styles from './Viewer.module.css';

type Props = {
    viewPictures: ReactNode,
    viewGcode: ReactNode,
    item: IndexFileItem
}

export const Viewer: React.FC<Props> = ({ viewPictures, viewGcode }) => {
    return (<div className={styles.root}>
        {viewPictures}
        {viewGcode}
    </div>)
}