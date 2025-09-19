import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
    padding: 10px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    opacity: 0.2;
`

type Props = {
    currentLayer: number;
    totalLayers: number;
}

export const LayerCountBox: React.FC<Props> = ({ currentLayer, totalLayers }) => {
    return <Root>{currentLayer} / {totalLayers}</Root>;
}