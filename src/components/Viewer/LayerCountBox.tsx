import React from 'react';
import styled from '@emotion/styled';
import { Int } from '@m-bock/gcode-viewer-core/Prim';
import { toNumber } from '@m-bock/gcode-viewer-core/Extra/Data/Int';


type Props = {
    currentLayer: Int;
    totalLayers: Int;
}

const StyledRoot = styled.div`
    padding: 10px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    opacity: 0.5;
`

export const LayerCountBox: React.FC<Props> = ({ currentLayer, totalLayers }) => {
    return <StyledRoot>{toNumber(currentLayer)} / {toNumber(totalLayers)}</StyledRoot>
}