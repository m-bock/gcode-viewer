import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { WebGLPreview } from 'gcode-preview';
import * as GCodePreview from 'gcode-preview';
import { Int } from '@m-bock/gcode-viewer-core/Prim';
import { toNumber, trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';


const StyledCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

type Props = {
    gcode: string[],
    endLayer: Int,
    onMaxLayerIndex: (maxLayerIndex: Int) => void
}


export const View3D: React.FC<Props> = ({ gcode, endLayer, onMaxLayerIndex }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const webglRef = useRef<{ webgl: WebGLPreview | null }>({ webgl: null });

    const webgl = webglRef.current.webgl;

    const reset = () => {
        if (!webgl) return
        webgl.clear();
        webgl.processGCode(gcode);
        onMaxLayerIndex(trunc(webgl.layers.length));

        webgl.render()

    }

    useEffect(() => {
        if (!canvasRef.current || webgl) return

        webglRef.current.webgl = GCodePreview.init({
            canvas: canvasRef.current,
            lineWidth: 4,
            lineHeight: 4,
            renderTravel: false,
            renderExtrusion: true,
            renderTubes: false,
            startLayer: 0,
            endLayer: toNumber(endLayer),
            backgroundColor: 'black',
            buildVolume: { x: 220, y: 220, z: 0 },
        });

        reset()
    }, []);

    useEffect(() => {
        reset()
    }, [gcode]);

    useEffect(() => {
        if (!webgl) return
        webgl.endLayer = toNumber(endLayer);
        webgl.render()

    }, [endLayer]);

    return <StyledCanvas ref={canvasRef} />
}