import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import React, { ReactNode } from 'react';

type Props = {
    viewPictures: ReactNode,
    viewGcode: ReactNode,
    item: IndexFileItem
}

export const Viewer: React.FC<Props> = ({ viewPictures, viewGcode }) => {
    return (<div>
        {viewPictures}
        {viewGcode}
    </div>)
}