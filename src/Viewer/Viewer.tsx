import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import React, { ReactNode } from 'react';
import * as styles from './Viewer.module.css';
import { Slider } from '../Slider';
import { Ticks } from '../Ticks';

type Props = {
    viewPictures: ReactNode,
    viewGcode: ReactNode,
    item: IndexFileItem,
    viewSlider: ReactNode
}

export const Viewer: React.FC<Props> = ({ viewPictures, viewGcode, viewSlider, item }) => {
    return (<div className={styles.root}>
        <div className={styles.label}>{item.name}</div>
        {viewPictures}
        {viewGcode}
        <div className={styles.ticks}>
            <Ticks min={0} max={100} step={10} />
        </div>
        <div className={styles.slider}>
            {viewSlider}
        </div>
    </div>)
}