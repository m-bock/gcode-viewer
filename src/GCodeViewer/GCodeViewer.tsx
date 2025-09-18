import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import styles from './GCodeViewer.module.css';
import { WebGLPreview } from 'gcode-preview';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';

type Props = {
    gcode: string[],
    endLayer: number,
    onMaxLayerIndex: (maxLayerIndex: number) => void
}

export const GCodeViewer: React.FC<Props> = ({ gcode, endLayer, onMaxLayerIndex }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const webglRef = useRef<{ webgl: WebGLPreview | null }>({ webgl: null });


    useEffect(() => {
        if (canvasRef.current && !webglRef.current.webgl) {
            webglRef.current.webgl = GCodePreview.init({
                canvas: canvasRef.current,
                lineWidth: 4,
                lineHeight: 4,
                renderTravel: false,
                renderExtrusion: true,
                renderTubes: false,
                startLayer: 0,
                endLayer,
                backgroundColor: 'black',
                buildVolume: {
                    x: 220,
                    y: 220,
                    z: 0,
                },
            });

            webglRef.current.webgl.clear();
            webglRef.current.webgl.processGCode(gcode);
            onMaxLayerIndex(webglRef.current.webgl.layers.length);

            webglRef.current.webgl.render()
        }
    }, []);

    useEffect(() => {
        if (canvasRef.current && webglRef.current.webgl) {

            webglRef.current.webgl.clear();
            webglRef.current.webgl.processGCode(gcode);
            onMaxLayerIndex(webglRef.current.webgl.layers.length);
            webglRef.current.webgl.render()
        }
    }, [gcode]);

    useEffect(() => {
        if (canvasRef.current && webglRef.current.webgl) {
            webglRef.current.webgl.endLayer = endLayer;
            webglRef.current.webgl.render()
        }
    }, [endLayer]);



    return <canvas ref={canvasRef} className={styles.canvas} />
}

