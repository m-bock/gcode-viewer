import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import React, { ReactNode } from 'react';
import * as styles from './Viewer.module.css';
import { Slider } from '../Slider';
import { Ticks } from '../Ticks';

type Props = {
    viewPictures: ReactNode,
    viewGcode: ReactNode,
    item: IndexFileItem,
    viewSlider: ReactNode,
    children: ReactNode
}

export const Viewer: React.FC<Props> = ({ viewPictures, viewGcode, viewSlider, item, children }) => {
    return (<div className={styles.root}>
        {children}

        <div className={styles.label}>{item.name}</div>
        {viewPictures}
        {viewGcode}

        <div className={styles.slider}>
            {viewSlider}
        </div>
    </div>)
}