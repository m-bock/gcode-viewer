import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import React, { ReactNode } from 'react';
import * as styles from './Viewer.module.css';
import { Slider } from '../Slider';

type Props = {
    viewPictures: ReactNode,
    viewGcode: ReactNode,
    item: IndexFileItem,
    viewSlider: ReactNode
}

export const Viewer: React.FC<Props> = ({ viewPictures, viewGcode, viewSlider }) => {
    return (<div className={styles.root}>
        {viewPictures}
        {viewGcode}
        <div className={styles.slider}>
            {viewSlider}
        </div>
    </div>)
}